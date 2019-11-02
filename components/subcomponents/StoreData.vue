<template>
    <div class="white-text">
        <pre>
            {{ $store.state }}
        </pre>
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