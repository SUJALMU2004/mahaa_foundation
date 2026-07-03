# Mahaa Foundation Mahalingpur Static Website

Fast static Astro website for Mahaa Foundation Mahalingpur. The site uses static generation, TypeScript data files, reusable Astro components, content collections for the blog, and minimal client JavaScript only for WhatsApp enquiry forms.

## Tech Stack

- Astro
- TypeScript data modules
- Static site generation
- Astro content collections for blog posts
- Global CSS with component-level styles
- Astro sitemap integration
- Static WhatsApp enquiry forms

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

- `src/data/site.ts`: global organization, contact, donation, URL, and social-link data.
- `src/data/seo.ts`: route-level SEO metadata.
- `src/data/pages.ts`: core inner-page content.
- `src/data/home.ts`: homepage content.
- `src/data/media.ts`: gallery and video placeholder data.
- `src/data/activities.ts`: static activity data.
- `src/content/blog/`: static blog posts.
- `src/components/`: reusable layout, SEO, CTA, form, blog, media, and section components.
- `public/images/`: static image folders.
- `public/videos/`: future local video files.

## Current Verified Details

- Name: `Mahaa Foundation Mahalingpur`
- Website: `https://www.mahaafoundation.org`
- Short name: `Mahaa Foundation`
- City: `Mahalingpur`
- District: `Bagalkot`
- State: `Karnataka`
- Address: `Vinayak Medical Shop, Double Rd, Mahalingpur, Karnataka 587312`
- Active display: `Active Since 2025`
- Phone: `7019170976`
- Phone link: `tel:+917019170976`
- WhatsApp: `9986836007`
- WhatsApp link: `https://wa.me/919986836007`
- Email: `mahafoundation25@gmail.com`
- Email link: `mailto:mahafoundation25@gmail.com`
- Location: `https://share.google/vhQcSSF5wjCEQ1K0S`

## Donation Details

- UPI: `9986836007@ybl`
- Bank: `State Bank of India`
- Branch: `Mahalingpur`
- Account Name: `Anilkumar S Ullagaddi`
- Account Number: `64064939041`
- IFSC: `SBIN0040642`

The site does not process payments. Donors use UPI or bank transfer and manually send the payment screenshot on WhatsApp.

## Launch-Time Checks

The production domain is configured as `https://www.mahaafoundation.org` in `src/data/site.ts`, `astro.config.mjs`, and `public/robots.txt`.

Before launch, confirm DNS, hosting, canonical URLs, sitemap, robots.txt, Open Graph previews, and contact links on the live domain. Do not invent registration details, legal exemption details, coordinates, opening hours, awards, ratings, reviews, or unverified social profiles.

## WhatsApp Forms

Volunteer, donation, and contact forms are static. They open WhatsApp with a pre-filled message to `9986836007`; the visitor must manually tap Send in WhatsApp.

Message formatting lives in:

- `src/utils/contact.ts`
- `src/scripts/whatsapp-forms.ts`

No form data is stored, logged, fetched, or submitted to a backend.

## Adding Blog Posts

Add Markdown files to `src/content/blog/`.

Each post must include the collection frontmatter fields defined in `src/content.config.ts`. Keep posts factual and avoid unverified claims.

Draft posts can be marked with:

```yaml
draft: true
```

Draft posts are excluded from listing pages and static paths.

## Adding Activities

Add or update activity entries in `src/data/activities.ts`.

Use verified activity titles, dates, date labels, locations, descriptions, gallery references, and related links. Draft activities are excluded from listings and generated pages.

## Adding Gallery Images

Update gallery data in `src/data/media.ts` and add optimized image files under `public/images/gallery/`.

Use lowercase hyphenated filenames and descriptive alt text.

## Adding Videos

Add local video files under `public/videos/` and poster images under `public/images/videos/`.

Use native video controls only. Do not add autoplay, YouTube iframes, external video players, lightboxes, or carousels.

## Static Deployment

Build output is generated in `dist/`.

Recommended settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Vercel, Netlify, Cloudflare Pages, and traditional static hosting can serve the generated output. Do not deploy or connect the final domain until the launch checklist is complete.
