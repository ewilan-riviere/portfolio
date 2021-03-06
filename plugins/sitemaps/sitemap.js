import fetch from 'isomorphic-fetch'
require('dotenv').config()

export const getRoutes = () => {
  // Attention, cette fonction DOIT retourner une Promise.
  return new Promise((resolve, reject) => {
    // Je récupère les événements depuis mon API.
    const routes = []
    const staticRoutes = [
      {
        url: '',
        changefreq: 'weekly',
        priority: 0.6,
      },
      {
        url: 'projects',
        changefreq: 'weekly',
        priority: 1,
      },
    ]
    staticRoutes.forEach((route) => {
      routes.push(route)
    })
    routes.concat(staticRoutes)

    // Tout se passe bien, je résous ma Promise en renvoyant les routes ajoutées par ma fonction.
    resolve(routes)
  })
}

export const getProjectsRoutes = () => {
  // Attention, cette fonction DOIT retourner une Promise.
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    // Je récupère les événements depuis mon API.
    const projects = await fetchProjects()
    const routes = []

    for (const project of projects.data) {
      // Pour chaque événement, je renseigne les informations indexées à partir des données que j'ai.
      const route = {
        url: `/projects/${project.slug}`,
        lastmodISO: project.createdAt,
        priority: 1,
      }
      routes.push(route)
    }
    // Tout se passe bien, je résous ma Promise en renvoyant les routes ajoutées par ma fonction.
    resolve(routes)
  })
}

const fetchProjects = () => {
  return fetch(`${process.env.API_URL}projects`).then((response) =>
    response.json()
  )
}
