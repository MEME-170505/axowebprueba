<template>
  <div>
    <!-- PLANES -->
    <section class="plans-section py-5">
      <div class="container">
        <SectionTitle title="NUESTROS PLANES" />
        <div class="row g-4 justify-content-center">
          <PlanCard
            v-for="(plan, index) in planesStore.planes"
            :key="plan.id"
            :plan="plan"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- SERVICIOS INDIVIDUALES -->
    <section class="individual-services py-5 bg-light">
      <div class="container">
        <SectionTitle title="SERVICIOS INDIVIDUALES" />
        <div class="row">
          <ServiceCard
            v-for="service in serviciosStore.serviciosIndividuales"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useServiciosStore } from '../stores/servicios'
import SectionTitle from '../components/ui/SectionTitle.vue'
import PlanCard from '../components/services/PlanCard.vue'
import ServiceCard from '../components/services/ServiceCard.vue'

const planesStore = useServiciosStore()
const serviciosStore = useServiciosStore()
</script>