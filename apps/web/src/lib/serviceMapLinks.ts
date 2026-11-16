// Which Services page items link to which /sample-maps category (?type=...).
// Keyed by module id, then by the item's index in `services` / `deliverables`.
// The lists are index-aligned across en/es/fr (src/lib/i18n/translations/services.ts),
// so one table covers every language. A link only renders when that category has
// at least one published map, so categories without samples stay plain text.
import { SAMPLE_MAP_TYPES, type SampleMap, type SampleMapType } from "@/lib/sampleMapTypes";

type ModuleMapLinks = {
  services?: Partial<Record<number, SampleMapType>>;
  deliverables?: Partial<Record<number, SampleMapType>>;
};

export const SERVICE_MAP_LINKS: Record<string, ModuleMapLinks> = {
  "terrain-imagery": {
    // spectral analysis, LiDAR DTM/DEM, topographic & contour mapping, terrain modelling
    services: { 0: "spectral", 1: "dem-lidar", 2: "dem-lidar", 5: "dem-lidar" },
    // spectral & NDVI maps, LiDAR surface models, orthomosaic imagery
    deliverables: { 0: "spectral", 1: "dem-lidar", 2: "spectral" },
  },
  "mapping-targeting": {
    // claim & staking maps, geologic/geophysical/geochemical maps, survey plan georeferencing, parcel mapping
    services: { 1: "claim-tenure", 3: "geology", 4: "survey", 5: "land-title" },
  },
  "permitting-reporting": {
    services: { 0: "permit" }, // permit applications
    deliverables: { 0: "permit" }, // permit application packages
  },
  "tenure-operations": {
    // staking packages, Crown granted / patented tenure research, claim ownership verification
    services: { 1: "claim-tenure", 2: "claim-tenure", 3: "claim-tenure" },
    deliverables: { 2: "claim-tenure" }, // ownership snapshots
  },
  "title-searches": {
    services: { 0: "land-title", 1: "land-title" }, // title searches, ownership verification
    deliverables: { 0: "land-title" }, // ownership summaries
  },
  "boundary-disputes": {
    services: { 4: "survey", 5: "survey" }, // georeferencing, property boundary mapping
    deliverables: { 1: "survey" }, // georeferenced survey maps
  },
  "geological-services": {
    // geological mapping, Leapfrog modelling, LiDAR interpretation, DEM analysis
    services: { 0: "geology", 1: "3d-model", 2: "dem-lidar", 3: "dem-lidar" },
    deliverables: { 0: "geology", 2: "3d-model" }, // geological maps, exploration target models
  },
};

/** Map categories a module links to, in the canonical category order. */
export function moduleMapTypes(moduleId: string): SampleMapType[] {
  const links = SERVICE_MAP_LINKS[moduleId];
  if (!links) return [];
  const types = new Set([...Object.values(links.services ?? {}), ...Object.values(links.deliverables ?? {})]);
  return SAMPLE_MAP_TYPES.filter((type) => types.has(type));
}

/**
 * Up to `limit` thumbnails per module, picked from the module's categories:
 * maps not already shown in an earlier module first, then featured maps, alternating
 * between categories and preferring a region the module doesn't show yet.
 */
export function pickModuleMaps(moduleIds: string[], maps: SampleMap[], limit = 3): Map<string, SampleMap[]> {
  const order = new Map(maps.map((map, i) => [map.id, i]));
  const used = new Set<string>();
  const result = new Map<string, SampleMap[]>();

  for (const moduleId of moduleIds) {
    const queues = moduleMapTypes(moduleId)
      .map((type) =>
        maps
          .filter((map) => map.mapType === type)
          .sort(
            (a, b) =>
              Number(used.has(a.id)) - Number(used.has(b.id)) ||
              Number(b.isFeatured) - Number(a.isFeatured) ||
              order.get(a.id)! - order.get(b.id)!,
          ),
      )
      .filter((queue) => queue.length > 0);

    const picked: SampleMap[] = [];
    const regions = new Set<string>();
    while (picked.length < limit && queues.some((q) => q.length > 0)) {
      for (const queue of queues) {
        if (picked.length >= limit || queue.length === 0) continue;
        // A new region only wins among maps that are equally "fresh" (not shown in an earlier module).
        const freshOnly = !used.has(queue[0].id);
        const newRegion = queue.findIndex(
          (map) => (!freshOnly || !used.has(map.id)) && (!map.region || !regions.has(map.region)),
        );
        const [map] = queue.splice(newRegion >= 0 ? newRegion : 0, 1);
        picked.push(map);
        if (map.region) regions.add(map.region);
      }
    }
    picked.forEach((map) => used.add(map.id));
    if (picked.length) result.set(moduleId, picked);
  }
  return result;
}
