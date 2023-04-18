# Portfolio

[![Nuxt][nuxt-version-src]][nuxt-version-href]
[![Tailwind CSS][tailwind-version-src]][tailwind-version-href]
[![Content][content-version-src]][content-version-href]
[![i18n][i18n-version-src]][i18n-version-href]

[![tests][tests-src]][tests-href]
[![license][license-src]][license-href]

My portfolio, built with [Nuxt 3](https://nuxtjs.org) and [Tailwind CSS](https://tailwindcss.com/).

Available at [ewilan-riviere.com](https://ewilan-riviere.com).

## Setup

```bash
pnpm i
```

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Modules

- [tailwindcss](https://tailwindcss.com/docs/guides/nuxtjs)
- [nuxt-seo-kit](https://github.com/harlan-zw/nuxt-seo-kit)
- [@pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html#installation)
- Content
  - [@nuxt-themes/typography](https://typography.nuxt.space/)
  - [@nuxt/content](https://content.nuxtjs.org/)
  - [@nuxt-themes/docus](https://docus.dev/)
  - [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)
- Tools
  - [@antfu/eslint-config](https://github.com/antfu/eslint-config)
  - [@nuxt/devtools](https://devtools.nuxtjs.org/)
  - [nuxt-svg-transformer](https://github.com/kiwilan/nuxt-svg-transformer)
  - [nuxt-typed-link](https://github.com/kiwilan/nuxt-typed-link)

## Resume size

To reduce the size of the resume, you can use `ps2pdf` to convert the PDF to a smaller size.

```bash
sudo apt-get install ghostscript
ps2pdf resume.pdf resume-ps2pdf.pdf
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

[nuxt-version-src]: https://img.shields.io/badge/dynamic/json?label=Nuxt&query=devDependencies['nuxt']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&logo=nuxt.js&logoColor=ffffff&labelColor=18181b
[nuxt-version-href]: https://nuxt.com
[tailwind-version-src]: https://img.shields.io/badge/dynamic/json?label=Tailwind%20CSS&query=devDependencies['tailwindcss']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[tailwind-version-href]: https://tailwindcss.com/
[content-version-src]: https://img.shields.io/badge/dynamic/json?label=@nuxt/content&query=devDependencies['@nuxt/content']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[content-version-href]: https://content.nuxtjs.org/
[i18n-version-src]: https://img.shields.io/badge/dynamic/json?label=@nuxtjs/i18n&query=devDependencies['@nuxtjs/i18n']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[i18n-version-href]: https://v8.i18n.nuxtjs.org/
[tests-src]: https://img.shields.io/github/actions/workflow/status/ewilan-riviere/portfolio/ci.yml?branch=main&label=tests&style=flat-square&colorA=18181B
[tests-href]: https://github.com/ewilan-riviere/portfolio/actions/workflows/ci.yml
[license-src]: https://img.shields.io/github/license/ewilan-riviere/portfolio.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/ewilan-riviere/portfolio/blob/main/LICENSE
