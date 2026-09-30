# Action Plan

- URL: `https://www.miningpropertymaps.com/`
- Overall score: `77/100`

## Priority Fixes

1. **sameAs URL returns HTTP 405: https://www.linkedin.com/in/chris-adamson-ri/**
   - Priority: `Warning`
   - Area: `entity`
   - Evidence: See audit output.
   - Fix: Update sameAs URL for LinkedIn to a valid, non-redirecting destination.
2. **1 broken links detected**
   - Priority: `Warning`
   - Area: `environment`
   - Evidence: Broken internal links hurt crawl flow and user trust.
   - Fix: Fix links in route components and content source files; validate with link checks in CI.
3. **Content readability is difficult**
   - Priority: `Warning`
   - Area: `environment`
   - Evidence: Long, complex text can reduce engagement and comprehension.
   - Fix: Rewrite key sections with shorter sentences (15-20 words), shorter paragraphs (2-4 sentences), and clearer subheadings.
4. **No Wikidata entry found for 'Adamson Geomatics'.**
   - Priority: `Info`
   - Area: `Wikidata`
   - Evidence: See audit output.
   - Fix: If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO.
5. **No Wikipedia article found for 'Adamson Geomatics'.**
   - Priority: `Info`
   - Area: `Wikipedia`
   - Evidence: See audit output.
   - Fix: Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals.
6. **Performance measurement incomplete**
   - Priority: `Info`
   - Area: `environment`
   - Evidence: PageSpeed API returned an error, so CWV recommendations are less reliable.
   - Fix: Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output.
7. **Missing sameAs link to Wikipedia (Primary KG signal).**
   - Priority: `Info`
   - Area: `sameAs`
   - Evidence: See audit output.
   - Fix: Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO.
8. **Missing sameAs link to Wikidata (Primary KG signal).**
   - Priority: `Info`
   - Area: `sameAs`
   - Evidence: See audit output.
   - Fix: Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO.
