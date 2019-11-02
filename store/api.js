export const state = () => ({
	skills: [],
	projects: [],
	formations: [],
	technologies: [],
	informations: []
})

export const mutations = {
	setSkills (state, skills) {
		state.skills = skills
	},
	setProjects (state, projects) {
		state.projects = projects
	},
	setFormations (state, formations) {
		state.formations = formations
	},
	setTechnologies (state, technologies) {
		state.technologies = technologies
	},
	setInformations (state, informations) {
		state.informations = informations
	}
}

export const actions = {
	async getApiData ({ commit }) {
		const [
			skills,
			projects,
			formations,
			technologies,
			informations
		] = await Promise.all([
			this.$axios.$get(`skills`),
			this.$axios.$get(`projects`),
			this.$axios.$get(`formations`),
			this.$axios.$get(`technologies`),
			this.$axios.$get(`informations`)
		])
		commit('setSkills', skills)
		commit('setProjects', projects)
		commit('setFormations', formations)
		commit('setTechnologies', technologies)
		commit('setInformations', informations)
	}
}
