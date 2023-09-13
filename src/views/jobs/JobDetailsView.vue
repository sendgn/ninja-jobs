<template>
  <h1>Job Details Page</h1>
  <!-- Get access to a Route parameter -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style></style>