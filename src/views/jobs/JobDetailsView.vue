<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <!-- Get access to a Route parameter -->
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else class="loading">
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then(response => response.json())
      .then(data => this.job = data)
      .catch(error => console.log(error.message))
  }
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style></style>