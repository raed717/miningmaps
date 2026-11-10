/**
 * Tags to match filters against. Filters ("Gold", "Gemstones"...) are English keys, while `tags`
 * may be translated on /es and /fr, so prefer the English `tagKeys` the server keeps alongside.
 */
export function filterTags(project: { tags?: string[]; tagKeys?: string[] }): string[] {
  return project.tagKeys ?? project.tags ?? [];
}

/** Translated and English tags together, for free-text search in either language. */
export function searchableTags(project: { tags?: string[]; tagKeys?: string[] }): string[] {
  return [...(project.tags ?? []), ...(project.tagKeys ?? [])];
}
