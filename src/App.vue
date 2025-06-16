<template>
<div class="app-container">
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
opacity: 0;
}
</style>