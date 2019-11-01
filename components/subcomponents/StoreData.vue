<template>
    <div>
        {{ users }}
    </div>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">

</style>