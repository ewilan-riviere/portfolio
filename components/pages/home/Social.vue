<template>
    <div id="social">
        <ul class="social-list">
            <li v-for="item in social" :key="item.id" class="social-list-item">
                <Icon :icon="item.icon" :link="item.link" color="" addClass="icon"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from '@/components/sub/Icon.vue'

export default {
    data() {
        return {
            social: [
                {
                    name: 'GitHub',
                    link: 'https://github.com/ewilan-riviere',
                    icon: 'github-circle'
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/ewilan-riviere/',
                    icon: 'linkedin-box'
                },
                {
                    name: 'E-mail',
                    link: 'ewilan@dotslashplay.it',
                    icon: 'email'
                },
                {
                    name: 'CV',
                    link: 'http://portfolio-api.ewilan-riviere.tech/documents/cv.pdf',
                    icon: 'school'
                }
            ]
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
