<template>
	<div id="informations">
		<div class="informations-container">
			text
			<div>

			</div>
		</div>
		<div>
			<ul class="informations-list">
				<li class="informations-list-item">
					<v-icon large color="white darken-2">
						mdi-text-subject
					</v-icon>
				</li>
				<li class="informations-list-item">
					<v-icon large color="white darken-2">
						mdi-school
					</v-icon>
				</li>
				<li class="informations-list-item">
					<v-icon large color="white darken-2">
						mdi-xml
					</v-icon>
				</li>
				<li class="informations-list-item">
					<v-icon large color="white darken-2">
						mdi-library-books
					</v-icon>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#informations {
	// position: relative;
	// margin: 5rem 0;
	// height: 20rem;
	.informations-container {
		background-color: $white;
		// margin: 5rem 0;
		// position: absolute;
		// bottom: 2rem;
		// left: 0rem;
		padding: 2rem 5rem;
		// height: 5rem;
		width: 100vw;
	}
	.informations-list {
        padding-left: 0;
        list-style: none;
        .informations-list-item {
            display: inline-block;
            margin: 0 0.3rem;
        }
    }
}
</style>
