<template>
  <div class="pagos-tab fade-in">
    <div class="payments-layout">
      <!-- Companies Panel -->
      <div class="companies-panel">
        <ListaEmpresas
          :selected-empresa="selectedCompany"
          @select="selectCompany"
        />
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <TablaPagos
          :empresa-seleccionada="selectedCompany"
          @create-payment="openPaymentForm"
          @view-payment="viewPayment"
          @edit-payment="editPayment"
        />
      </div>
    </div>

    <!-- Create Payment Modal -->
    <CreatePaymentModal
      v-if="showCreatePaymentModal"
      :show="showCreatePaymentModal"
      @close="showCreatePaymentModal = false"
      @save="saveNewPayment"
    />

    <!-- Payment Detail Modal -->
    <PaymentDetailModal
      v-if="showPaymentDetailModal"
      :show="showPaymentDetailModal"
      :payment="selectedPayment"
      :companies="empresasStore.empresas"
      @close="showPaymentDetailModal = false"
      @edit="openEditPaymentModal"
    />

    <!-- Payment Edit Modal -->
    <PaymentEditModal
      v-if="showPaymentEditModal"
      :show="showPaymentEditModal"
      :payment="selectedPayment"
      :companies="empresasStore.empresas"
      @close="showPaymentEditModal = false"
      @save="savePaymentEdit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useEmpresasStore } from '../../../stores/empresas'
import { usePagosStore } from '../../../stores/pagos'
import ListaEmpresas from '../../../components/admin/ListaEmpresas.vue'
import TablaPagos from '../../../components/admin/TablaPagos.vue'
import CreatePaymentModal from '../../../components/modals/CreatePaymentModal.vue'
import PaymentDetailModal from '../../../components/modals/PaymentDetailModal.vue'
import PaymentEditModal from '../../../components/modals/PaymentEditModal.vue'
import { useAlert } from '../../../composables/useAlert'

const { showSuccess, showInfo, showWarning } = useAlert()

const empresasStore = useEmpresasStore()
const pagosStore = usePagosStore()

const showCreatePaymentModal = ref(false)
const showPaymentDetailModal = ref(false)
const showPaymentEditModal = ref(false)
const selectedCompany = ref(null)
const selectedPayment = ref(null)

const selectCompany = (company) => {
  selectedCompany.value = company
  showInfo('Empresa seleccionada', `Has seleccionado ${company.name}`)
}

const openPaymentForm = () => {
  if (!selectedCompany.value) {
    showWarning('Selecciona una empresa', 'Debes seleccionar una empresa antes de crear un pago')
    return
  }
  showCreatePaymentModal.value = true
}

const saveNewPayment = (paymentData) => {
  pagosStore.agregarPago(paymentData)
  showCreatePaymentModal.value = false
  showSuccess('Pago creado', `El pago para ${paymentData.userName} ha sido creado exitosamente`)
}

const viewPayment = (payment) => {
  selectedPayment.value = payment
  showPaymentDetailModal.value = true
}

const editPayment = (payment) => {
  selectedPayment.value = payment
  showPaymentEditModal.value = true
}

const openEditPaymentModal = (payment) => {
  showPaymentDetailModal.value = false
  selectedPayment.value = payment
  showPaymentEditModal.value = true
}

const savePaymentEdit = (updatedPayment) => {
  pagosStore.actualizarPago(updatedPayment.id, updatedPayment)
  showSuccess('Pago actualizado', 'Los cambios han sido guardados exitosamente')
  showPaymentEditModal.value = false
  selectedPayment.value = null
}
</script>

<style scoped>
.payments-layout {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 1.5rem;
  min-height: 600px;
}

.companies-panel {
  position: relative;
}

.main-content {
  position: relative;
}

@media (max-width: 1200px) {
  .payments-layout {
    grid-template-columns: 300px 1fr;
  }
}

@media (max-width: 992px) {
  .payments-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .companies-panel {
    order: 2;
  }
  
  .main-content {
    order: 1;
  }
}
</style>