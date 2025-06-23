<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100 service-card rounded-4 shadow-sm">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div
            :class="`service-icon text-white p-3 rounded d-flex align-items-center justify-content-center ${service.color}`"
          >
            <i :class="`${service.icon} fs-3`"></i>
          </div>
          <h5 class="fw-bold">{{ service.price }}</h5>
        </div>
        <h4>{{ service.title }}</h4>
        <p class="text-muted">{{ service.description }}</p>
        <div class="text-center mt-3">
          <a href="#" class="btn btn-sm btn-primary px-4 rounded-pill">
            Solicitar
          </a>
        </div>
      </div>
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
.service-icon {
  width: 60px;
  height: 60px;
}

.bg-coral {
  background-color: #f28482;
}

.bg-purple {
  background-color: #8857e2;
}
</style>