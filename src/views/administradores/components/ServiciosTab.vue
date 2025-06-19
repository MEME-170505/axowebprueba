<template>
  <div class="servicios-tab fade-in">
    <div class="row g-4">
      <!-- Create Plan Card -->
      <div class="col-md-6">
        <div class="action-card">
          <div class="action-icon">
            <i class="bi bi-clipboard-plus"></i>
          </div>
          <div class="action-content">
            <h4 class="action-title">Crear nuevo plan</h4>
            <p class="action-description">Agregar un nuevo plan de servicio con características personalizadas</p>
            <button class="admin-btn admin-btn-primary" @click="showPlanModal = true">
              <i class="bi bi-plus-circle me-2"></i>
              CREAR PLAN
            </button>
          </div>
        </div>
      </div>
      
      <!-- Create Service Card -->
      <div class="col-md-6">
        <div class="action-card">
          <div class="action-icon">
            <i class="bi bi-gear-fill"></i>
          </div>
          <div class="action-content">
            <h4 class="action-title">Crear nuevo servicio</h4>
            <p class="action-description">Agregar un nuevo tipo de servicio individual para los clientes</p>
            <button class="admin-btn admin-btn-primary" @click="showServiceModal = true">
              <i class="bi bi-plus-circle me-2"></i>
              CREAR SERVICIO
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Overview -->
    <div class="admin-card mt-4">
      <div class="admin-card-header">
        <h5 class="mb-0">
          <i class="bi bi-list-ul me-2"></i>
          Servicios y Planes Disponibles
        </h5>
      </div>
      <div class="admin-card-body">
        <div class="row g-4">
          <!-- Plans Section -->
          <div class="col-md-6">
            <h6 class="text-coral mb-3">
              <i class="bi bi-box-seam me-2"></i>
              Planes Disponibles
            </h6>
            <div class="service-list">
              <div class="service-item" v-for="plan in availablePlans" :key="plan.id">
                <div class="service-icon bg-coral">
                  <i class="bi bi-box"></i>
                </div>
                <div class="service-details">
                  <h6>{{ plan.name }}</h6>
                  <p class="text-muted">{{ plan.price }}</p>
                </div>
                <div class="service-actions">
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-pencil"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Services Section -->
          <div class="col-md-6">
            <h6 class="text-blue mb-3">
              <i class="bi bi-tools me-2"></i>
              Servicios Individuales
            </h6>
            <div class="service-list">
              <div class="service-item" v-for="service in availableServices" :key="service.id">
                <div class="service-icon bg-blue">
                  <i class="bi bi-gear"></i>
                </div>
                <div class="service-details">
                  <h6>{{ service.name }}</h6>
                  <p class="text-muted">{{ service.price }}</p>
                </div>
                <div class="service-actions">
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-pencil"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <PlanModal
      v-if="showPlanModal"
      @close="showPlanModal = false"
      @save="savePlan"
    />

    <ServiceModal
      v-if="showServiceModal"
      @close="showServiceModal = false"
      @save="saveService"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PlanModal from '../../../components/modals/PlanModal.vue';
import ServiceModal from '../../../components/modals/ServiceModal.vue';
import { useAlert } from '../../../composables/useAlert';

const { showSuccess } = useAlert();

const showPlanModal = ref(false);
const showServiceModal = ref(false);

const availablePlans = ref([
  { id: 1, name: 'Plan Huevo', price: '$15,000 MXN' },
  { id: 2, name: 'Plan Ajolote', price: '$25,000 MXN' },
  { id: 3, name: 'Plan Alebrije', price: 'Personalizado' }
]);

const availableServices = ref([
  { id: 1, name: 'Desarrollo Web', price: '$15,000 MXN' },
  { id: 2, name: 'Diseño UI/UX', price: '$8,000 MXN' },
  { id: 3, name: 'Email Marketing', price: '$5,000 MXN' },
  { id: 4, name: 'Marketing Digital', price: '$8,000 MXN' }
]);

const savePlan = (planData) => {
  window.dispatchEvent(new CustomEvent('newPlan', { detail: planData }));
  showSuccess('Plan creado', `El plan "${planData.nombre}" ha sido creado exitosamente`);
};

const saveService = (serviceData) => {
  window.dispatchEvent(new CustomEvent('newService', { detail: serviceData }));
  showSuccess('Servicio creado', `El servicio "${serviceData.title}" ha sido creado exitosamente`);
};
</script>

<style scoped>
.service-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.service-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
}

.service-details {
  flex: 1;
}

.service-details h6 {
  margin-bottom: 0.25rem;
  color: var(--primary-blue);
}

.service-details p {
  margin: 0;
  font-size: 0.875rem;
}

.service-actions {
  display: flex;
  gap: 0.5rem;
}
</style>