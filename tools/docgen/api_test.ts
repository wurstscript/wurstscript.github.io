import { parseFile } from "./parser.ts";
import {
  buildTypeLinks,
  renderIndex,
  renderPackageIndex,
  renderPackagePage,
  renderTypePage,
  typeUrl,
} from "./emit.ts";
import { hotdocToMarkdown } from "./hotdoc.ts";

function expect(value: boolean, message: string) {
  if (!value) throw new Error(message);
}

Deno.test("API index preserves guide category fragments", () => {
  const packages = ["objediting", "data", "closures", "event", "math"].map((category) =>
    parseFile({
      text: `package ${category}\npublic class Example\n`,
      category,
      sourcePath: `wurst/${category}/Example.wurst`,
    })
  );
  const index = renderIndex(packages);
  for (const id of ["object-editing", "data-structures", "closures", "events", "math"]) {
    expect(index.includes(`id="${id}"`), `Missing category target ${id}`);
  }
  expect(index.includes('data-api-category="Object Editing"'), "Category cannot be filtered");
});

Deno.test("inheritance links resolve imports and public re-exports despite duplicate names", () => {
  const parse = (text: string) =>
    parseFile({ text, category: "data", sourcePath: "wurst/data/Test.wurst" });
  const table = parse("package Table\npublic class Table\n");
  const unrelated = parse("package UnitAnimations\npublic class Table\n");
  const exports = parse("package Tables\nimport public Table\n");
  const map = parse("package HashMap\nimport Tables\npublic class HashMap extends Table\n");
  const links = buildTypeLinks([table, unrelated, exports, map]);
  const page = renderTypePage(map, map.entities[0], {
    outDir: "",
    curated: new Map(),
    includes: new Set(),
    typeLinks: links,
  });
  expect(
    page.includes(`[Table](${typeUrl(table, table.entities[0])})`),
    "Imported base API is unreachable",
  );
  expect(!links.has("Table"), "Ambiguous global name was guessed");
  expect(
    !JSON.parse(renderPackageIndex([map]))[0].typeImports,
    "Private imports bloated package metadata",
  );
});

Deno.test("package index excludes the API tree rendered in reference pages", () => {
  const pkg = parseFile({
    category: "_wurst",
    sourcePath: "wurst/_wurst/AbilityIds.wurst",
    text: `package AbilityIds
/** Ability rawcodes. */
public class AbilityIds
    static constant blizzard = 'AHbz'
`,
  });
  const records = JSON.parse(renderPackageIndex([pkg]));
  expect(records.length === 1, "Package missing from index");
  expect(records[0].package === "AbilityIds", "Package identity lost");
  expect(records[0].summaryFirstLine === "Ability rawcodes.", "Summary lost");
  expect(records[0].githubUrl === pkg.githubUrl, "Source link lost");
  expect(!("entities" in records[0]), "Index duplicates the full API tree");
  expect(!renderPackageIndex([pkg]).includes("AHbz"), "Constant value leaked into index");
  expect(
    renderTypePage(pkg, pkg.entities[0], { outDir: "", curated: new Map(), includes: new Set() })
      .includes("static constant blizzard = 'AHbz'"),
    "Reference page lost the actual API",
  );
});

Deno.test("indented hotdoc examples preserve relative code indentation", () => {
  const result = hotdocToMarkdown(
    "    > @compiletime function createMyUnit()\n" +
      "    >     new UnitDefinition(UNIT_ID_GEN.next(), UnitIds.footman)\n" +
      '    >         ..setName("My Footman")',
  );
  expect(
    result === "```wurst\n@compiletime function createMyUnit()\n" +
        "    new UnitDefinition(UNIT_ID_GEN.next(), UnitIds.footman)\n" +
        '        ..setName("My Footman")\n```',
    "Example contains comment indentation",
  );
});

Deno.test("class constants retain values and docs while constructors retain their own docs", () => {
  const pkg = parseFile({
    category: "_wurst/assets",
    sourcePath: "wurst/_wurst/assets/AbilityIds.wurst",
    text: `package AbilityIds
public class AbilityIds
    /** Blizzard's base rawcode. */
    static constant blizzard = 'AHbz'
    private static constant hidden = 'XXXX'
    /** Choose a base ID. */
    construct(int baseId)
    function setCooldown(real value)
        constant localConstant = 1
`,
  });
  const members = pkg.entities[0].members;
  const constant = members.find((m) => m.name === "blizzard");
  expect(constant?.signature === "static constant blizzard = 'AHbz'", "Missing constant value");
  expect(constant?.doc === "Blizzard's base rawcode.", "Constant doc is detached");
  expect(!members.some((m) => m.name === "hidden"), "Private constant leaked");
  expect(!members.some((m) => m.name === "localConstant"), "Function local leaked into class API");
  expect(
    members.find((m) => m.name === "construct")?.doc === "Choose a base ID.",
    "Constructor doc is detached",
  );
  expect(
    members.find((m) => m.name === "setCooldown")?.doc === "",
    "Constructor doc leaked onto method",
  );
  const page = renderTypePage(pkg, pkg.entities[0], {
    outDir: "",
    curated: new Map(),
    includes: new Set(),
  });
  expect(page.includes("static constant blizzard = 'AHbz'"), "Rendered docs omit rawcode");
  expect(page.includes("Choose a base ID."), "Rendered docs omit constructor documentation");
  expect(page.includes('id="AbilityIds-blizzard"'), "Constant has no link target");
});

