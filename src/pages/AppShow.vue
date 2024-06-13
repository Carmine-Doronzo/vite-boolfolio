<template>
    <div>
        show

        <button class="btn btn-primary" @click="goBack">
            Indietro
        </button>

        <p>{{ $route.params.slug }}</p>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped></style>