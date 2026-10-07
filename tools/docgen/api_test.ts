import { parseFile } from "./parser.ts";
import { renderPackageIndex, renderPackagePage } from "./emit.ts";
import { hotdocToMarkdown } from "./hotdoc.ts";

function expect(value: boolean, message: string) {
  if (!value) throw new Error(message);
}

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
    renderPackagePage(pkg, { outDir: "", curated: new Map(), includes: new Set() })
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
  const page = renderPackagePage(pkg, { outDir: "", curated: new Map(), includes: new Set() });
  expect(page.includes("static constant blizzard = 'AHbz'"), "Rendered docs omit rawcode");
  expect(page.includes("Choose a base ID."), "Rendered docs omit constructor documentation");
  expect(page.includes('id="abilityids-blizzard"'), "Constant has no link target");
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
  const href = "/stdlib/ref/_wurst/assets/AbilityIds.html#abilityids-blizzard";
  const page = renderPackagePage(pkg, {
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
  const unlinked = renderPackagePage(pkg, { outDir: "", curated: new Map(), includes: new Set() });
  expect(
    unlinked.includes("'AHbz' / AbilityIds.blizzard"),
    "Unknown references must remain readable",
  );
});
