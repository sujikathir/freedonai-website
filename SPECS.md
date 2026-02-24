# FreeDon AI Website — Specifications

## 1. Overview

| Item | Detail |
|------|--------|
| **Domain** | freedonai.tech |
| **Company name** | FreeDon AI |
| **Product** | AI language tutor app centered on **speaking** practice via conversation |
| **Site purpose** | Marketing/landing: explain the idea, build desire, drive signups (waitlist / early access) |
| **No direct competitor mentions** | Do not name other apps; position on “speaking-first” and “AI conversation” only |

---

## 2. Target Audience

- People learning a language who can read/listen okay but **don’t get enough speaking practice**.
- Learners who want to **talk** in the language, not only do exercises.
- Busy users who want **flexible**, on-demand practice with feedback.
- Early adopters interested in **AI** for learning.

---

## 3. Value Proposition (Core Message)

**One-liner:**  
*FreeDon AI is an AI language tutor that focuses on **speaking**—real conversations, real practice, so you can actually use the language.*

**Supporting points:**
- **Speak, don’t just tap.** Practice talking with an AI that listens and responds like a tutor.
- **Conversation, not only drills.** Dialogues that adapt to your level and goals.
- **Your schedule.** Practice whenever you have a few minutes.
- **Built for the skill that matters most.** Reading and listening are part of the journey; FreeDon is where you train to speak.

---

## 4. Page Structure (Sections)

### 4.1 Hero
- **Headline:** Short, benefit-led (e.g. “Learn by speaking, not just by tapping” or “Your AI tutor for real conversation”).
- **Subheadline:** One or two sentences: speaking-focused, AI tutor, practice on your time.
- **Primary CTA:** Single clear action—e.g. “Join the waitlist” or “Get early access”—button that links to signup form or landing.
- **Visual:** Strong hero visual (illustration, 3D, or abstract) that suggests conversation/speaking, not generic “language app” clipart. Optional: short looping animation or subtle motion.

### 4.2 Problem / Opportunity (optional but recommended)
- **Title:** e.g. “Understanding isn’t enough” or “The missing piece.”
- **Body:** Many learners get good at reading and listening but still freeze when they have to speak. FreeDon is built for that gap: practice speaking with an AI tutor so you gain confidence and fluency.
- **Tone:** Empathetic, no competitor names.

### 4.3 How it works (3–4 steps)
- **Title:** e.g. “How it works” or “Speak from day one.”
- **Steps (example):**
  1. **Choose your language and level** — We adapt to you.
  2. **Start a conversation** — Talk with your AI tutor like a real dialogue.
  3. **Get feedback and keep going** — Improve pronunciation and phrasing as you practice.
  4. **Practice anytime** — No scheduling; practice when it fits your life.
- Use icons or small illustrations per step. Keep copy short.

### 4.4 Benefits / Features
- **Title:** e.g. “Why FreeDon” or “Built for speaking.”
- **Cards or list (3–4 items), e.g.:**
  - **Conversation-first** — Real back-and-forth, not only multiple choice.
  - **AI that adapts** — Level and topics match your goals.
  - **Speak more, stress less** — Safe space to make mistakes and improve.
  - **Flexible practice** — Short sessions that fit your routine.
- Each with a short line of supporting copy.

### 4.5 Social proof (placeholder)
- **Title:** e.g. “Learners like you” or “Join thousands learning to speak.”
- **Content for v1:** Placeholder quotes or “Coming soon” / “Beta feedback” section. Later: real testimonials, short quotes, optional logos if you have partners.
- **Design:** Leave space for 2–3 quote cards or a simple carousel.

### 4.6 Final CTA
- **Title:** e.g. “Ready to speak?” or “Start your speaking journey.”
- **Copy:** One sentence reinforcing value (speaking practice, AI tutor).
- **Button:** Same primary CTA as hero (e.g. “Join the waitlist” / “Get early access”).
- Optional: short note like “No credit card. We’ll notify you when we launch.”

### 4.7 Footer
- **Logo / name:** FreeDon AI.
- **Links:** Placeholder or real: Privacy, Terms, Contact (mailto or contact page).
- **Optional:** One social link (e.g. Twitter/X, LinkedIn) if you have them.
- **Copyright:** e.g. “© 2025 FreeDon AI” (adjust year as needed).

---

## 5. Copy Guidelines

- **Voice:** Confident, warm, encouraging. “You can do this” without being cheesy.
- **Avoid:** Jargon, long paragraphs, naming other apps, overpromising (“fluent in 30 days”).
- **Use:** Short sentences, active voice, “you” and “your.” Emphasize **speak**, **conversation**, **practice**, **AI tutor**, **your pace**.
- **Tagline options (pick one or iterate):**
  - “Speak the language. Not just read it.”
  - “Your AI tutor for real conversation.”
  - “Learn by speaking.”

---

## 6. Design Specs

