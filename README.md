# FreeDon AI — Marketing Website

Landing site for **FreeDon AI** (freedonai.tech): an AI language tutor app focused on **speaking** practice.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

Easy to modify and deploy to **Vercel** or use with **Lovable**. No backend required for the marketing site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy & custom domain

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for:

- Deploying to Vercel
- Connecting **freedonai.tech** (Namecheap + Vercel)

## Before launch

1. Replace the waitlist CTA link in `src/components/FinalCTA.tsx` (and header if needed) with your real form URL (Typeform, Google Form, Tally).
2. Add real Privacy and Terms content in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`.
3. Optional: add real testimonials in `src/components/Testimonials.tsx`.

## Project layout

- `src/app/` — App Router pages and layout
- `src/components/` — Header, Hero, Problem, HowItWorks, Benefits, Testimonials, FinalCTA, Footer
- `PROMPT.md` / `SPECS.md` — Brief and specs for the site
- `DEPLOYMENT.md` — Hosting and domain setup
