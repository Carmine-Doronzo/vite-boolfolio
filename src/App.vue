<script>
  import axios from 'axios';
  import ProjectCardComponent from './components/ProjectCardComponent.vue'
  export default {
    components:{
      ProjectCardComponent,
    },
    data(){
      return{
        projects : []
      }
    },

    methods:{
      fetchProjects(){
        
        axios.get('http://127.0.0.1:8000/api/projects').then((res)=>{
          
          this.projects = res.data.results
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
</template>

<style lang="scss" scoped>

</style>