<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul class="list-inline dev-icons">
          <li v-for="(skill, index) in coreSkills" :key="index" class="list-inline-item">
            <i class="fab" :class="skill" :title="skill"></i>
          </li>
        </ul>

        <div class="subheading mb-3">Other Skills</div>
        <ul class="list-inline dev-icons">
          <li v-for="(skill, index) in otherSkills" :key="index" class="list-inline-item">
            <i class="fa" :class="skill" :title="skill"></i>
          </li>
        </ul>

      </div>
    </section>
</template>

<script>
import skills from '@/constants/skills'
export default {
  name: 'Skill',
  data(){
    return {
      coreSkills: skills.coreSkills,
      otherSkills: skills.otherSkills
    }
  }
}
</script>

<style>

</style>