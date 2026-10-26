# shehzadbizdev.com — Shehzad Ali portfolio

A static single-page site, so there's no build step and nothing to install. Open `index.html` in a browser to preview it.

```
index.html          page structure, SEO/Open Graph tags
404.html            custom "page not found"
robots.txt, sitemap.xml
assets/content.js   ← ALL text, numbers, experience, skills, links
assets/styles.css   design (dark default + light mode)
assets/main.js      rendering, animations, forms, theme toggle
assets/og-image.png share preview for LinkedIn / WhatsApp (1200×630)
assets/favicon.svg
```

## Editing content (no coding needed)

Open `assets/content.js` in any text editor (or your host's File Manager), change the text inside the quotes, save, and refresh the page.

- **Numbers:** `stats`. `value` is the number that counts up.
- **New job:** copy one `{ ... }` block in `experience`, paste it at the top, and edit it.
- **Testimonials:** add items to `testimonials: []` (the example is in the comment above it). The "coming soon" cards disappear once at least one testimonial is added.
- **Photos:** put images in `assets/img/` and set `profile.photo` / `profile.aboutPhoto`. A portrait with a plain background works best because it is shown in black and white and fades out at the bottom.
- **Company logos:** set `logo: "assets/img/deployit.png"` on an experience entry. Leave it empty to show the initials badge.
- **CV:** upload the PDF as `assets/Shehzad-Ali-CV.pdf` and set `profile.cv` to that path. The Download CV button stays hidden until you do.
- **Calendly:** paste the link into `profile.calendly` and a "Book a call" card appears.

## Before going live

1. **Forms.** By default the contact and waitlist forms open the visitor's email app with the message pre-filled. To receive submissions directly, create two free forms at formspree.io (delivering to shehzadali1220@gmail.com), then paste their URLs into `forms.contactEndpoint` and `forms.waitlistEndpoint`.
2. **Google Analytics.** In `index.html`, replace `G-XXXXXXXXXX` with the real ID and uncomment the block.
3. **Domain.** The site is live on GitHub Pages at https://arbaz-webdev.github.io/shehzad-portfolio/, and the canonical/OG URLs point there. Once shehzadbizdev.com is bought:
   - Replace `https://arbaz-webdev.github.io/shehzad-portfolio/` with `https://shehzadbizdev.com/` in `index.html`, `robots.txt` and `sitemap.xml`.
   - Change `/shehzad-portfolio/` back to `/` in `404.html`.
   - In the repo, go to Settings → Pages → Custom domain and add the domain, then tick "Enforce HTTPS".
4. **Updating the live site.** Push to `main` and GitHub Pages redeploys in about a minute. You can also edit `assets/content.js` right on github.com (pencil icon → Commit changes).

## Preview tricks

Add `?theme=light` or `?theme=dark` to the URL to force a theme.
