---
title: SVG on Vue 3
description: Manage SVG on Vue 3 / Nuxt 3
category: vue
tags: [vue, nuxt]
publishedAt: 2022-07-08
# updatedAt: 2023-04-26
_draft: false
legend: Unsplash
origin: https://unsplash.com/photos/MORl6KLEFFk
---

{% callout type="info" %}
This guide use Vue 3 / Nuxt 3 with [**Vite**](https://vitejs.dev).
{% /callout %}

From [github.com/jpkleemans/vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader), you can use a specific module with Nuxt 3 if you want: [github.com/gitFoxCode/nuxt-icons](https://github.com/gitFoxCode/nuxt-icons).

## Add Node dependency

From [github.com/jpkleemans/vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader)

{% npm name="vite-svg-loader" dev=true /%}

```bash [pnpm]
pnpm add vite-svg-loader -D
```

```bash [npm]
npm install vite-svg-loader -D
```

```bash [yarn]
yarn add vite-svg-loader -D
```

### Add to Vue 3

```ts[vite.config.ts]
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme
  ],
});
```

### Add to Nuxt 3

```ts[nuxt.config.ts]
import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme
    ],
  },
});
```

## Add SVG for test

Create a directory like `assets` into your project and add a new SVG like `github.svg`.

```
- assets
  - icons
    - github.svg
- components
  - SvgIcon.vue (soon)
[vite|nuxt].config.ts
```

Here an example of `github.svg` from <https://icones.js.org>

```html[assets/icons/github.svg]
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  class="iconify iconify--mdi"
  width="32"
  height="32"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
>
  <path
    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
  ></path>
</svg>
```

Remove all attributes like `class`, `width` or `height` to avoid conflicts of sizing and add `fill="currentColor"` or `stroke="currentColor"` to allow CSS `color` on SVG.

```html[assets/icons/github.svg]
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
  ></path>
</svg>
```

## Create component

Watch out `../assets/icons/${props.name}.svg` because path is relative to my stack, if your `assets` directory is not on same place, update path.

```html[components/SvgIcon.vue]
<script setup lang="ts">
const props = defineProps<{
  name?: string;
}>();

const currentIcon = computed(() =>
  defineAsyncComponent({
    loader: () => import(`../assets/icons/${props.name}.svg`),
    loadingComponent: {
      template: "<span></span>",
    },
    errorComponent: {
      template: "<span>error</span>",
    },
    delay: 200,
    timeout: 3000,
    suspensible: true,
  })
);
const attrs = useAttrs();
</script>

<template>
  <span>
    <component :is="currentIcon" :class="attrs.class" />
  </span>
</template>
```

### Nuxt 3

For Nuxt 3, you have to add `client-only`.

```html[components/SvgIcon.vue]
<template>
  <span>
    <client-only>
      <component :is="currentIcon" :class="attrs.class" />
      <template #fallback />
    </client-only>
  </span>
</template>
```

## Usage

```html[app.vue]
<template>
  <div>
    <SvgIcon name="github" class="w-6 h-6" />
  </div>
</template>
```

{% callout type="warning" %}
Don't use subdirectories into `assets/icons`, because `build` will not compile nested SVG, put all your icons in root of `icons`.
{% /callout %}
