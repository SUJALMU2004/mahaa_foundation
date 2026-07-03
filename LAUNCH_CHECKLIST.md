# Mahaa Foundation Mahalingpur Launch Checklist

Use this checklist before publishing the site on the production domain.

## Pre-Launch Content

- [x] Confirm production domain is set to `https://www.mahaafoundation.org` in `src/data/site.ts`, `astro.config.mjs`, and `public/robots.txt`.
- [ ] Confirm the verified address remains `Vinayak Medical Shop, Double Rd, Mahalingpur, Karnataka 587312`.
- [ ] Confirm the public display stays `Active Since 2025`.
- [ ] Confirm no page claims a full year of service.
- [ ] Add only verified social media profile URLs to `src/data/site.ts`.
- [ ] Confirm there are no fake awards, testimonials, ratings, registration numbers, legal exemption claims, coordinates, or opening hours.

## Contact And CTA

- [ ] Confirm call links use `tel:+917019170976`.
- [ ] Confirm WhatsApp links use `https://wa.me/919986836007`.
- [ ] Confirm email links use `mailto:mahafoundation25@gmail.com`.
- [ ] Confirm location links use `https://share.google/vhQcSSF5wjCEQ1K0S`.
- [ ] Confirm volunteer, donation, and contact forms open WhatsApp with a pre-filled message.
- [ ] Confirm visitors must manually tap Send in WhatsApp.
- [ ] Confirm form data is not stored, logged, fetched, or submitted to any backend.

## Donation

- [ ] Confirm UPI ID is `9986836007@ybl`.
- [ ] Confirm bank is `State Bank of India`.
- [ ] Confirm branch is `Mahalingpur`.
- [ ] Confirm account name is `Anilkumar S Ullagaddi`.
- [ ] Confirm account number is `64064939041`.
- [ ] Confirm IFSC is `SBIN0040642`.
- [ ] Add the verified donation QR image at `public/images/donation/mahaa-foundation-qr-code.jpg`.
- [ ] Confirm the site does not include a payment gateway.

## SEO

- [ ] Confirm each public page has one unique title and one unique meta description.
- [ ] Confirm each canonical URL is absolute and matches the clean route.
- [ ] Confirm public pages use `index, follow`.
- [ ] Confirm sitemap output includes core pages, blog posts, category pages, gallery, videos, activities, and activity detail pages.
- [ ] Confirm `robots.txt` points to `https://www.mahaafoundation.org/sitemap-index.xml`.
- [ ] Submit the final sitemap in Google Search Console.
- [ ] Request indexing for the homepage and important service pages after launch.

## Open Graph

- [ ] Add final 1200x630 OG images before launch.
- [ ] Replace placeholder OG files under `public/images/og/`.
- [ ] Test homepage, blog post, activity, gallery, videos, and contact page previews.

## Schema

- [ ] Validate JSON-LD with a structured data testing tool.
- [ ] Confirm Organization/NGO schema uses the verified name, founder, founding date, address, phone, email, and area served.
- [ ] Confirm `sameAs` includes only verified social profile URLs.
- [ ] Do not add fake coordinates, opening hours, event schema, reviews, ratings, registration details, or legal donation claims.

## Performance

- [ ] Run Lighthouse on mobile and desktop before launch.
- [ ] Compress real images before adding them.
- [ ] Prefer WebP or AVIF for large content images.
- [ ] Keep gallery thumbnails smaller than full-size originals.
- [ ] Ensure videos use local files only, native controls, and no autoplay.
- [ ] Avoid external scripts, analytics, embeds, carousels, lightboxes, icon libraries, and animation libraries unless explicitly approved later.

## Accessibility

- [ ] Test keyboard navigation through header, footer, forms, CTAs, FAQs, and disclosure menus.
- [ ] Confirm the skip link reaches the main content.
- [ ] Confirm every page has exactly one H1.
- [ ] Confirm visible focus states are present.
- [ ] Confirm form labels, required fields, and helper text are clear.
- [ ] Confirm mobile tap targets are large enough.
- [ ] Confirm color contrast is readable on mobile and desktop.

## Media

- [ ] Replace placeholder images with verified real images.
- [ ] Add founder and team photos under `public/images/team/` when available.
- [ ] Use lowercase hyphenated filenames.
- [ ] Add descriptive alt text for meaningful images.
- [ ] Add local video files under `public/videos/` when available.
- [ ] Add video poster images under `public/images/videos/`.
- [ ] Do not add YouTube iframes or external video players.

## Deployment

- [ ] Run `npm install`.
- [ ] Run `npm run build`.
- [ ] Confirm `dist/` is generated.
- [ ] Confirm `dist/sitemap-index.xml` exists.
- [ ] Confirm `dist/robots.txt` exists.
- [ ] Confirm `dist/favicon.svg` exists.

## Provider Notes

Vercel:

- Framework preset: Astro
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

Cloudflare Pages:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Post-Launch

- [ ] Verify the live homepage loads on the final domain.
- [ ] Verify canonical URLs use the final domain.
- [ ] Verify sitemap URLs use the final domain.
- [ ] Submit sitemap in Google Search Console.
- [ ] Test Open Graph previews with the final domain.
- [ ] Run Lighthouse on the live site.
- [ ] Test phone, WhatsApp, email, location, UPI, and bank details on a mobile device.
