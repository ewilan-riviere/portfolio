<template>
	<v-layout id="home" column justify-center align-center>
		<div id="ewilanIntro">
			<EwilanIntro />

			<transition name="fade">
				<div class="view" v-if="noScroll">
					<div class="go-down-container">
						<v-icon x-large color="white" class="go-down">mdi-chevron-down</v-icon>
					</div>
				</div>
			</transition>
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
		methods: {
			handleScroll () {
				if (window.scrollY > 30) {
					this.noScroll=false
				} else {
					this.noScroll=true
				}
			}
		},
		created () {
			if (process.browser) {
				window.addEventListener('scroll', this.handleScroll);
			}
		},
		destroyed () {
			if (process.browser) {
				window.removeEventListener('scroll', this.handleScroll);
			}
		},
		data() {
			return {
				title: 'NuxtJS',
				subtitle: 'Ewilan Rivière Portfolio',

				noScroll: true
			}
		}
	}
</script>

<style lang="scss">
#home {
	#ewilanIntro {
		min-height: 100vh;
		position: relative;

		.go-down-container {
			display: flex;
			position: absolute;
			bottom: 5rem;
			left: 50%;
			transform: translate(-50%);
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
