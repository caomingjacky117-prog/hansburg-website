# Hansburg

Buyer site for **杭州汉宝贸易有限公司** (Hansburg), an apparel export house in Hangzhou. English is the primary language. The Chinese company name appears in About and the footer, where it is the legal name.

The site is static HTML, CSS, and JS for GitHub Pages at `/hansburg-website/`. Links and assets are relative, so the same files open locally and on a project site. `.nojekyll` is included so Pages does not skip asset files.

## Pages

| Page | File | What it covers |
| --- | --- | --- |
| Home | `index.html` | Wholesale and OEM hero, trade strip, flagship Eco bamboo, program index |
| Products | `products.html` | Catalog: underwear, basics, loungewear, kids, hang tags |
| Capabilities | `capabilities.html` | FOB Shanghai, OTIF, packaging readiness, sampling to shipment |
| About | `about.html` | Company name, Hangzhou base, export offer |
| Contact | `contact.html` | Carrie, `carrie@hansburg.com.cn`, mailto form |

## Open locally

From this folder:

```bash
python3 -m http.server 43123
```

Then open [http://127.0.0.1:43123](http://127.0.0.1:43123).

Opening `index.html` directly also works, because styles, fonts, and images are local files. No build step is required.

## Styles

`assets/css/main.css` is the existing compiled sheet (type, color, buttons, layout utilities). `assets/css/site.css` holds the multi-page pieces: navigation state, trust strip, catalog rows, and the contact form. Edit those files directly and commit them with the HTML.

## Images

| File | Used for |
| --- | --- |
| `assets/logo.jpg` | Header lockup |
| `assets/favicon.png` | Browser icon |
| `assets/product-eco-bamboo.jpg` | Hero and the eco bamboo program |
| `assets/product-mens.jpg` | Men’s boxers and invisible briefs |
| `assets/product-pajamas.jpg` | Loungewear and pajamas |
| `assets/product-womens-basics.svg` | Flat graphic for women’s briefs, wireless bras, and seamless basics |
| `assets/product-womens-leggings.svg` | Flat graphic for leggings and bras |
| `assets/product-kids-underwear.svg` | Flat graphic for kids underwear |
| `assets/product-hang-tags.svg` | Flat graphic for hang tags and packaging |

Photographs are the eco bamboo, men’s, and pajama images. The other programs use sage and cream SVG plates, in the same graphic family. They are not factory photos.

## Contact on the page

- Email: carrie@hansburg.com.cn
- Web: https://hansburg.com.cn
- Location: Hangzhou, China
- Terms: FOB Shanghai

The contact form opens the visitor’s email app. It does not post to a server. Phone number and street address are omitted on purpose. An enquiry link can prefill market, buyer type, and program with a query string.

## Credit

Structure adapted from [Inazuma Tailwind](https://github.com/ranyeh24/inazuma-tailwind) by Randy Hasibuan, MIT License. The license text is in [NOTICE.md](NOTICE.md). Fraunces and Outfit are SIL Open Font License; see `assets/font/`.
