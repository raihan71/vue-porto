<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
    <div class="w-100">
      <h2 class="mb-5">Education</h2>

      <div v-for="edu in educations" :key="edu.key" class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">{{edu.school}}</h3>
          <div class="subheading mb-3">{{edu.subject}}</div>
          <div>{{edu.desc}}</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{edu.date}}</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
      </div>

    </div>
  </section>
</template>

<script>
import edus from '@/constants/educations'
export default {
  name: 'Education',
  data(){
    return {
      educations: edus
    }
  },
  mounted(){
    this.educations.reverse()
  }
}
</script>

<style>

</style>