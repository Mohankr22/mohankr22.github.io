# Mohan K R — Digital Portfolio

A responsive, GitHub Pages-ready personal portfolio built with plain HTML, CSS and JavaScript.

## Included

- Responsive single-page portfolio
- Hero / About / Skills / Projects / Experience / Education
- Certifications and achievements
- GitHub, LinkedIn and contact links
- Resume view/download section
- SEO meta tags and Open Graph tags
- SVG favicon and social-preview placeholder
- Accessible navigation and reduced-motion support
- No framework or build step required

## Folder structure

```text
mohan-kr-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
└── resume/
    └── Mohan-K-R-Resume.pdf
```

## Add your resume

Copy your latest PDF into:

`resume/Mohan-K-R-Resume.pdf`

The current project contains the resume supplied for this portfolio task.

## GitHub Pages deployment

1. Create a GitHub repository, for example `mohan-kr-portfolio`.
2. Upload all files while keeping the folder structure.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide your Pages URL.

For a user site, you can alternatively name the repository:

`Mohankr22.github.io`

Then the site URL becomes:

`https://Mohankr22.github.io/`

## Update your information later

Most content is in `index.html`. Search for:

- `Mohan K R`
- `hero-text`
- `skill-card`
- `project-card`
- `timeline-item`
- `education-card`
- `cert-card`
- `contact-links`

Edit only facts you can verify from your current resume, LinkedIn or GitHub.

## Add a project

Duplicate one `.project-card` block in `index.html` and change:

- project number
- project type
- title
- description
- technology tags
- GitHub URL
- live demo URL, if one exists

Example link:

```html
<a class="text-link" href="YOUR-VERIFIED-REPOSITORY-URL" target="_blank" rel="noopener">
  GitHub <span>↗</span>
</a>
```

## Change the profile visual

The default hero uses an initials avatar (`MK`) so no unverified or borrowed photograph is used.

If you want a photo later, replace the avatar element with:

```html
<img class="profile-photo" src="assets/profile.jpg" alt="Mohan K R">
```

Then add the image to `assets/`.

## Change social links

The current LinkedIn URL is the one listed in the supplied resume.

GitHub is set to the handle you supplied: `Mohankr22`.

If either profile URL changes, update every corresponding `href` in `index.html`.

## LinkedIn Featured

After GitHub Pages is live:

1. Open LinkedIn.
2. Open your profile.
3. Go to **Featured**.
4. Choose **Add a link**.
5. Paste your GitHub Pages portfolio URL.
6. Add a title such as `Mohan K R — Digital Portfolio`.
7. Save.

The page includes Open Graph metadata so supported platforms can generate a professional link preview.

## Important content note

Project GitHub/live-demo links are intentionally left unlinked until the repository URLs can be verified. Do not replace them with guessed URLs.

## Reference design

The visual direction is inspired by the reference portfolio supplied by the user, while the content and identity in this project are specific to Mohan K R.
