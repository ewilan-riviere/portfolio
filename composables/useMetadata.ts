import type { ComputedGetter } from 'vue'
import type { UseHeadInput } from '@unhead/vue'
import { useColorScheme } from './useColorScheme'

interface HeadMeta {
  description?: string
  route?: string
  image?: string
  type?: string
  url?: string
  title?: string
  autoPrefix?: boolean
}

export function useMetadata(meta?: HeadMeta) {
  // const appDescription = 'Portfolio of Ewilan Rivière, developer'

  if (!meta)
    meta = {}

  // let description = appDescription
  // if (meta?.description)
  //   description = `${meta.description.substring(0, 155 - 3)}...`

  let image = '/default.jpg'
  if (meta.image)
    image = meta.image

  const { fullPath } = useRoute()
  let route = fullPath

  const { isDark } = useColorScheme()

  if (meta?.autoPrefix || meta?.autoPrefix === undefined) {
    const config = useRuntimeConfig()

    image = `${config.public.siteUrl}${image}`
    route = `${config.public.siteUrl}${route}`
  }

  const metadata: UseHeadInput | ComputedGetter<UseHeadInput> = {
    title: meta.title,
    meta: [
      meta?.description
        ? {
            hid: 'description',
            name: 'description',
            content: meta.description,
          }
        : {},
      {
        name: 'theme-color',
        content: isDark.value ? '#6c63ff' : '#564fcc',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: route,
      },
      // {
      //   hid: 'og:title',
      //   property: 'og:title',
      //   content: title,
      // },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   content: description,
      // },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      // {
      //   hid: 'og:image:alt',
      //   property: 'og:image:alt',
      //   content: title,
      // },
      // {
      //   hid: 'twitter:title',
      //   name: 'twitter:title',
      //   content: title,
      // },
      // {
      //   hid: 'twitter:description',
      //   name: 'twitter:description',
      //   content: description,
      // },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/ico',
        href: '/favicon.ico',
      },
    ],
  }

  // https://github.com/vueuse/schema-org
  // https://vue-schema-org.netlify.app/guide/setup/nuxt.html
  // useSchemaOrg([
  //   defineOrganization({
  //     name: 'Nuxt.js',
  //     logo: '/logo.png',
  //     sameAs: [
  //       'https://twitter.com/nuxt_js'
  //     ]
  //   }),
  //   defineWebSite({
  //     name: 'Nuxt'
  //   })
  //   // defineWebPage(),
  // ])
  useHead(metadata)
}
