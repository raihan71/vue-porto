<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">{{me.biodata.first_name}}
        <span class="text-primary">{{me.biodata.last_name}}</span>
      </h1>
      <div class="subheading mb-5">{{me.biodata.address}}
        <a href="mailto:raihannismara@gmail.com">{{me.biodata.email}}</a>
      </div>
      <p class="lead mb-5">{{me.biodata.headline}}</p>
      <div class="social-icons">
        <a v-for="(social,index) in me.sosmed" :key="index" :href="social.link" target="_blank">
          <i class="fab" :class="social.icon"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import profiles from '@/constants/profiles'
export default {
  name: 'About',
  data(){
    return {
      me: profiles,
    }
  }
}
</script>

<style>

</style>