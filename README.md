# Hansburg

Marketing site for **杭州汉宝贸易有限公司** (Hansburg), an apparel exporter in Hangzhou. The public page covers the company, product programs, and contact. English is the primary language. The Chinese company name appears where it is the legal name.

The layout follows the Inazuma Tailwind company landing page (navigation, hero, about, services, contact, footer). Pricing, team, testimonials, and the intro video from that template are not used.

## Open locally

The built stylesheet is already in the repository, so a Node install is optional.

From this folder:

```bash
python3 -m http.server 43123
```

Then open [http://127.0.0.1:43123](http://127.0.0.1:43123).

Or, after `npm install`:

```bash
npm start
```

Opening `index.html` directly in a browser also works, because styles, fonts, and images are local files.

## Edit styles

Colors and type live in `tailwind.config.js`. Markup is `index.html`. Source CSS is `src/css/tailwind.css`.

```bash
npm install
npm run build:css
```

`npm run watch:css` rebuilds while you edit. Commit `assets/css/main.css` with the HTML so the site still opens without a build step.

## Images

Canva exports are wired in `index.html`. The logo file was trimmed to the artwork and its paper was matched to the page cream so the header does not show a white box.

| File | Used for |
| --- | --- |
| `assets/logo.jpg` | Header lockup |
| `assets/favicon.png` | Browser icon, cropped from the logo monogram |
| `assets/product-eco-bamboo.jpg` | Hero accent and the eco bamboo card |
| `assets/product-mens.jpg` | Men’s boxers and invisible briefs |
| `assets/product-pajamas.jpg` | Pajamas and loungewear |
| `assets/product-womens-leggings.svg` | Flat graphic for leggings and bras |
| `assets/product-kids-underwear.svg` | Flat graphic for kids underwear |
| `assets/product-hang-tags.svg` | Flat graphic for hang tags and packaging |

Leggings, kids, and packaging do not have photographs yet. Those cards use sage and cream SVG plates, not generated photos. Replace a plate by swapping the `src` in `index.html` for a new file in `assets/` and keeping the card copy.

## Deploy

Any static host can serve this folder. For GitHub Pages, publish the branch root. `.nojekyll` is included so Pages does not skip asset files. No build is required if `assets/css/main.css` is already committed.

## Contact on the page

- Email: carrie@hansburg.com.cn
- Web: https://hansburg.com.cn
- Location: Hangzhou, China

The contact form opens the visitor’s email app with those fields. It does not post to a server. Phone number and street address are omitted on purpose.

## Credit

Structure adapted from [Inazuma Tailwind](https://github.com/ranyeh24/inazuma-tailwind) by Randy Hasibuan, MIT License. The license text is in [NOTICE.md](NOTICE.md). Fraunces and Outfit are SIL Open Font License; see `assets/font/`.
