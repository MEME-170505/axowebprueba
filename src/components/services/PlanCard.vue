<template>
  <div class="col-lg-4 col-md-6 animate__animated animate__fadeInUp"
       :style="{ animationDelay: `${index * 0.2}s` }">
    <div class="card h-100 rounded-4 shadow-sm text-center">
      <div class="card-body">
        <img
          v-if="plan.img"
          :src="plan.img"
          :alt="plan.nombre"
          class="img-fluid rounded mb-3"
          style="max-height: 150px;"
        />
        <div
          v-else
          class="magic-wand-icon bg-gold text-white mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle"
        >
          <i class="bi bi-stars fs-2"></i>
        </div>
        
        <h3 class="mb-3">{{ plan.nombre }}</h3>
        
        <ul v-if="plan.detalles" class="list-unstyled text-start">
          <li v-for="detalle in plan.detalles" :key="detalle" class="mb-2">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            {{ detalle }}
          </li>
          <hr>
        </ul>
        
        <p v-else class="text-muted">{{ plan.descripcion }}</p>
        
        <h4 class="fw-bold mt-3">{{ plan.precioTexto }}</h4>
        <p class="text-muted">{{ plan.subinfo }}</p>
        
        <a href="#" class="btn btn-primary px-4 mt-2 rounded-pill">
          Solicitar mi plan
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.magic-wand-icon {
  width: 60px;
  height: 60px;
  box-shadow: 0 0 10px #f9c74f;
}

.bg-gold {
  background-color: #f9c74f;
}
</style>