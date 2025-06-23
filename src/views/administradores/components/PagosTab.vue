<template>
  <div class="pagos-tab fade-in">
    <div class="payments-layout">
      <!-- Companies Panel -->
      <div class="companies-panel">
        <div class="admin-card h-100">
          <div class="admin-card-header">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="mb-0 fw-bold text-white">
                <i class="bi bi-building me-2"></i>
                Empresas
              </h5>
              <span class="badge bg-white text-coral">{{ filteredCompanies.length }}</span>
            </div>
          </div>
          <div class="card-body p-0">
            <!-- Search Bar -->
            <div class="search-container p-3 border-bottom">
              <div class="input-group">
                <span class="input-group-text bg-light border-0">
                  <i class="bi bi-search text-muted"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control border-0 bg-light" 
                  placeholder="Buscar empresa o cliente..."
                  v-model="companySearchQuery"
                >
              </div>
            </div>
            
            <!-- Companies List -->
            <div class="company-list">
              <div 
                v-for="company in filteredCompanies" 
                :key="company.id"
                class="company-item"
                :class="{ 'active': selectedCompany?.id === company.id }"
                @click="selectCompany(company)"
              >
                <div class="company-content">
                  <div class="company-avatar">
                    <i class="bi bi-building-fill"></i>
                  </div>
                  <div class="company-info">
                    <div class="company-name">{{ company.name }}</div>
                    <div class="company-client">
                      <i class="bi bi-person-circle me-1"></i>
                      {{ company.client }}
                    </div>
                    <div class="company-stats">
                      <span class="stat-item">
                        <i class="bi bi-credit-card me-1"></i>
                        {{ getCompanyPayments(company.id).length }} pagos
                      </span>
                    </div>
                  </div>
                  <div class="company-status">
                    <div class="status-indicator active"></div>
                  </div>
                </div>
              </div>
              
              <div v-if="filteredCompanies.length === 0" class="empty-state p-4 text-center">
                <i class="bi bi-search text-muted fs-1 mb-3"></i>
                <p class="text-muted mb-0">No se encontraron empresas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <div class="admin-card h-100">
          <div class="admin-card-header">
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <h5 class="mb-0 text-white">
                <i class="bi bi-clock-history me-2"></i>
                Historial de Pagos
                <span v-if="selectedCompany" class="text-white-50">- {{ selectedCompany.name }}</span>
              </h5>
              <button 
                class="admin-btn admin-btn-primary"
                @click="openPaymentForm"
                :disabled="!selectedCompany"
              >
                <i class="bi bi-plus-circle me-2"></i>
                Crear Nuevo Pago
              </button>
            </div>
          </div>
          <div class="card-body p-0">
            <div v-if="!selectedCompany" class="empty-selection text-center py-5">
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
                  <tr v-for="payment in getCompanyPayments(selectedCompany.id)" :key="payment.id">
                    <td>
                      <div class="user-info">
                        <i class="bi bi-person-circle me-2 text-coral"></i>
                        {{ payment.userName || 'N/A' }}
                      </div>
                    </td>
                    <td>
                      <div class="plan-info">
                        <i class="bi bi-box me-2 text-coral"></i>
                        <div>
                          <div class="fw-bold">{{ payment.planName }}</div>
                          <small class="text-muted" v-if="payment.services && payment.services.length > 1">
                            +{{ payment.services.length - 1 }} servicios más
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="fw-bold text-success">${{ payment.amount.toLocaleString() }}</span>
                    </td>
                    <td>
                      <span :class="getStatusBadgeClass(payment.status)">
                        {{ payment.status }}
                      </span>
                    </td>
                    <td>{{ formatDate(payment.date) }}</td>
                    <td>
                      <code class="text-muted">{{ payment.purchaseId }}</code>
                    </td>
                    <td>
                      <div class="notes-cell">
                        <span v-if="payment.notes" class="text-muted">
                          {{ truncateText(payment.notes, 30) }}
                        </span>
                        <span v-else class="text-muted">-</span>
                      </div>
                    </td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" @click="viewPayment(payment)" title="Ver detalles">
                          <i class="bi bi-eye"></i>
                        </button>
                        <button class="btn btn-outline-secondary" @click="editPayment(payment)" title="Editar">
                          <i class="bi bi-pencil"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="getCompanyPayments(selectedCompany.id).length === 0">
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
      </div>
    </div>

    <!-- Create Payment Modal -->
    <CreatePaymentModal
      v-if="showCreatePaymentModal"
      :show="showCreatePaymentModal"
      :companies="companies"
      @close="showCreatePaymentModal = false"
      @save="saveNewPayment"
    />

    <!-- Payment Detail Modal -->
    <PaymentDetailModal
      v-if="showPaymentDetailModal"
      :show="showPaymentDetailModal"
      :payment="selectedPayment"
      :companies="companies"
      @close="showPaymentDetailModal = false"
      @edit="openEditPaymentModal"
    />

    <!-- Payment Edit Modal -->
    <PaymentEditModal
      v-if="showPaymentEditModal"
      :show="showPaymentEditModal"
      :payment="selectedPayment"
      :companies="companies"
      @close="showPaymentEditModal = false"
      @save="savePaymentEdit"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CreatePaymentModal from '../../../components/modals/CreatePaymentModal.vue';
