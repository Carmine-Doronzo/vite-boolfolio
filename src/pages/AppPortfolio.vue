<template>
    <div class="container py-4">
        <ul class="row gy-2 gap-2 justify-content-center p-0">
            <ProjectCardComponent v-for="projectItem in projects" :key="projectItem.id" :item="projectItem" />
        </ul>


        <ul class="list-unstyled d-flex gap-3 justify-content-center" v-if="lastPage > 1">
            <li style="cursor: pointer;" class="badge text-bg-success" @click="nextPage(page)" v-for="page in lastPage"
                :key="page">
                {{ page }}
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';
import ProjectCardComponent from '../components/ProjectCardComponent.vue';
export default {
    components: {
        ProjectCardComponent
    },
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },

    methods: {
        nextPage(page) {
            this.currentPage = page
            this.fetchProjects()
        },

        fetchProjects() {

            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage


                }
            }).then((res) => {

                this.projects = res.data.results.data
                this.lastPage = res.data.results.last_page
                //console.log(this.projects)
            })
        }
    },

    created() {
        this.fetchProjects()

    }
}
</script>

<style lang="scss" scoped></style>