Deno.test("constant anchors distinguish case-sensitive class names", () => {
  const pkg = parseFile({
    category: "_wurst",
    sourcePath: "wurst/_wurst/UnitAnimations.wurst",
    text: `package UnitAnimations
public class MurlocFlesheater_med
    static constant stand2 = animationData(1, 2.)
public class MurlocFleshEater_Med
    static constant stand2 = animationData(2, 3.)
`,
  });
  const page = pkg.entities.map((e) =>
    renderTypePage(pkg, e, { outDir: "", curated: new Map(), includes: new Set() })
  ).join("\n");
  const anchors = [...page.matchAll(/id="([^"]+-stand2)"/g)].map((m) => m[1]);
  expect(anchors.length === 2, "Missing constant anchors");
  expect(new Set(anchors).size === 2, "Case-sensitive declarations share an anchor");
  expect(
    typeUrl(pkg, pkg.entities[0]).toLowerCase() !== typeUrl(pkg, pkg.entities[1]).toLowerCase(),
    "Type files collide on Windows",
  );
});

Deno.test("compact rawcode docs link to known constants without changing code examples", () => {
  const pkg = parseFile({
    category: "objediting",
    sourcePath: "wurst/objediting/AbilityObjEditing.wurst",
    text: `package AbilityObjEditing
/** 'AHbz' / AbilityIds.blizzard */
public class AbilityDefinitionArchMageBlizzard
    /** > new AbilityDefinitionArchMageBlizzard(AbilityIds.blizzard) */
    construct(int newId)
`,
  });
  const href = "/stdlib/ref/_wurst/assets/AbilityIds.html#AbilityIds-blizzard";
  const page = renderTypePage(pkg, pkg.entities[0], {
    outDir: "",
    curated: new Map(),
    includes: new Set(),
    referenceLinks: new Map([["AbilityIds.blizzard", href]]),
  });
  expect(
    page.includes(`'AHbz' / [AbilityIds.blizzard](${href})`),
    "Rawcode reference is not linked",
  );
  expect(
    page.includes("new AbilityDefinitionArchMageBlizzard(AbilityIds.blizzard)"),
    "Code example changed",
  );
  const unlinked = renderTypePage(pkg, pkg.entities[0], {
    outDir: "",
    curated: new Map(),
    includes: new Set(),
  });
  expect(
    unlinked.includes("'AHbz' / AbilityIds.blizzard"),
    "Unknown references must remain readable",
  );
});

Deno.test("package directories omit member bodies and type pages keep collapsed docs", () => {
  const pkg = parseFile({
    category: "objediting",
    sourcePath: "wurst/objediting/Abilities.wurst",
    text: `package Abilities
/** 'Ane2' / AbilityIds.neutralBuildinganyunit */
public class SelectUnit extends AbilityDefinition
    /** Creates a custom copy. */
    construct(int id)
    /** Damage Increase (%) / 'Roa1' */
    function setDamage(real value)
`,
  });
  const ctx = {
    outDir: "",
    curated: new Map<string, string>(),
    includes: new Set<string>(),
    typeLinks: new Map([["AbilityDefinition", "/base.html"]]),
  };
  const index = renderPackagePage(pkg, ctx);
  expect(index.includes(typeUrl(pkg, pkg.entities[0])), "Type cannot be reached from directory");
  expect(index.includes("Ane2"), "Directory cannot be searched by rawcode");
  expect(!index.includes("Creates a custom copy"), "Member docs bloated the directory");
  expect(index.includes('data-legacy-anchor="selectunit"'), "Old type fragments cannot be routed");
  const detail = renderTypePage(pkg, pkg.entities[0], ctx);
  expect(detail.includes("Creates a custom copy"), "Constructor doc missing");
  expect(detail.includes("Damage Increase (%)"), "Setter doc missing");
  expect(detail.includes("[AbilityDefinition](/base.html)"), "Inherited API is unreachable");
  expect(
    detail.includes("<details") && !detail.includes("<details open"),
    "Members start expanded",
  );
});
