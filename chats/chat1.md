# Slide Template Design

_Started 2026-05-21 17:45 UTC_

---

## User

Use Option B to create a slide template that students can fill in

Use "Vanderbilt Peabody College"
It is "LLO 8230: Program Evaluation"
Do not reference a worksheet number

https://claude.ai/design/p/64937e2a-8ac7-4ffe-b00f-db17b47e97a6?file=Evaluation+Purpose+Worksheet.html

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_files]_

I'll build a single-slide template based on Variant B with the requested changes — Vanderbilt Peabody College branding, LLO 8230 course label, and no worksheet number.

_[tool: str_replace_edit]_

Now create the variant-b.jsx with the rebranding (no worksheet number, Vanderbilt Peabody + LLO 8230):

_[tool: write_file]_

Now the main HTML — a single 1920×1080 slide scaled to fit the viewport, with a print stylesheet:

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done. The slide is built from Variant B with:

- **Eyebrow**: "Vanderbilt Peabody College — LLO 8230: Program Evaluation" (no worksheet number)
- **Empty defaults** so students fill in their own purpose statement, intended users, uses of findings, and aim/ultimate goal
- **1920×1080** letterboxed to fit any window; **Export PDF** button in the top-right for printing

Students click any chip, blank, or category to edit; edits persist in their browser.

## User

Save this design as a PDF: Evaluation Purpose Slide.html

## Assistant

_[tool: write_file]_

_[tool: show_html]_

_[tool: open_for_print]_

The print dialog should pop open automatically — choose **Save as PDF** as the destination. If the tab didn't open, [click here to open it manually](https://f2f245f0-32bf-4060-90c7-0ca5da4c55e3.claudeusercontent.com/v1/design/projects/f2f245f0-32bf-4060-90c7-0ca5da4c55e3/serve/Evaluation%20Purpose%20Slide-print.html?t=81f4c7beaee994ff826d1c219858edfacd37057b269983de86c1aeb3b486387e.53ff7b88-544d-4f7a-83cf-8b6c646fa528.b3bc290b-e801-4158-b451-b79fc0d16882.1779389152&direct=1).

## User

Export this design as an editable PPTX: Evaluation Purpose Slide.html

## Assistant

_[tool: show_to_user]_

_[tool: gen_pptx]_

Your editable PPTX is downloading — fonts swapped to Arial/Georgia/Courier so it'll open cleanly in PowerPoint without missing-font warnings.

## User

Save as standalone HTML: Evaluation Purpose Slide.html

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Clean. Delivering the file:

_[tool: present_fs_item_for_download]_

Single self-contained file — works offline, no network required.

