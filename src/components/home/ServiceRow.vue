<template>
  <div class="service-row">
    <div
      class="service-icon-container"
      :style="{ backgroundColor: service.color }"
    >
      <i :class="`bi ${service.icon} service-icon`"></i>
      <span class="service-title">{{ service.shortTitle }}</span>
    </div>
    <div class="service-description">
      <p class="service-text">{{ service.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.service-row {
  transition: var(--transition-base);
  background-color: #f6f1e6;
  border-radius: 15px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.service-row:hover {
  transform: translateX(10px);
  box-shadow: var(--shadow-md);
}

.service-icon-container {
  width: 120px;
  height: 120px;
  min-width: 120px;
  transition: var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

.service-icon {
  font-size: 2.5rem;
  color: white;
}

.service-title {
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
}

.service-description {
  background-color: white;
  border: 2px solid var(--primary-coral);
  border-radius: 15px;
  transition: var(--transition-base);
  height: 100%;
  flex-grow: 1;
  margin-left: 1rem;
  padding: 1.5rem;
}

.service-text {
  color: var(--primary-blue);
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
}

@media (max-width: 768px) {
  .service-row {
    flex-direction: column;
    text-align: center;
  }

  .service-description {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>