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
import axios from 'axios';
export default {
    methods: {
        goBack() {
            this.$router.back()
        },
        getProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`).then((res) => {

                // this.projects = res.data.results.data
                // this.lastPage = res.data.results.last_page
                console.log(res.data.results)
            })
        },
        
    },
    mounted(){
        console.log(this.$route.params.slug)
        this.getProject()
    }
}
</script>

<style lang="scss" scoped></style>