<template>
  <div class="modal fade" tabindex="-1" :class="{ show: show }" style="display: block;" v-if="show">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold text-coral">
            <i class="bi bi-plus-circle me-2"></i>
            Crear Nuevo Pago
          </h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <!-- Información del Usuario -->
            <div class="form-section mb-4">
              <h6 class="section-title">
                <i class="bi bi-person-circle me-2"></i>
                Información del Usuario
              </h6>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombre del Usuario</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="form.userName"
                    placeholder="Nombre del usuario"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label class="form-label">Fecha de contratación</label>
                  <input 
                    type="date" 
                    class="form-control" 
                    v-model="form.contractDate"
                    required
                  >
                </div>
              </div>
            </div>

            <!-- Información de la Empresa -->
            <div class="form-section mb-4">
              <h6 class="section-title">
                <i class="bi bi-building me-2"></i>
                Información de la Empresa
              </h6>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombre de la empresa</label>
                  <select 
                    class="form-select" 
                    v-model="form.companyId"
                    @change="updateCompanyInfo"
                    required
                  >
                    <option value="">Seleccionar empresa</option>
                    <option 
                      v-for="company in empresasStore.empresas" 
                      :key="company.id" 
                      :value="company.id"
                    >
                      {{ company.name }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Folio</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="form.folio"
                    placeholder="Folio"
                    required
                  >
                </div>
              </div>
            </div>

            <!-- Plan / Servicio -->
            <div class="form-section mb-4">
              <h6 class="section-title">
                <i class="bi bi-box me-2"></i>
                Plan / Servicio
              </h6>
              
              <!-- Tipo de Servicio -->
              <div class="service-type-selector mb-3">
                <div class="btn-group w-100" role="group">
                  <input 
                    type="radio" 
                    class="btn-check" 
                    name="serviceType" 
                    id="predefinido" 
                    value="predefinido"
                    v-model="form.serviceType"
                    @change="resetServiceSelection"
                  >
                  <label class="btn btn-outline-primary" for="predefinido">
                    <i class="bi bi-list-ul me-2"></i>
                    Predefinido
                  </label>

                  <input 
                    type="radio" 
                    class="btn-check" 
                    name="serviceType" 
                    id="personalizado" 
                    value="personalizado"
                    v-model="form.serviceType"
                    @change="resetServiceSelection"
                  >
                  <label class="btn btn-outline-primary" for="personalizado">
                    <i class="bi bi-gear me-2"></i>
                    Personalizado
                  </label>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Plan o Servicio</label>
                  <select 
                    class="form-select" 
                    v-model="form.planService"
                    @change="updateServicePrice"
                    :disabled="!form.serviceType"
                    required
                  >
                    <option value="">Seleccionar plan o servicio</option>
                    <optgroup v-if="form.serviceType === 'predefinido'" label="Planes Predefinidos">
                      <option 
                        v-for="plan in serviciosStore.planes" 
                        :key="plan.id" 
                        :value="plan.nombre"
                      >
                        {{ plan.nombre }} - {{ plan.precioTexto }}
                      </option>
                    </optgroup>
                    <optgroup v-if="form.serviceType === 'predefinido'" label="Servicios Individuales">
                      <option 
                        v-for="servicio in serviciosStore.serviciosIndividuales" 
                        :key="servicio.id" 
                        :value="servicio.title"
                      >
                        {{ servicio.title }} - {{ servicio.price }}
                      </option>
                    </optgroup>
                    <option v-if="form.serviceType === 'personalizado'" value="Servicio Personalizado">
                      Servicio Personalizado
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Cliente</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="form.client"
                    placeholder="Nombre del cliente"
                    required
                  >
                </div>
              </div>
            </div>

            <!-- Asignar Pago -->
            <div class="form-section mb-4">
              <h6 class="section-title">
                <i class="bi bi-currency-dollar me-2"></i>
                Asignar Pago
              </h6>
              <div class="payment-container">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Monto Total</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input 
                        type="number" 
                        class="form-control" 
                        v-model="form.totalAmount"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        required
                      >
                      <span class="input-group-text">MXN</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Abonado</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input 
                        type="number" 
                        class="form-control" 
                        v-model="form.paidAmount"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        :max="form.totalAmount"
                        required
                      >
                      <span class="input-group-text">MXN</span>
                    </div>
                  </div>
                </div>

                <!-- Indicadores de pago -->
                <div class="payment-indicators mt-3">
                  <div class="row g-2">
                    <div class="col-md-4">
                      <div class="payment-indicator">
                        <span class="indicator-label">Total:</span>
                        <span class="indicator-value">${{ formatCurrency(form.totalAmount) }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="payment-indicator">
                        <span class="indicator-label">Abonado:</span>
                        <span class="indicator-value">${{ formatCurrency(form.paidAmount) }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="payment-indicator">
                        <span class="indicator-label">Pendiente:</span>
                        <span class="indicator-value text-danger">${{ formatCurrency(pendingAmount) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Botones de acción rápida -->
                <div class="quick-actions mt-3">
                  <div class="btn-group w-100" role="group">
                    <button 
                      type="button" 
                      class="btn btn-success"
                      @click="setPaymentStatus('liquidar')"
                    >
                      <i class="bi bi-check-circle me-1"></i>
                      Liquidar
                    </button>
                    <button 
                      type="button" 
                      class="btn btn-warning"
                      @click="setPaymentStatus('abono')"
                    >
                      <i class="bi bi-clock me-1"></i>
                      Abono
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Notas -->
            <div class="form-section mb-4">
              <h6 class="section-title">
                <i class="bi bi-chat-text me-2"></i>
                Notas
              </h6>
              <textarea 
                class="form-control" 
                rows="3" 
                v-model="form.notes"
                placeholder="Agregar notas o comentarios sobre este pago..."
              ></textarea>
            </div>
          </form>
        </div>

        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn btn-outline-secondary me-2" @click="$emit('close')">
            <i class="bi bi-x-circle me-1"></i>
            Cancelar
          </button>
          <button type="button" class="btn btn-primary" @click="handleSubmit">
            <i class="bi bi-plus-circle me-1"></i>
            Crear Pago
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show" v-if="show"></div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useEmpresasStore } from '../../stores/empresas'
import { useServiciosStore } from '../../stores/servicios'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close', 'save'])

const empresasStore = useEmpresasStore()
const serviciosStore = useServiciosStore()

const form = ref({
  userName: '',
  contractDate: '',
  companyId: '',
  folio: '',
  serviceType: 'predefinido',
  planService: '',
  client: '',
  totalAmount: 0,
  paidAmount: 0,
  notes: ''
})

const pendingAmount = computed(() => {
  return Math.max(0, (form.value.totalAmount || 0) - (form.value.paidAmount || 0))
})

const updateCompanyInfo = () => {
  const selectedCompany = empresasStore.empresas.find(c => c.id === form.value.companyId)
  if (selectedCompany) {
    form.value.client = selectedCompany.client
  }
}

const updateServicePrice = () => {
  const selectedService = form.value.planService
  
  // Buscar en planes
  const plan = serviciosStore.planes.find(p => p.nombre === selectedService)
  if (plan && plan.precio > 0) {
    form.value.totalAmount = plan.precio
    return
  }
  
  // Buscar en servicios individuales
  const servicio = serviciosStore.serviciosIndividuales.find(s => s.title === selectedService)
  if (servicio && servicio.precio > 0) {
    form.value.totalAmount = servicio.precio
    return
  }
  
  // Si es personalizado o no tiene precio, no cambiar el monto
}

const resetServiceSelection = () => {
  form.value.planService = ''
  form.value.totalAmount = 0
  form.value.paidAmount = 0
}

const setPaymentStatus = (action) => {
  if (action === 'liquidar') {
    form.value.paidAmount = form.value.totalAmount
  } else if (action === 'abono') {
    // Mantener el valor actual del abono
  }
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-MX').format(amount || 0)
}

const handleSubmit = () => {
  // Validaciones
  if (!form.value.userName) {
    alert('Por favor ingresa el nombre del usuario')
    return
  }

  if (!form.value.companyId) {
    alert('Por favor selecciona una empresa')
    return
  }

  if (!form.value.planService) {
    alert('Por favor selecciona un plan o servicio')
    return
  }

  if (!form.value.totalAmount || form.value.totalAmount <= 0) {
    alert('Por favor ingresa un monto total válido')
    return
  }

  if (form.value.paidAmount > form.value.totalAmount) {
    alert('El monto abonado no puede ser mayor al monto total')
    return
  }

  // Determinar el estado del pago
  let status = 'Pendiente'
  if (form.value.paidAmount === form.value.totalAmount) {
    status = 'Liquidado'
  } else if (form.value.paidAmount > 0) {
    status = 'Abono'
  }

  const paymentData = {
    userName: form.value.userName,
    contractDate: form.value.contractDate,
    companyId: form.value.companyId,
    folio: form.value.folio,
    planName: form.value.planService,
    client: form.value.client,
    amount: form.value.totalAmount,
    paidAmount: form.value.paidAmount,
    pendingAmount: pendingAmount.value,
    status: status,
    date: new Date().toISOString().split('T')[0],
    purchaseId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    notes: form.value.notes,
    serviceType: form.value.serviceType
  }

  emit('save', paymentData)
  resetForm()
}

const resetForm = () => {
  form.value = {
    userName: '',
    contractDate: '',
    companyId: '',
    folio: '',
    serviceType: 'predefinido',
    planService: '',
    client: '',
    totalAmount: 0,
    paidAmount: 0,
    notes: ''
  }
}

// Watch para resetear el formulario cuando se cierre el modal
watch(() => props.show, (newValue) => {
  if (!newValue) {
    resetForm()
  }
})
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.section-title {
  color: var(--primary-coral);
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-coral);
  display: flex;
  align-items: center;
}

.form-section {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.form-section:hover {
  border-color: var(--primary-coral);
}

.service-type-selector .btn-check:checked + .btn {
  background-color: var(--primary-coral);
  border-color: var(--primary-coral);
}

.payment-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid var(--primary-coral);
}

.payment-indicators {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.payment-indicator {
  text-align: center;
  padding: 0.5rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.indicator-label {
  display: block;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.indicator-value {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-blue);
}

.quick-actions .btn {
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quick-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.form-control:focus,
.form-select:focus {
  border-color: var(--primary-coral);
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.25);
}

.form-label {
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.input-group-text {
  background: white;
  border-color: #dee2e6;
  color: var(--primary-blue);
  font-weight: 600;
}

.btn-outline-primary {
  border-color: var(--primary-coral);
  color: var(--primary-coral);
}

.btn-outline-primary:hover {
  background-color: var(--primary-coral);
  border-color: var(--primary-coral);
}

@media (max-width: 768px) {
  .modal-dialog {
    margin: 0.5rem;
  }
  
  .form-section {
    padding: 1rem;
  }
  
  .payment-container {
    padding: 1rem;
  }
  
  .quick-actions .btn-group {
    flex-direction: column;
  }
  
  .quick-actions .btn {
    margin-bottom: 0.5rem;
  }
}
</style>