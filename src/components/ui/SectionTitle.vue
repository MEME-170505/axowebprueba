<template>
  <div class="section-title-container text-center mb-5">
    <h2 class="section-title animate__animated animate__fadeIn">
      {{ title }}
    </h2>
    <div class="title-underline" v-if="showUnderline"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  showUnderline: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.section-title {
  color: var(--primary-coral);
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
}

.title-underline {
  height: 3px;
  width: 100px;
  background: var(--primary-coral);
  margin: 1rem auto 3rem;
}
</style>