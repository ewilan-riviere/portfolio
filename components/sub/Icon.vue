<template>
    <div>
        <a :href="checkLink()" target="_blank">
            <v-icon :class="addClass" large color="white darken-2">
                mdi-{{ icon }}
            </v-icon>
        </a>
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