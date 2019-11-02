<template>
    <div id="about">
        <div class="center text-center">
            <Logo />
            <div class="white-text">
                <p class="font-morpheus about-title">
                    {{ title }}
                </p>
                <p>
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/pages/about/Logo.vue'

export default {
    components: {
        Logo
    },
    data() {
        return {
            title: 'À propos',
            text: 'text'
        }
    }
}
</script>

<style lang="scss">
#about {
    .center {
        padding: 10rem 0;
        margin: auto;
        float: none;
        display: table;
        .about-title {
            font-size: 4rem;
            font-weight: bold;
        }
    }
}
</style>
