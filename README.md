# Your World · Launch Deck (TEST site)

Built output of the Launch Deck site, served by GitHub Pages. The site source is kept elsewhere; this repo only
holds the minified build, the data, and the small data job.

- `data/launches.json`, `data/meta.json`: refreshed by `.github/workflows/data.yml` every 15 minutes, and every
  5 minutes from 45 minutes before to 20 minutes after a launch that is Go, on Hold or TBC.
- `pipeline/fetch.py`: pulls Launch Library 2 (The Space Devs) and NOAA AviationWeather METAR. No keys. It logs
  every LL2 call in `data/meta.json` and makes at most 12 per rolling hour (LL2 free tier: 15/hour/IP).
- Phones only read the cached JSON from this site; they never call LL2.

Launch data: The Space Devs (thespacedevs.com). Not affiliated with any launch provider or space agency.
History: main is replaced by a single commit on each publish to keep the repo small.
