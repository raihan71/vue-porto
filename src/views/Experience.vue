<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div class="w-100">
        <h2 class="mb-5">Experience</h2>

        <div v-for="experience in experiences" :key="experience.key" class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">{{experience.role}}</h3>
            <div class="subheading mb-3">{{experience.company}}</div>
            <p>{{experience.desc}}</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">{{experience.date}}</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
        </div>

      </div>
  </section>
</template>

<script>
import experiences from '@/constants/experiences'
export default {
  name: 'Experience',
  data(){
    return{
      experiences: experiences
    }
  },
  mounted(){
    this.experiences.reverse()
  }
}
</script>

<style>

</style>