/**
 * Convert a hotdoc body to Jekyll-friendly markdown.
 *
 * The main transformation: stdlib hotdoc writes inline code examples as runs of lines
 * prefixed with `>` (and sometimes `|`). We turn each such run into a fenced ```wurst block.
 * Everything else (bold, lists, inline backticks) is already valid kramdown and passes through.
 */
export function hotdocToMarkdown(doc: string): string {
  if (!doc) return "";
  const lines = doc.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (isExampleLine(line)) {
      const block: string[] = [];
      while (i < lines.length && (isExampleLine(lines[i]) || isBlankInExample(lines, i))) {
        if (isExampleLine(lines[i])) block.push(stripExamplePrefix(lines[i]));
        else block.push("");
        i++;
      }
      while (block.length && block[block.length - 1] === "") block.pop();
      out.push("```wurst");
      out.push(...block);
      out.push("```");
      continue;
    }
    out.push(normalizeDashes(line));
    i++;
  }

  return out.join("\n").trim();
}

/** Replace em dashes (and horizontal bars) with a spaced hyphen; leave en dashes (e.g. names). */
export function normalizeDashes(s: string): string {
  return s.replace(/\s*[—―]\s*/g, " - ");
}

function isExampleLine(line: string): boolean {
  return /^\s*[>|]\s?/.test(line);
}

/** A blank line counts as part of an example block only if another example line follows. */
function isBlankInExample(lines: string[], i: number): boolean {
  if (lines[i].trim() !== "") return false;
  for (let j = i + 1; j < lines.length; j++) {
    if (lines[j].trim() === "") continue;
    return isExampleLine(lines[j]);
  }
  return false;
}

function stripExamplePrefix(line: string): string {
  return line.replace(/^(\s*)[>|]\s?/, "$1");
}

/** First sentence/line of a doc, plain text, for index cards. */
export function summaryLine(doc: string): string {
  for (const l of doc.split("\n")) {
    const t = l.trim();
    if (t !== "" && !t.startsWith("```")) return t;
  }
  return "";
}
