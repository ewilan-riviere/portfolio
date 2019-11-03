<template>
    <div>
		<v-tooltip bottom>
			<template v-slot:activator="{ on }">
				<a :href="checkLink()" target="_blank" v-on="on">
					<v-icon :class="addClass" large color="white darken-2">
						mdi-{{ icon }}
					</v-icon>
				</a>
			</template>
			<span>{{ name }}</span>
		</v-tooltip>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        checkLink() {
            if (this.link.includes('@')) {
                return 'mailto:'+this.link
            } else {
                return this.link
            }
        }
    },
    props: {
		name: String,
        addClass: String,
        color: String,
        link: String,
        icon: String
    }
}
</script>

<style lang="scss">
#icon {
    .icon-color {
        color: $black;
        &:hover {
            color: rgba($black, 0.5)
        }
    }
}
</style>
