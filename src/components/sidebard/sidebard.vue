<script>
export default {
  name: "sidebard",
  data() {
    return{
    lokalUser: {
      id: "0",
      ism: "",
      familiya: "",
      kasblar_id: "",
      login: "",
      token: ""
    },
    }
  },
  mounted() {
    let storage = JSON.parse(localStorage.getItem('lokalUser'));
    this.lokalUser = storage;
  }
}
</script>

<template>
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <router-link to="/"  class="app-brand-link">
        <span style="margin-left: 5px; font-size: 1rem; color: #566A7F; font-weight: 600;">ISMA University</span>
      </router-link>

    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboard -->
      <li class="menu-item" :class="this.$route.name === 'dashboard' ? 'active':''">
        <router-link to="/" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </router-link>
      </li>
      
      <li class="menu-item" :class="this.$route.name === 'addProduct' ? 'active':''">
        <router-link to="/product/create" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </router-link>
      </li>
      

    </ul>
  </aside>
</template>

<style scoped>

</style>