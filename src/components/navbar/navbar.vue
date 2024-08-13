<script>
export default {
  name: "navbar",
  data() {
    return {
      lokalUser: {
        "id":"9",
        "ism":"kafedra muduri",
        "familiya":"",
        "kasblar_id":"0",
        "login":"",
        "token":""
      }
    }
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$router.push('/auth/login')
    }
  },
  mounted() {

  },
  created() {

  }
}
</script>

<template>
  <nav
      class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar">

    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
      <a class="nav-item nav-link px-0 me-xl-4"> <i class="bx bx-menu bx-sm"></i> </a>


    </div>

    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
      <!-- Search -->
      <div class="navbar-nav align-items-center">
        <div class="nav-item d-flex align-items-center">

          <i class="bx bx-search fs-4 lh-0"></i>
        </div>
      </div>      
      <h5>{{lokalUser.ism}}  \\ {{lokalUser.login}} \\  </h5> <h5
       v-if="lokalUser.kasblar_id == '1'">Kafedra</h5>
   
      <!-- /Search -->
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        <!-- Place this tag where you want the button to render. -->


        <!-- User -->
        <li class="nav-item navbar-dropdown dropdown-user dropdown">
          <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <div class="avatar avatar-online">
              <img src="https://avatar.iran.liara.run/public/19" alt class="w-px-40 h-auto rounded-circle"/>
            </div>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar avatar-online">
                      <img src="https://avatar.iran.liara.run/public/19" alt class="w-px-40 h-auto rounded-circle"/>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <span class="fw-semibold d-block">{{lokalUser.ism}}  </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div class="dropdown-divider"></div>
            </li>
            <li>
              <button class="dropdown-item" @click="signOut">
                <i class="bx bx-power-off me-2"></i>
                <span class="align-middle">Log out</span>
              </button>
            </li>
          </ul>
        </li>
        <!--/ User -->
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>