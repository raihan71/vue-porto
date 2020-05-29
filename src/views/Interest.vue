<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div class="w-100">
        <h2 class="mb-5">Interests</h2>
        <p>{{interests.desc}}</p>
      </div>
    </section>
</template>

<script>
import interests from '@/constants/interests'
export default {
  name: 'Interest',
  data(){
    return {
      interests: interests
    }
  }
}
</script>

<style>

</style>