import PaymentDetailModal from '../../../components/modals/PaymentDetailModal.vue';
import PaymentEditModal from '../../../components/modals/PaymentEditModal.vue';
import { useAlert } from '../../../composables/useAlert';

const { showSuccess, showInfo, showWarning } = useAlert();

const companySearchQuery = ref('');
const showCreatePaymentModal = ref(false);
const showPaymentDetailModal = ref(false);
const showPaymentEditModal = ref(false);
const selectedCompany = ref(null);
const selectedPayment = ref(null);

// Sample data
const companies = ref([
  { id: 1, name: 'Electrocopy', client: 'Juan Pérez' },
  { id: 2, name: 'DAI', client: 'María García' },
  { id: 3, name: 'Bufin del Norte', client: 'Carlos López' }
]);

const payments = ref([
  {
    id: 1,
    companyId: 1,
    userName: 'Juan Pérez',
    planName: 'Plan Ajolote',
    services: ['Plan Ajolote', 'Marketing Digital'],
    amount: 25000,
    status: 'Pagado',
    date: '2024-01-15',
    purchaseId: 'TXN123456789',
    notes: 'Pago realizado mediante transferencia bancaria. Cliente solicita factura.'
  },
  {
    id: 2,
    companyId: 1,
    userName: 'Ana López',
    planName: 'Marketing Digital + Email Marketing',
    services: ['Marketing Digital', 'Email Marketing', 'Diseño UI/UX'],
    amount: 21000,
    status: 'Pendiente',
    date: '2024-01-20',
    purchaseId: 'TXN987654321',
    notes: 'Servicios múltiples contratados. Pendiente de confirmación de pago.'
  },
  {
    id: 3,
    companyId: 2,
    userName: 'María García',
    planName: 'Plan Huevo',
    services: ['Plan Huevo'],
    amount: 15000,
    status: 'Pagado',
    date: '2024-01-10',
    purchaseId: 'TXN456789123',
    notes: ''
  }
]);

const filteredCompanies = computed(() => {
  return companies.value.filter(company => {
    return company.name.toLowerCase().includes(companySearchQuery.value.toLowerCase()) ||
           company.client.toLowerCase().includes(companySearchQuery.value.toLowerCase());
  });
});

const selectCompany = (company) => {
  selectedCompany.value = company;
  showInfo('Empresa seleccionada', `Has seleccionado ${company.name}`);
};

const getCompanyPayments = (companyId) => {
  return payments.value.filter(payment => payment.companyId === companyId);
};

const getStatusBadgeClass = (status) => {
  const baseClasses = 'badge rounded-pill';
  switch (status) {
    case 'Pagado':
    case 'Liquidado':
      return `${baseClasses} bg-success`;
    case 'Pendiente':
      return `${baseClasses} bg-danger`;
    case 'Abono':
      return `${baseClasses} bg-warning`;
    default:
      return baseClasses;
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX');
};

const truncateText = (text, maxLength) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const openPaymentForm = () => {
  if (!selectedCompany.value) {
    showWarning('Selecciona una empresa', 'Debes seleccionar una empresa antes de crear un pago');
    return;
  }
  showCreatePaymentModal.value = true;
};

const saveNewPayment = (paymentData) => {
  // Agregar el pago a la lista
  payments.value.push(paymentData);
  showCreatePaymentModal.value = false;
  showSuccess('Pago creado', `El pago para ${paymentData.userName} ha sido creado exitosamente`);
};

const viewPayment = (payment) => {
  selectedPayment.value = payment;
  showPaymentDetailModal.value = true;
};

const editPayment = (payment) => {
  selectedPayment.value = payment;
  showPaymentEditModal.value = true;
};

const openEditPaymentModal = (payment) => {
  showPaymentDetailModal.value = false;
  selectedPayment.value = payment;
  showPaymentEditModal.value = true;
};

const savePaymentEdit = (updatedPayment) => {
  const index = payments.value.findIndex(p => p.id === updatedPayment.id);
  if (index !== -1) {
    payments.value[index] = { ...payments.value[index], ...updatedPayment };
    showSuccess('Pago actualizado', 'Los cambios han sido guardados exitosamente');
  }
  showPaymentEditModal.value = false;
  selectedPayment.value = null;
};
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

.admin-card-header {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
}

.company-list {
  max-height: 500px;
  overflow-y: auto;
}

.company-item {
  padding: 0;
  border-bottom: 1px solid #e9ecef;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.company-item:hover {
  background-color: #f8f9fa;
}

.company-item.active {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
}

.company-content {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  gap: 1rem;
}

.company-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  font-size: 1.25rem;
}

.company-item.active .company-avatar {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.company-info {
  flex: 1;
}

.company-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.company-client {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 0.25rem;
}

.company-stats {
  font-size: 0.75rem;
  opacity: 0.7;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #28a745;
}

.empty-selection {
  background: #f8f9fa;
}

.plan-info,
.user-info {
  display: flex;
  align-items: center;
}

.notes-cell {
  max-width: 150px;
  overflow: hidden;
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
  
  .company-list {
    max-height: 300px;
  }
}
</style>