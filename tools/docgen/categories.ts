/** Category metadata: maps a top-level wurst/ folder to a label, and defines display order. */

export interface CategoryInfo {
  key: string;
  label: string;
}

/** Ordered list; also defines the order sections appear in the reference index. */
export const CATEGORIES: CategoryInfo[] = [
  { key: "objediting", label: "Object Editing" },
  { key: "data", label: "Data Structures" },
  { key: "closures", label: "Closures" },
  { key: "event", label: "Events" },
  { key: "dummy", label: "Dummies" },
  { key: "math", label: "Math" },
  { key: "file", label: "File & Network" },
  { key: "util", label: "Utilities" },
  { key: "_handles", label: "Handle Wrappers" },
  { key: "_wurst", label: "Core Language" },
  { key: ".", label: "Root" },
];

const LABEL_BY_KEY = new Map(CATEGORIES.map((c) => [c.key, c.label]));
const ORDER_BY_KEY = new Map(CATEGORIES.map((c, i) => [c.key, i]));

export function categoryLabel(key: string): string {
  return LABEL_BY_KEY.get(key) ?? key;
}

/** Sort index for a category; unknown categories sort last (but before each other alphabetically). */
export function categoryOrder(key: string): number {
  return ORDER_BY_KEY.get(key) ?? CATEGORIES.length;
}
