<script>
  import axios from 'axios';
  import ProjectCardComponent from './components/ProjectCardComponent.vue'
  import "bootstrap/dist/css/bootstrap.min.css";
  import 'bootstrap'
  export default {
    components:{
      ProjectCardComponent,
    },
    data(){
      return{
        projects : [],
        currentPage : 1,
        lastPage : null
      }
    },

    methods:{
      nextPage(page){
        this.currentPage = page
        this.fetchProjects()
      },

      fetchProjects(){
        
        axios.get('http://127.0.0.1:8000/api/projects',{
          params:{
            page: this.currentPage


        }}).then((res)=>{
          
          this.projects = res.data.results.data
          this.lastPage = res.data.results.last_page
          //console.log(this.projects)
        })
      }
    },

    created(){
      this.fetchProjects()
      
    }
  
  }
</script>

<template>
  <ul class="row">
    <ProjectCardComponent v-for="projectItem in projects" :key="projectItem.id" :item="projectItem"/>
  </ul>

  <div v-if="lastPage > 1">
    <ul class="list-unstyled">
      <li @click="nextPage(page)" v-for="page in lastPage" :key="page">
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>