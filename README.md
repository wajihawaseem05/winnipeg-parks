# Winnipeg Parks & Open Spaces Finder

Search City of Winnipeg parks by district and export the results.
Built as a course assignment at Red River College Polytechnic (Business Information Technology), November 2023.

**Live demo:** https://wajihawaseem05.github.io/winnipeg-parks/

## What it does

- Searches 1,000+ licensed parks and open spaces by district (e.g. *North*, *South*, *East*, *North Downtown*)
- Shows matching parks in a table: district, park name, location, classification type and neighbourhood
- Downloads the current results as a text file

## Data source

Queries the City of Winnipeg Open Data portal live, via the Socrata API:
[Parks and Open Space](https://data.winnipeg.ca/Parks/Parks-and-Open-Space/tx3d-pfxq) (`tx3d-pfxq`).
Nothing is bundled — results reflect the dataset as of the moment you search.

## Built with

- React 18 (Create React App)
- [mvp.css](https://andybrewer.github.io/mvp/) for base styling
- Deployed to GitHub Pages with GitHub Actions

## Run locally

```bash
npm install
npm start
```

## Looking back

Written early in my data work, before the census-geography and employer-matching projects. Things I would change today:

- Results are capped at 100 by the API query (`$limit=100`); paginate or raise the limit and show the true count
- Replace the free-text district box with a dropdown populated from the dataset's distinct districts
- Render the table with React state instead of writing HTML strings into the DOM
- Export as a real CSV (with a header row and quoted fields) rather than a `.txt`