### 6.1 Brand direction
- **Name:** FreeDon AI — can be styled as “FreeDon AI” or “freedonai” in logo.
- **Feel:** “Freedom to speak” + modern AI product. Trust + innovation.
- **Avoid:** Generic purple/blue AI gradients; default “startup” font stacks (e.g. Inter everywhere). Aim for a recognizable, ownable look.

### 6.2 Color (FreeDon palette — unique, not Duolingo-green)
- **Primary (CTA / accent):** Warm coral or soft orange (e.g. `#E07A5F` or `#F4A261`) — friendly, confident, “speak up.”
- **Secondary:** Teal or soft blue (e.g. `#3D5A80` or `#81B29A`) — calm, trust, learning.
- **Background:** Off-white / cream (e.g. `#FAF8F5` or `#FFF8F0`) for warmth; white for contrast sections.
- **Text:** Dark charcoal for headings (`#2D3142`), medium gray for body. High contrast (WCAG AA).
- **Avoid:** Generic bright green (competitor association); stick to coral/teal/cream for a distinct, cute-but-professional look.

### 6.3 Typography
- **Headings:** Distinct, slightly bold font (e.g. sans with character or a clean serif for headlines).
- **Body:** Highly readable sans-serif. Good pairing examples: heading font + Inter, Source Sans, or similar.
- **Hierarchy:** Clear H1 → H2 → body; one H1 per page.

### 6.4 Layout and UX
- **Width:** Max-width container (e.g. 1200px) for readability; full-bleed hero allowed.
- **Spacing:** Generous padding and margin; avoid cramped sections.
- **Responsive:** Mobile-first; hero and CTAs must work on small screens (stack layout, tappable buttons).
- **CTAs:** One primary style; used for “Join the waitlist” / “Get early access” only. Secondary style for “Learn more” if needed.

### 6.5 Assets
- **Imagery:** Custom illustration or abstract graphics preferred over stock “people with laptops.” Theme: conversation, speech, connection, progress.
- **Logo:** Text logo is fine for v1; icon optional (e.g. speech bubble + wave or similar).
- **Performance:** Optimize images (WebP); lazy-load below fold.

### 6.6 Animations (cute, funny, unique — inspired by engaging learning apps, not copied)
- **Scroll:** Staggered fade-in + slight slide-up for sections and cards as they enter viewport (e.g. Framer Motion `whileInView`).
- **CTAs:** Bouncy hover/click (scale + spring); optional subtle pulse or glow.
- **Hero:** Gentle floating or breathing motion on main visual; optional short loop (e.g. speech bubbles bobbing).
- **Micro-interactions:** Buttons that squish or bounce on hover; cards that lift slightly with shadow.
- **Performance:** Prefer CSS transforms + opacity; keep animations under 300–500 ms.

---

## 7. Technical Specs

### 7.1 Stack (production choice)
- **Next.js 14+ (App Router)** with TypeScript, Tailwind CSS, Framer Motion. Easy to modify later and compatible with Vercel and Lovable.
- No backend for v1; CTA links to Typeform, Google Form, Tally, or mailto.

### 7.2 Requirements
- **Semantic HTML:** header, main, section, footer, nav, buttons/links.
- **Accessibility:** Focus states, alt text, heading order, color contrast.
- **Performance:** Fast LCP; avoid huge JS bundles.
- **SEO:** Meaningful title and meta description for freedonai.tech; one H1; optional Open Graph tags for sharing.

### 7.3 CTA and signup
- **Primary CTA:** One URL (e.g. Typeform “Join waitlist” or `/signup` that redirects).
- **Button:** Same label site-wide for consistency.
- **Post-submit:** Thank-you state on the form provider; optional “Thank you” page on the site.

### 7.4 Deployment (freedonai.tech)
- **Domain:** freedonai.tech (Namecheap). Host on **Vercel** for zero-config Next.js.
- **Process:** See **DEPLOYMENT.md** for step-by-step: connect repo to Vercel, add freedonai.tech as custom domain, then in Namecheap set either Vercel nameservers or A/CNAME records as Vercel instructs. SSL is automatic via Vercel.

---

## 8. Out of Scope (v1)

- No login, app logic, or backend.
- No real testimonials required at launch (placeholders fine).
- No blog or docs; single marketing/landing focus.
- No competitor comparison copy or naming.

---

## 9. Checklist Before Launch

- [ ] All copy avoids naming competitors.
- [ ] Hero + one other section include primary CTA.
- [ ] Mobile layout and touch targets checked.
- [ ] Title and meta description set for freedonai.tech.
- [ ] CTA link goes to working waitlist/early-access form.
- [ ] Footer has at least Privacy/Contact or placeholders.
- [ ] README has run + deploy instructions.

Use **PROMPT.md** to brief an AI or developer; use this **SPECS.md** as the single source of truth for structure, copy, and design.
