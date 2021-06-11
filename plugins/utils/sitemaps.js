import axios from 'axios'
const { $content } = require('@nuxt/content')
require('dotenv').config()

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
  const projectsRoutes = await getEntityRoutes('projects', 'projects')
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
    routes.push(...projectsRoutes)

    resolve(routes)
  })
}

// eslint-disable-next-line no-unused-vars
function getEntityRoutes(backEndpoint, frontEndpoint) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const entities = await fetchEntities(backEndpoint)
    const routes = []

    for (const entity of entities.data) {
      const route = {
        url: `${frontEndpoint}/${entity.slug}`,
        // lastmodISO: post.meta.updatedAt,
        priority: 0.6,
      }
      routes.push(route)
    }

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

const fetchEntities = async (endpoint) => {
  console.log(`${process.env.API_URL}/${endpoint}`)
  try {
    const result = await axios.get(`${process.env.API_URL}/${endpoint}`)
    return result.data
  } catch (error) {
    console.error('Unable to catch API')
    return []
  }
}
