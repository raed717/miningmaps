# Full Audit Report

- URL: `https://www.miningpropertymaps.com/`
- Generated: `2026-09-27T16:55:17.972187`
- Overall score: `77/100`
- Score confidence: `Medium`
- Scoring version: `1`

## Score Card

| Category | Weight | Score |
| --- | ---: | ---: |
| Security Headers | 8 | 100 |
| Social Meta | 5 | 77 |
| Robots and Crawlers | 8 | 100 |
| Broken Links | 10 | 94 |
| Internal Links | 8 | 60 |
| Redirects | 3 | 100 |
| AI Search | 5 | 100 |
| Performance and Core Web Vitals | 13 | 0 |
| On-Page SEO | 10 | 100 |
| Readability | 8 | 0 |
| Entity SEO | 5 | 0 |
| Link Profile | 7 | 85 |
| Hreflang | 5 | 0 |
| Content Uniqueness | 5 | 100 |

## Findings

| Severity | Area | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- |
| Critical | broken_links | 🔴 1 broken link(s) found |  |  |
| Warning | entity | sameAs URL returns HTTP 405: https://www.linkedin.com/in/chris-adamson-ri/ |  | Update sameAs URL for LinkedIn to a valid, non-redirecting destination. |
| Warning | environment | 1 broken links detected | Broken internal links hurt crawl flow and user trust. | Fix links in route components and content source files; validate with link checks in CI. |
| Warning | environment | Content readability is difficult | Long, complex text can reduce engagement and comprehension. | Rewrite key sections with shorter sentences (15-20 words), shorter paragraphs (2-4 sentences), and clearer subheadings. |
| Warning | internal_links | ⚠️ 36 potential orphan page(s) (≤1 internal link pointing to them) |  |  |
| Warning | internal_links | ⚠️ 32 link(s) have no anchor text |  |  |
| Warning | readability | ⚠️ Average sentence length (35.4 words) is too long — target 15-20 |  |  |
| Warning | readability | ⚠️ Content is difficult to read (Flesch: 0) — may reduce engagement |  |  |
| Warning | readability | ⚠️ 36.3% complex words (3+ syllables) — consider simplifying |  |  |
| Warning | readability | ⚠️ Average paragraph length (54.0 sentences) — aim for 2-4 |  |  |
| Info | Wikidata | No Wikidata entry found for 'Adamson Geomatics'. |  | If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO. |
| Info | Wikipedia | No Wikipedia article found for 'Adamson Geomatics'. |  | Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals. |
| Info | environment | Performance measurement incomplete | PageSpeed API returned an error, so CWV recommendations are less reliable. | Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output. |
| info | pagespeed | pagespeed measurement incomplete | Rate limited by Google API. Wait a few minutes or add an API key. | Rerun this check after resolving the environment/API/network limitation. |
| Info | sameAs | Missing sameAs link to Wikipedia (Primary KG signal). |  | Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to Wikidata (Primary KG signal). |  | Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO. |

## Measurement Notes

1 checks returned errors or incomplete measurements; treat affected scores as directional.
