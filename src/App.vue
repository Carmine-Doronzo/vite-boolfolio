<script>

import HeaderComponent from './components/HeaderComponent.vue'
//import "bootstrap/dist/css/bootstrap.min.css";
//import 'bootstrap'
export default {
  components: {
    HeaderComponent,
  },
}
</script>

<template>
  <HeaderComponent/>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>