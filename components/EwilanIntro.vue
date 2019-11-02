<template>
    <div class="ewilan-intro">
        <div class="ewilan-intro-center">
            <div class="ewilan-intro-sub white-text">
                <EwilanLogo class="ewilan-intro-logo" logoRoute="/store" :anim="true" />
                <h1 class="intro-title font-morpheus background-ewilan" v-html="name"></h1>
                <div class="intro-details font-lautre mb-5">
                    <div>
                        <div class="background_developpeuse" v-html="job"></div>
                        <div class="background_back" v-html="jobDetails"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EwilanLogo from '@/components/subcomponents/EwilanLogo.vue'

export default {
    components: {
        EwilanLogo
    },
    props: {
    },
    data() {
        return {
            name: "Ewilan<br>Rivière",
            job: "Développeuse web, web mobile",
            jobDetails: "Orientée back-end<br>PHP",
            env: process.env.baseUrl,
        }
    }
}
</script>

<style lang="scss">
.ewilan-intro {
    .ewilan-intro-center {
        display: table-cell; 
        vertical-align: middle; 
        text-align: center; 
        padding: 10rem 0;
        .ewilan-intro-sub {
            // width: 50%;
            .ewilan-intro-logo {
                display: flex;
                justify-content: center;
                margin-bottom: 2rem;
            }
        }
    }
}
.intro-title {
	margin-bottom: 1rem;
}
.intro-details {
    font-size: 2rem;
}
</style>