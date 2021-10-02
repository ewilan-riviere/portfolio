import { $content } from '@nuxt/content'

// export default (meta) => {
//   return [
//     {
//       path: '/sitemaps/sitemap.xml',
//       exclude: ['**'],
//       routes() {
//         return getRoutes()
//       },
//     },
//     {
//       path: '/sitemaps/documentation.xml',
//       exclude: ['**'],
//       routes: () => {
//         return getContentRoutes()
//       },
//     },
//   ]
// }

// function getRoutes() {
//   // Attention, cette fonction DOIT retourner une Promise.
//   return new Promise((resolve, reject) => {
//     // Je récupère les événements depuis mon API.
//     const routes = []
//     const staticRoutes = [
//       {
//         url: '',
//         changefreq: 'weekly',
//         priority: 1,
//       },
//     ]
//     staticRoutes.forEach((route) => {
//       routes.push(route)
//     })
//     routes.concat(staticRoutes)

//     // Tout se passe bien, je résous ma Promise en renvoyant les routes ajoutées par ma fonction.
//     resolve(routes)
//   })
// }

// function getContentRoutes() {
//   // eslint-disable-next-line no-async-promise-executor
//   return new Promise(async (resolve, reject) => {
//     const guides = await $content({ deep: true })
//       .only(['path', 'slug', 'created_at'])
//       .fetch()
//     const routes = []

//     for (const guide of guides) {
//       const route = {
//         url: `${guide.path}`,
//         lastmodISO: guide.created_at,
//         priority: 0.6,
//       }
//       routes.push(route)
//     }
//     resolve(routes)
//   })
// }

export default (meta) => {
  return [
    {
      path: '/sitemap.xml',
      exclude: ['**'],
      routes() {
        return getRoutes()
      },
    },
  ]
}

// eslint-disable-next-line require-await
async function getRoutes() {
  const privacyPolicyRoutes = await getPrivacyPolicyRoutes()
  // const projectsRoutes = await getEntityRoutes('projects', 'projects')
  return new Promise((resolve, reject) => {
    const routes = []
    const staticRoutes = [
      {
        url: '',
        changefreq: 'weekly',
        priority: 1,
      },
      {
        url: 'projects',
        changefreq: 'weekly',
        priority: 1,
      },
    ]
    routes.push(...staticRoutes)
    routes.push(...privacyPolicyRoutes)
    // routes.push(...projectsRoutes)

    resolve(routes)
  })
}

export const getPrivacyPolicyRoutes = () => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const pages = await $content('privacy-policy', { deep: true })
      .only(['path', 'slug', 'created_at'])
      .sortBy('updated_at')
      .fetch()

    const routes = []

    for (const page of pages) {
      const route = {
        url: `/privacy-policy/${page.slug}`,
        lastmodISO: pages.updated_at,
        priority: 0.8,
      }
      routes.push(route)
    }
    resolve(routes)
  })
}
