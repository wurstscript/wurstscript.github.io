import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function workspacePath(path) {
  const resolved = resolve(root, path);
  if (resolved !== root && !relative(root, resolved).startsWith("..")) {
    return resolved;
  }
  throw new Error(`Refusing to modify path outside the workspace: ${resolved}`);
}

function remove(path) {
  rmSync(workspacePath(path), { recursive: true, force: true });
}

function copy(source, destination) {
  const target = workspacePath(destination);
  mkdirSync(dirname(target), { recursive: true });
  cpSync(workspacePath(source), target, { recursive: true });
}

[
  "assets/plugins/bootstrap",
  "assets/plugins/font-awesome",
  "assets/plugins/prism",
  "assets/plugins/jquery-1.12.3.min.js",
  "assets/plugins/jquery-match-height",
  "assets/plugins/jquery-scrollTo",
  "assets/plugins/lightbox"
].forEach(remove);

copy(
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "assets/plugins/bootstrap/css/bootstrap.min.css"
);
const bootstrapCss = workspacePath(
  "assets/plugins/bootstrap/css/bootstrap.min.css"
);
writeFileSync(
  bootstrapCss,
  readFileSync(bootstrapCss, "utf8").replace(
    /\n?\/\*# sourceMappingURL=bootstrap\.min\.css\.map \*\//,
    ""
  )
);
[
  "fontawesome.min.css",
  "brands.min.css",
  "regular.min.css",
  "solid.min.css",
  "v4-shims.min.css"
].forEach((file) =>
  copy(
    join("node_modules/@fortawesome/fontawesome-free/css", file),
    join("assets/plugins/font-awesome/css", file)
  )
);
copy(
  "node_modules/@fortawesome/fontawesome-free/webfonts",
  "assets/plugins/font-awesome/webfonts"
);
copy("node_modules/prismjs/prism.js", "assets/plugins/prism/prism.js");
copy("node_modules/prismjs/themes/prism.css", "assets/plugins/prism/prism.css");
