<template>
  <section class="services-section">
    <div class="container">
      <SectionTitle title="Nuestros Servicios" />

      <div class="row justify-content-center">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-lg-10 mb-4"
        >
          <ServiceRow :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '../ui/SectionTitle.vue'
import ServiceRow from './ServiceRow.vue'

const services = ref([
  {
    icon: 'bi-laptop',
    shortTitle: 'Desarrollo Web',
    description: 'Desarrollo de tu página y tu negocio dentro del mundo digital.',
    color: '#f76c5e',
  },
  {
    icon: 'bi-envelope-paper-heart',
    shortTitle: 'Email Marketing',
    description: 'Correos electrónicos que venden, sustentados con una estrategia orientada a resultados.',
    color: '#8857e2',
  },
  {
    icon: 'bi-palette2',
    shortTitle: 'Diseño UX/UI',
    description: 'Diseñamos el concepto de tu tienda en línea para programarla a la medida.',
    color: '#0d6efd',
  },
  {
    icon: 'bi-megaphone-fill',
    shortTitle: 'Publicidad digital',
    description: 'Implementación de publicidad creativa en redes sociales y Google.',
    color: '#0dcaf0',
  },
  {
    icon: 'bi-robot',
    shortTitle: 'Automatización',
    description: 'Implementación de Servicio de Automatización a tus tareas más comunes dentro de tu empresa.',
    color: '#ffc107',
  },
])
</script>

<style scoped>
.services-section {
  background-color: #F6F1E6;
  padding: 5rem 0;
}
</style>