# AGENTS.md

Technical notes for agents working on this Obsidian vault, the Emerson VM303-01 Studies in Digital Media & Culture course site for Fall 2026. Markdown in `content/` is the source. Three outputs derive from it: the Quartz 5 site on GitHub Pages, PDFs, and Canvas pages. Human-facing orientation lives in [README.md](README.md).

Sibling vaults (`marlboro-digital-culture`, `lang-media-arts`, `fsu-interactive-media-fa26`) share most of the Quartz material below. The three Emerson ones also share Canvas publishing, kept in `~/.claude/emerson-canvas.md`. Entries marked "from marlboro" were established there and not re-tested here.

## Layout

```
./              vault root
  content/      what Quartz builds from. Notes and their assets go here
  .quartz/      the Quartz 5 install, vendored (no .git of its own)
  script/       canvas, pdf, status, wordcloud
  canvas.json   Canvas course id, base URL, content page list
  public/       build output, gitignored, safe to delete
```

Content: `index.md` is the syllabus, `week-NN.md` are topic pages, `keywords.md` feeds the word cloud, `bibliography.md` and `references.bib` hold sources.

## Running it

Use the scripts, never `npx quartz`. The repo's own bin is not linked into `node_modules/.bin`, so npx falls through to an unrelated `quartz` package on the registry (v0.0.1, a transmission-daemon client).

| Task                  | Command                                  |
| --------------------- | ---------------------------------------- |
| Serve with HMR        | `./dev.sh` (8086, ws 3006)               |
| Build to public       | `./build.sh`                             |
| Override ports        | `PORT=8087 WS_PORT=3007 ./dev.sh`        |
| Stale outputs         | `python3 script/status [--here] [--fast]` |
| Rebuild word cloud    | `python3 script/wordcloud`               |
| Page to PDF           | `./script/pdf [page] [out]`              |

`build.sh` runs `npm run install-plugins` first. Git plugins install to `.quartz/.quartz/plugins/`, which is gitignored, and `bootstrap-cli.mjs build` does not fetch them, so any build path that calls the CLI directly must do the same or it builds green with the plugin missing.

No linter or test suite is configured. Check a change with `./build.sh`.

## Gotchas that cost real time

From marlboro unless noted.

Everything the site serves must live under `content/`. Quartz only globs the directory passed via `-d`, and a `../` path does not escape.

Do not run `build.sh` while `dev.sh` is running. Both use `public/`, and a build wipes it first, so the dev server 404s or silently stops picking up edits. Stop the server, or use `script/pdf`, which builds to a temp directory.

A new non-markdown asset needs a dev server restart. Markdown edits hot reload; newly added files are not copied.

A YAML frontmatter error kills the whole dev server. The usual cause is an unquoted colon in a title. Quote it: `title: "VM303: Digital Media & Culture"`. Check the server is alive with `lsof -nP -iTCP:8086 -sTCP:LISTEN` before debugging hot reload.

The hot reload client never reconnects. After a server restart, hard-reload any open tab.

Deleting a file while the server runs can poison rebuilds with `ENOENT ... unlink '../public/...'`. Restart to clear it.

`.obsidian/` is gitignored. Plugin data files hold credentials and large binaries.

## Fonts and social cards

Fonts are set twice in `.quartz/quartz.config.yaml`: the `quartz-fonts` plugin options (what the browser uses) and `theme.typography`. Header is Changeling Neo (Adobe kit `vqx0msf`), body and code are Neue Haas Unica (kit `ejl5bmc`), all with `fontOrigin: local`. Both kits are Adobe Fonts, served only to domains on the Typekit web project, so headings fall back to Helvetica on an unlisted domain. Their `@font-face` rules are copied into `custom.scss`, since an `@import` of the kit breaks the SCSS build. The `--headerFont` and `--bodyFont` fallback stacks are also in `custom.scss`. Change fonts in the plugin options and keep `theme.typography` and `custom.scss` in sync.

`og-image` is disabled. It fetches `theme.typography` families from Google Fonts and fails the build with `Failed to emit from plugin CustomOgImages` when the family is not there. Re-enabling it means going back to a Google-served family.

The Departure Mono `@font-face` in `custom.scss` is kept but unreferenced. Its paths are relative and must stay so, since root-absolute paths 404 on a project site.

## Authoring

Images: use the wikilink form to size, `![[img/photo.jpg|500]]` or `|500x300`. `.avif` does not embed; convert with `sips -s format jpeg x.avif --out x.jpg`.

Callouts: all Obsidian types render, plus `[!custom]` from this theme. Give `[!custom]` a title or the header reads "Custom". A blank line ends a callout; use a bare `>` for a blank line inside one.

YouTube: `![](https://www.youtube.com/watch?v=ID)` becomes an iframe, scaled by `custom.scss`. Canvas keeps the iframe but not the CSS.

## Configuration

Prefer `.quartz/quartz.config.yaml` over patching vendored Quartz source. Anything YAML cannot express goes in `.quartz/quartz/styles/custom.scss`.

Add a git plugin with `node ./quartz/bootstrap-cli.mjs plugin add github:<owner>/<repo>` from `.quartz/`, never npx. The CLI rewrites the config and drops its comments, so diff afterwards and restore them. `quartz-image-zoom` is installed this way and pinned in `.quartz/quartz.lock.json`.

Local changes to vendored Quartz are `quartz.config.yaml`, `.node-version`, `quartz/styles/custom.scss` and `quartz/static/fonts/`. Reapply them when upgrading from `jackyzha0/quartz` branch `v5`.

## Deployment

`git push origin main` triggers `.github/workflows/deploy.yml`. Nothing needs to run locally first. Live at https://mroberts1.github.io/digital-culture-fa26/. Don't push to a branch whose PR is already merged.

`baseUrl` is `mroberts1.github.io/digital-culture-fa26`, including the subpath. Dropping it breaks every generated link.

Keep the `@quartz-community/cname` plugin off. It derives a CNAME from the `baseUrl` host and emits `mroberts1.github.io` as a custom domain, which Pages would take for this project site. Enable it only alongside a real domain.

## The word cloud

`content/img/wordcloud.png` is generated from the bullet list in `content/keywords.md`. Edit the terms, run `python3 script/wordcloud`, and commit both together. Nothing in the build checks it, so a stale image showing removed words is the easy mistake. Needs `pip install wordcloud` and Departure Mono as an `.otf` in `~/Library/Fonts`. Terms are weighted equally, so the layout reflows whenever the set changes.

## Publishing to Canvas

Shared with the other Emerson course vaults: read `~/.claude/emerson-canvas.md` before pushing. Fitchburg (`fsu-interactive-media-fa26`) uses Blackboard and is not covered by it.

Specific to this vault:

- Course 2197373, configured in `canvas.json`. Pages are `bibliography`, `keywords` (titled "Digital Culture Snapshot") and `future-perfect`.
- `script/canvas` and `script/canvas-login` are the same as marlboro's.
- Pages and Canvas are separate pushes and both must go out together.
- `content/pdf/` (readings) is excluded through `.git/info/exclude`. Scans go in Canvas Files, never on Pages.

## Keeping this file current

Update this file when a change invalidates something above, or when a new non-obvious behaviour costs time to diagnose. Record the symptom alongside the cause. When a shared section changes here, check whether the sibling vaults need the same edit.
