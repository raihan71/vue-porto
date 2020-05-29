<template>
  <div id="app">
    <Sidebar></Sidebar>
    <div class="container-fluid p-0">
      <animation-page>
        <router-view/>
      </animation-page>
      <hr class="m-0">
    </div>
  </div>
</template>

<style>
  .img-project {width: 100px;}
</style>

<script>
import AnimationPage from '@/animations/AnimationPage.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar,
    AnimationPage
  }
}
</script>