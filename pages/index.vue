<template>
	<v-layout column justify-center align-center>
		<div class="index-height">
			<GitHubRibbon />
			<EwilanIntro />
		</div>
	</v-layout>
</template>

<script>
	import EwilanIntro from '@/components/EwilanIntro.vue'
	import GitHubRibbon from '@/components/subcomponents/GitHubRibbon.vue'
	import NavigationDrawer from '@/components/NavigationDrawer.vue'

	export default {
		async asyncData({ app, query, error }) {
			let apiUsers = await app.$axios.get('users')
			// return { apiUsers: apiUsers.data }
		},
		components: {
			EwilanIntro,
			GitHubRibbon,
			NavigationDrawer
		},
		data() {
			return {
			title: 'NuxtJS',
			subtitle: 'Ewilan Rivière Portfolio',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.index-height {
	height: 150vh;
}
</style>