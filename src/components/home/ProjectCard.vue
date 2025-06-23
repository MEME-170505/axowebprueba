<template>
  <div class="project-card">
    <div class="project-card-inner">
      <div class="project-card-front">
        <img
          :src="client.logo"
          :alt="client.name"
          class="project-logo"
        />
      </div>
      <div class="project-card-back">
        <h5>{{ client.name }}</h5>
        <p>{{ client.description }}</p>
        <a :href="client.link" target="_blank" class="project-link">
          Visitar sitio <i class="bi bi-box-arrow-up-right ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  client: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  background-color: transparent;
  width: 100%;
  height: 300px;
  perspective: 1000px;
}

.project-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.project-card:hover .project-card-inner {
  transform: rotateY(180deg);
}

.project-card-front,
.project-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: var(--shadow-sm);
}

.project-card-front {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.project-card-back {
  background: var(--primary-blue);
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.project-logo {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
}

.project-link {
  background-color: white;
  color: var(--primary-blue);
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: var(--transition-base);
  font-weight: 600;
}

.project-link:hover {
  background-color: var(--primary-coral);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}
</style>