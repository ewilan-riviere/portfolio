export const state = () => ({
	skills: [],
	projects: [],
	formations: [],
	technologies: [],
	texts: [],
	medias: [],
	socials: []
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
	setTexts (state, texts) {
		state.texts = texts
	},
	setMedias (state, medias) {
		state.medias = medias
	},
	setSocials (state, socials) {
		state.socials = socials
	}
}

export const actions = {
	async getApiData ({ commit }) {
		const [
			skills,
			projects,
			formations,
			technologies,
			texts,
			medias,
			socials
		] = await Promise.all([
			this.$axios.$get(`skills`),
			this.$axios.$get(`projects`),
			this.$axios.$get(`formations`),
			this.$axios.$get(`technologies`),
			this.$axios.$get(`texts`),
			this.$axios.$get(`medias`),
			this.$axios.$get(`socials`)
		])
		commit('setSkills', skills)
		commit('setProjects', projects)
		commit('setFormations', formations)
		commit('setTechnologies', technologies)
		commit('setTexts', texts)
		commit('setMedias', medias)
		commit('setSocials', socials)
	}
}
