<template>
	<v-layout id="home" column justify-center align-center>
		<div id="ewilanIntro">
			<EwilanIntro />
			<div class="go-down-container">
				<v-icon x-large color="white" class="go-down">mdi-chevron-down</v-icon>
			</div>
		</div>
		<div id="informations">
			<Informations />
		</div>
	</v-layout>
</template>

<script>
	import EwilanIntro from '@/components/pages/home/EwilanIntro.vue'
	import Informations from '@/components/pages/home/Informations.vue'

	export default {
		async asyncData({ app, query, error }) {
			await app.$axios.get('users')
		},
		components: {
			EwilanIntro,
			Informations
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
#home {
	#ewilanIntro {
		min-height: 100vh;

		.go-down-container {
			display: flex;
			.go-down {
				font-size: 5rem !important;
				margin: auto;
				text-align: center;
				animation: scrollToBottom 3s infinite;
			}
		}

	}
	#informations {
		margin-bottom: 3rem;
	}

	@keyframes scrollToBottom {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(20px);
		}

		100% {
			transform: translateY(0);
		}
	}
}
</style>
