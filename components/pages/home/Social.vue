<template>
    <div id="social">
        <ul class="social-list">
            <li v-for="item in social" :key="item.id" class="social-list-item">
                <Icon :icon="item.icon" :link="item.link" :name="item.name" color="" addClass="icon"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from '@/components/sub/Icon.vue'

export default {
    data() {
        return {
            social: this.$store.state.api.socials.data
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="scss">
#social {
    color: $black;
    .icon {
        font-size: 5rem;
    }
    .social-list {
        padding-left: 0;
        list-style: none;
        .social-list-item {
            display: inline-block;
            margin: 0 0.3rem;
        }
    }
}
</style>
