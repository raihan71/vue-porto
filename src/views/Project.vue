<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
      <div class="w-100">
        <h2 class="mb-5">Projects</h2>
        <ul class="list-inline dev-icons">
          <li v-for="(project,index) in projects" :key="index" class="list-inline-item">
            <a :href="project.link" target="_blank"><img :src="project.logo" :title="project.label" class="img-project"></a>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import projects from '@/constants/projects'
export default {
  name: 'Project',
  data(){
    return{
      projects: projects
    }
  }
}
</script>

<style scoped>
  a:hover {
    background-color: #f8d7da;
  }
</style>