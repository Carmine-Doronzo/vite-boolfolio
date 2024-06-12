<script>
  export default {
    props: {
      item: { type: Object}
      
    }
  }
</script>

<template>
  <div>
    <li class="card">
      <p>repo name: {{ item.name }}</p>

    </li>
  </div>
</template>

<style lang="scss" scoped>



</style>