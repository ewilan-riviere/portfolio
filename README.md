# Ewilan Rivière's Portfolio

[![nuxt][nuxt-version-src]][nuxt-version-href]
[![tailwindcss][tailwind-version-src]][tailwind-version-href]
[![i18n][i18n-version-src]][i18n-version-href]

[![license][license-src]][license-href]
[![tests][tests-src]][tests-href]
[![code style][code-style-src]][code-style-href]

My portfolio, built with [Nuxt 3](https://nuxt.com/) SSR and [Tailwind CSS](https://tailwindcss.com/), with [i18n](https://v8.i18n.nuxtjs.org/).

Available at [ewilan-riviere.com](https://ewilan-riviere.com).

## Installation

````bash

```bash
pnpm i
````

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

### Resume size

To reduce the size of the resume, you can use `ps2pdf` to convert the PDF to a smaller size.

```bash
sudo apt-get install ghostscript
ps2pdf resume.pdf resume-ps2pdf.pdf
```

[nuxt-version-src]: https://img.shields.io/badge/dynamic/json?label=Nuxt&query=dependencies['nuxt']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&logo=nuxt.js&logoColor=ffffff&labelColor=18181b
[nuxt-version-href]: https://nuxt.com
[tailwind-version-src]: https://img.shields.io/badge/dynamic/json?label=Tailwind%20CSS&query=dependencies['tailwindcss']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[tailwind-version-href]: https://tailwindcss.com/
[i18n-version-src]: https://img.shields.io/badge/dynamic/json?label=@nuxtjs/i18n&query=dependencies['@nuxtjs/i18n']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[i18n-version-href]: https://v8.i18n.nuxtjs.org/

[tests-src]: https://img.shields.io/github/actions/workflow/status/ewilan-riviere/portfolio/ci.yml?branch=main&label=tests&style=flat-square&colorA=18181B
[tests-href]: https://github.com/ewilan-riviere/portfolio/actions/workflows/ci.yml
[license-src]: https://img.shields.io/github/license/ewilan-riviere/portfolio.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/ewilan-riviere/portfolio/blob/main/LICENSE
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/antfu/eslint-config
