<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Raihan Nismara</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../assets/logo.png" alt="">
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li v-for="menu in menus" :key="menu.key" class="nav-item">
          <router-link :to="{name:menu.name}" class="nav-link">{{menu.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import menus from '@/constants/menus'
export default {
  name: 'Sidebar',
  data(){
    return {
      menus: menus
    }
  },
}
</script>

<style scoped>
li a.nav-link.router-link-exact-active {
  color: #fff;
}
</style>