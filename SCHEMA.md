# `content.jsonc` Schema

Each app folder (e.g. `we-uq/`) contains one `content.jsonc` file. Its fields
become the content of that app's [DesignSafe Tools & Apps](https://www.designsafe-ci.org/use-designsafe/tools-applications/)
page. See [`_examples/other/content.jsonc`](_examples/other/content.jsonc) and
[`_examples/simcenter/content.jsonc`](_examples/simcenter/content.jsonc) for
annotated templates to copy from.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Display name of the app. |
| `category` | string | Yes | Must match a value in [`categories.jsonc`](categories.jsonc) (e.g. `"Simulation"`, `"Analysis"`, `"GIS Tools"`, `"Visualization"`, `"Hazard Apps"`, `"Utilities"`). Determines which listing section the app appears in. |
| `logo_path` | string | Yes | Path to the app's icon. Either a shared icon in [`_icons/`](_icons) (e.g. `"../_icons/All-Hazards.svg"`) or a logo file uploaded into the app's own folder (e.g. `"./logo.svg"`, see [README: How To Change Logo](README.md#how-to-change-logo)). |
| `short_desc` | string | Yes | One-sentence summary shown in listings and cards. |
| `tags` | string[] | Yes (`[]` allowed) | Hazard tags shown as chips. Allowed values: `Tropical Storm`, `Hurricane`, `Fire`, `Wind`, `Pandemic`, `Storm Surge`, `Thunderstorm`, `Tsunami`, `Tornado`, `Landslide`, `Hurricane/Tropical Storm`, `Flood`, `Wildfire`, `Extreme Temperatures`, `Earthquake`, `Drought`. |
| `is_popular` | boolean | Yes | Shows a "Popular" badge in listings. |
| `is_simcenter` | boolean | Yes | Marks the app as an NHERI SimCenter tool; shows a "SimCenter" badge in listings. Apps with `true` should also state *"This application was developed by the NHERI SimCenter."* in the page's `long_desc` (this text is not generated automatically — see the six `is_simcenter: true` apps for examples). |
| `license_type` | string | Yes | `"Open Source"` or `"Licensed"`. |
| `long_desc` | string \| string[] | Yes | Full description on the app's overview page. A string is one paragraph; an array of strings renders as multiple paragraphs. Inline HTML (e.g. `<a href="...">`) is supported — see [`ansys/content.jsonc`](ansys/content.jsonc). |
| `user_guide_desc` | string | Yes (`""` allowed) | Caption shown above the guide links section. |
| `user_guide_link` | string | Yes | URL for the primary user guide; used for the main "Learn How to Use" link. |
| `all_guide_links` | `{text, url}[]` | Yes | Guide/reference links shown together (e.g. Website, Application Summary, User Guide). |
| `media_links_title` | string | Yes (`""` allowed) | Heading for `media_links`. Standard values: `"Video Tutorials"`, `"Use Cases"`. |
| `media_links` | `{text, url}[]` | No | Tutorial video or use-case links. |
| `official_links` | `{text, url}[]` | No | External links to the vendor/project's own site, GitHub, YouTube, etc. |
| `citation_preface` | string \| null | No | Sentence shown above the citation list (e.g. `"Please include both of these citations if you use ___ on DesignSafe."`). Use `null` to omit. |
| `citation_formats` | array | No | List of citation entries, in order. Each entry is one of:<br>• `{ "citation": string, "label"?: string }` — `label` distinguishes variants (e.g. `"For ADCIRC"`).<br>• `{ "note": string }` — a standalone freeform note interspersed in the list (e.g. reminding the user to update a version number). |
| `versions` | array | No | Selectable versions/launch options for the app. Each entry: `{ "label": string, "description": string, "url"?: string }`. If `url` is present, the "Get Started" button links directly to it instead of opening the app/workspace (for CMS editors, this is the "External HREF:" field). |
| `related_apps` | string[] | No | Folder-name slugs of related apps, shown in a "Related Applications" section. |

## Notes

- Fields marked "No" under Required are entirely omittable — see [`python-app/content.jsonc`](python-app/content.jsonc), which has none of `versions`, `official_links`, `media_links_title`, `media_links`, `citation_preface`, or `citation_formats`.
- `//` line comments are allowed anywhere (it's JSONC), and are used throughout `_examples/` to annotate fields inline.
- This repo's data is manually turned into the live pages; nothing here is auto-rendered, so field values (like the SimCenter notice above) must match what's manually published.
