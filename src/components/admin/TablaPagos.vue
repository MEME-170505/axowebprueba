<template>
  <div class="admin-card h-100">
    <div class="admin-card-header">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h5 class="mb-0 text-white">
          <i class="bi bi-clock-history me-2"></i>
          Historial de Pagos
          <span v-if="empresaSeleccionada" class="text-white-50">- {{ empresaSeleccionada.name }}</span>
        </h5>
        <button 
          class="admin-btn admin-btn-primary"
          @click="$emit('create-payment')"
          :disabled="!empresaSeleccionada"
        >
          <i class="bi bi-plus-circle me-2"></i>
          Crear Nuevo Pago
        </button>
      </div>
    </div>
    <div class="card-body p-0">
      <div v-if="!empresaSeleccionada" class="empty-selection text-center py-5">
        <div class="empty-icon mb-3">
          <i class="bi bi-arrow-left fs-1 text-muted"></i>
        </div>
        <h6 class="text-muted mb-2">Selecciona una empresa</h6>
        <p class="text-muted small mb-0">Elige una empresa de la lista para ver su historial de pagos</p>
      </div>
      <div v-else class="table-responsive">
        <table class="table align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th>Usuario</th>
              <th>Plan/Servicio</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>ID Compra</th>
              <th>Notas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <FilaPago
              v-for="pago in pagosEmpresa"
              :key="pago.id"
              :pago="pago"
              @view="$emit('view-payment', pago)"
              @edit="$emit('edit-payment', pago)"
            />
            <tr v-if="pagosEmpresa.length === 0">
              <td colspan="8" class="text-center py-4 text-muted">
                <i class="bi bi-inbox me-2"></i>
                No hay pagos registrados para esta empresa
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePagosStore } from '../../stores/pagos'
import FilaPago from './FilaPago.vue'

const props = defineProps({
  empresaSeleccionada: {
    type: Object,
    default: null
  }
})

defineEmits(['create-payment', 'view-payment', 'edit-payment'])

const pagosStore = usePagosStore()

const pagosEmpresa = computed(() => {
  if (!props.empresaSeleccionada) return []
  return pagosStore.obtenerPagosPorEmpresa(props.empresaSeleccionada.id)
})
</script>

<style scoped>
.admin-card-header {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
}

.empty-selection {
  background: #f8f9fa;
}

.admin-btn {
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.admin-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.admin-btn-primary {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
  border-color: var(--primary-coral);
}

.admin-btn-primary:hover {
  background: linear-gradient(135deg, #d73c26 0%, #c23321 100%);
  color: white;
}
</style>