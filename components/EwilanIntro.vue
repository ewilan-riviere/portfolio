<template>
    <div class="ewilan-intro">
        <div class="ewilan-intro-sub white-text">
            <EwilanLogo class="ewilan-intro-logo" :anim="true" />
            <h1 class="intro-title font-morpheus background-ewilan" v-html="name"></h1>
            <div class="intro-details font-lautre mb-5">
                <div>
                    <div class="background_developpeuse" v-html="job"></div>
                    <div class="background_back" v-html="jobDetails"></div>
                </div>
            </div>
        </div>
        <!-- <StoreData :users="$store.state.users.users.data" /> -->
        <div class="white-text">
            ENV: {{ env }}
            <div>
                via Store<br>
                {{ contacts }}
            </div>
            <div>
                via asyncData<br>
                {{ contactsClassic }}
            </div>
            <div>
                <div>Store</div>
                <div>
                    {{ $store.state.users }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EwilanLogo from '@/components/subcomponents/EwilanLogo.vue'
import StoreData from '@/components/subcomponents/StoreData.vue'

export default {
    components: {
        EwilanLogo,
        StoreData
    },
    props: {
        contacts: {
            type: Object,
            default: []
        },
        contactsClassic: {
            type: Array
        }
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
    display: table-cell; 
    vertical-align: middle; 
    text-align: center; 
    .ewilan-intro-sub {
        // width: 50%;
        .ewilan-intro-logo {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
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