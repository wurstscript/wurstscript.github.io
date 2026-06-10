/** Data model produced by the parser and consumed by the emitter. */

export type EntityKind =
  | "function"
  | "extension-function"
  | "class"
  | "interface"
  | "enum"
  | "tuple"
  | "module"
  | "constant";

export interface Deprecation {
  flag: boolean;
  message: string | null;
}

export interface Entity {
  kind: EntityKind;
  /** Declared name. For extension functions this is the method name (without receiver). */
  name: string;
  /** Generic parameters incl. angle brackets, e.g. "<T>"; "" if none. */
  typeParams: string;
  /** Extension-function receiver type, e.g. "unit" or "LinkedList<T>"; null otherwise. */
  receiver: string | null;
  /** Verbatim declaration line(s), whitespace-collapsed, sans trailing colon. */
  signature: string;
  /** Hotdoc body as markdown ("" if undocumented). */
  doc: string;
  deprecated: Deprecation;
  configurable: boolean;
  /** Public methods/constructors of a class/interface/module; empty otherwise. */
  members: Entity[];
  /** Enum case names (inline comments stripped); empty for non-enums. */
  enumMembers: string[];
  /** 1-based source line of the declaration. */
  line: number;
}

export interface PackageDoc {
  /** Package name from the `package` line. */
  package: string;
  /** Top-level folder under wurst/, e.g. "data". */
  category: string;
  /** Human label for the category, e.g. "Data Structures". */
  categoryLabel: string;
  /** Path relative to the stdlib repo root, e.g. "wurst/data/LinkedList.wurst". */
  sourcePath: string;
  /** Permalink to the source on GitHub. */
  githubUrl: string;
  /** Package-level hotdoc as markdown ("" if none). */
  summary: string;
  /** First non-empty line of the summary, for cards/indexes ("" if none). */
  summaryFirstLine: string;
  /** Lowercased, de-duplicated, sorted tags (category + curated). */
  tags: string[];
  /** Imported package names (for context; not rendered prominently). */
  imports: string[];
  /** Public API surface in source order. */
  entities: Entity[];
}
