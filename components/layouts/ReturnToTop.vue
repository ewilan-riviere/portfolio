<template>
	<div>
		<transition name="fade">
			<div class="view" v-if="returnToTop">
				<div
					class="return-to-top"
					@click="$vuetify.goTo(target)"
				>
					<v-icon class="icon">mdi-chevron-up</v-icon>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		target: String,
		returnToTop: Boolean
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">

</style>
