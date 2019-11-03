<template>
    <div id="store">
        <StoreData />
    </div>
</template>

<script>
import StoreData from '@/components/pages/store/StoreData.vue'

export default {
    components: {
        StoreData
    },
	head () {
		return {
			title: "Store · Ewilan Rivière · Portfolio"
		}
	},
    async asyncData({ app, query, error }) {
        await app.$axios.get('users')
    },
}
</script>

<style lang="scss">
#store {

}
</style>
