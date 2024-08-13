<script>

import Sidebard from "@/components/sidebard/sidebard.vue";
import Navbar from "@/components/navbar/navbar.vue";

export default {
  name: "defaultLayout",
  components: {Navbar, Sidebard},
  methods: {
    getUser() {
      let user = localStorage.getItem('user')
      if(user === null) {
        this.$router.push('/auth/login')
      }
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <sidebard></sidebard>
      <div class="layout-page">
      <navbar></navbar>
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>