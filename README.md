# Statistics for Data Analysis — Course Companion

A small static website that gathers the roadmap, weekly modules, assessment
details and study notes for the **Statistics for Data Analysis** module
(DIPDAB Sep26 cohort, CCT College Dublin).

Live site: _add the GitHub Pages URL here once it's live_

## What's on the site

- **Roadmap** — one card per week with dates and status.
- **Weekly modules** — topics covered, key formulas, class materials, and a
  slot for the two weekly Google Drive video links and notes/transcript.
- **To-do** — every topic across all weeks as a checklist. Checked state is
  saved in your browser only (`localStorage`), nothing is uploaded anywhere.
- **Resources** — assessment breakdown (CA1/CA2), the weekly class schedule,
  and recommended reading.

## Updating content

Everything content-related lives in one file: [`js/content.js`](js/content.js).

- To add a video link once you have it, find the week and set
  `videos[].url` to the Google Drive share link.
- To add a transcript (e.g. pulled from Gemini Notebook or another
  transcription tool), paste the text into that week's `transcript` field.
- To add a new week once the lecturer publishes materials, duplicate a week
  object in the `WEEKS` array and fill it in.

No build step is required — it's plain HTML/CSS/JS. Just edit `content.js`,
commit, and push; GitHub Pages redeploys automatically.

## Running locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Note on course materials

This site intentionally does **not** host the original lecture slides, PDFs
or datasets (they're the college's copyrighted material). It only contains
original summaries/notes written from them, plus links you add yourself.
