# Portfolio Starter (Next.js + TailwindCSS)

A professional, evaluation-ready portfolio following common engineering school rubrics.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Where to edit your content

- **Profile & contact:** `data/profile.ts`
- **Skills (10 total; 4–6 technical, 4–7 human):** `data/skills.ts`
- **Projects (5 items):** `data/projects.ts`
- **Timeline (work/education/certs):** `data/timeline.ts`
- **Photo:** replace `public/avatar.png`
- **Resume:** add `public/cv.pdf` and update link in `data/profile.ts`

## Pages

- `/` _ Home with hero, featured projects, and radar chart
- `/skills` _ All skills, with links to details
- `/skills/[slug]` _ Skill details: definition, proofs, critique, next steps, and linked projects
- `/projects` _ Projects list
- `/projects/[slug]` _ Project write-ups with all required sections and linked skills
- `/timeline` _ Reverse-chronological path
- `/contact` _ Contact box; also mirrored in footer

## Deploy

- Vercel (recommended) or Firebase Hosting. Make sure to set the correct `metadata.openGraph.url` in `app/layout.tsx`.
