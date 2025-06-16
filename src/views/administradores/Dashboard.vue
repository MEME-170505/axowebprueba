<template>
<div class="container py-5 animate__animated animate__fadeIn">
  <div class="text-center mb-5">
    <div class="admin-icon mb-3">
      <i class="bi bi-shield-lock fs-1"></i>
    </div>
    <h2 class="fw-bold">Panel de Administración</h2>
  </div>

  <!-- Navigation Tabs -->
  <div class="nav-container mb-4">
    <div class="custom-nav mx-auto">
      <button 
        class="nav-button" 
        :class="{ 'active': activeTab === 'clientes' }"
        @click="activeTab = 'clientes'"
      >
        <i class="bi bi-people me-2"></i>
        Clientes
      </button>
      <button 
        class="nav-button" 
        :class="{ 'active': activeTab === 'administradores' }"
        @click="activeTab = 'administradores'"
      >
        <i class="bi bi-shield me-2"></i>
        Administradores
      </button>
      <button 
        class="nav-button" 
        :class="{ 'active': activeTab === 'servicios' }"
        @click="activeTab = 'servicios'"
      >
        <i class="bi bi-gear me-2"></i>
        Servicios
      </button>
      <button 
        class="nav-button" 
        :class="{ 'active': activeTab === 'pagos' }"
        @click="activeTab = 'pagos'"
      >
        <i class="bi bi-credit-card me-2"></i>
        Pagos
      </button>
    </div>
  </div>

  <!-- Content -->
  <div class="tab-content">
    <!-- Clientes Tab -->
    <div v-if="activeTab === 'clientes'" class="animate__animated animate__fadeIn">
      <div class="card border-0 shadow-sm">
        <div class="card-body p-4">
          <div class="row mb-4">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text bg-light border-0">
                  <i class="bi bi-search"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control border-0 bg-light" 
                  placeholder="Buscar cliente..."
                  v-model="searchQuery"
                >
              </div>
            </div>
            <div class="col-md-6">
              <select 
                class="form-select border-0 bg-light"
                v-model="statusFilter"
              >
                <option value="">Todos los estados</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Plan del cliente</th>
                  <th>Inicio</th>
                  <th>Fin</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(client, index) in filteredClients" :key="index">
                  <td>
                    <input 
                      type="text" 
                      class="form-control border-0 bg-light"
                      v-model="client.name"
                    >
                  </td>
                  <td>
                    <input 
                      type="text" 
                      class="form-control border-0 bg-light"
                      v-model="client.plan"
                    >
                  </td>
                  <td>
                    <input 
                      type="date" 
                      class="form-control border-0 bg-light"
                      v-model="client.startDate"
                    >
                  </td>
                  <td>
                    <input 
                      type="date" 
                      class="form-control border-0 bg-light"
                      v-model="client.endDate"
                    >
                  </td>
                  <td>
                    <select 
                      class="form-select border-0 bg-light"
                      v-model="client.status"
                    >
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                      <option value="pendiente">Pendiente</option>
                    </select>
                  </td>
                  <td>
                    <button class="btn btn-primary btn-sm" @click="saveClient(client)">
                      <i class="bi bi-save me-1"></i>
                      Guardar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Administradores Tab -->
    <div v-if="activeTab === 'administradores'" class="animate__animated animate__fadeIn">
      <div class="card border-0 shadow-sm hover-card mb-4">
        <div class="card-body p-4">
          <div class="d-flex align-items-center">
            <div class="admin-create-icon me-4">
              <i class="bi bi-person-plus-fill fs-1"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="mb-2">Dar de alta Administrador</h4>
              <p class="text-muted mb-0">Crear una nueva cuenta de administrador</p>
            </div>
            <button class="btn btn-primary px-4" @click="showAdminModal = true">
              <i class="bi bi-plus-circle me-2"></i>
              CREAR
            </button>
          </div>
        </div>
      </div>

      <!-- Tabla de Administradores -->
      <div class="card border-0 shadow-sm">
        <div class="card-body p-4">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(admin, index) in administrators" :key="index">
                  <td>{{ admin.nombre }}</td>
                  <td>{{ admin.apellido }}</td>
                  <td>{{ admin.telefono }}</td>
                  <td>{{ admin.email }}</td>
                  <td>
                    <button class="btn btn-danger btn-sm" @click="deleteAdmin(index)">
                      <i class="bi bi-trash me-1"></i>
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Servicios Tab -->
    <div v-if="activeTab === 'servicios'" class="animate__animated animate__fadeIn">
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card border-0 shadow-sm hover-card">
            <div class="card-body p-4">
              <div class="d-flex align-items-center">
                <div class="service-icon me-4">
                  <i class="bi bi-clipboard-plus fs-1"></i>
                </div>
                <div class="flex-grow-1">
                  <h4 class="mb-2">Crear nuevo plan</h4>
                  <p class="text-muted mb-0">Agregar un nuevo plan de servicio</p>
                </div>
                <button class="btn btn-primary px-4" @click="showPlanModal = true">
                  <i class="bi bi-plus-circle me-2"></i>
                  CREAR
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-0 shadow-sm hover-card">
            <div class="card-body p-4">
              <div class="d-flex align-items-center">
                <div class="service-icon me-4">
                  <i class="bi bi-gear-fill fs-1"></i>
                </div>
                <div class="flex-grow-1">
                  <h4 class="mb-2">Crear nuevo servicio</h4>
                  <p class="text-muted mb-0">Agregar un nuevo tipo de servicio</p>
                </div>
                <button class="btn btn-primary px-4" @click="showServiceModal = true">
                  <i class="bi bi-plus-circle me-2"></i>
                  CREAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagos Tab -->
    <div v-if="activeTab === 'pagos'" class="animate__animated animate__fadeIn">
      <div class="payments-layout">
        <!-- Companies List -->
        <div class="companies-panel">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-header bg-gradient-primary text-white border-0">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0 fw-bold">
                  <i class="bi bi-building me-2"></i>
                  Empresas
                </h5>
                <span class="badge bg-white text-primary">{{ filteredCompanies.length }}</span>
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
              
              <!-- lista de empresas-->
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

        <!-- contenidop principal-->
        <div class="main-content">
          <!-- tabla de pagos -->
          <div class="card border-0 shadow-sm h-100">
            <div class="card-header bg-light border-0">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <h5 class="mb-0">
                  <i class="bi bi-clock-history me-2"></i>
                  Historial de Pagos
                  <span v-if="selectedCompany" class="text-muted">- {{ selectedCompany.name }}</span>
                </h5>
                <button 
                  class="btn btn-primary"
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
                      <th>Plan/Servicio</th>
                      <th>Monto</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                      <th>ID Compra</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="payment in getCompanyPayments(selectedCompany.id)" :key="payment.id">
                      <td>
                        <div class="plan-info">
                          <i class="bi bi-box me-2 text-primary"></i>
                          {{ payment.planName }}
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
                      <td colspan="6" class="text-center py-4 text-muted">
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

        <!--barra de la derecha (formulario)  -->
        <div class="payment-sidebar" :class="{ 'active': showPaymentForm }">
          <div class="sidebar-content">
            <div class="sidebar-header">
              <h5 class="mb-0">
                <i class="bi bi-plus-circle me-2"></i>
                Crear Nuevo Pago
              </h5>
              <button type="button" class="btn-close" @click="closePaymentForm"></button>
            </div>

            <div class="sidebar-body">
              <!-- informacion del usuario y la empresa -->
              <div class="info-section mb-4">
                <h6 class="section-title">
                  <i class="bi bi-person me-2"></i>
                  Información del Usuario
                </h6>
                <div class="info-card">
                  <div class="mb-3">
                    <label class="form-label">Nombre del Usuario</label>
                    <input type="text" class="form-control" v-model="paymentForm.userName" placeholder="Nombre del usuario">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Fecha de contratación</label>
                    <input type="date" class="form-control" v-model="paymentForm.contractDate">
                  </div>
                </div>
              </div>

              <div class="info-section mb-4">
                <h6 class="section-title">
                  <i class="bi bi-building me-2"></i>
                  Información de la Empresa
                </h6>
                <div class="info-card">
                  <div class="mb-3">
                    <label class="form-label">Nombre de la empresa</label>
                    <input type="text" class="form-control" v-model="paymentForm.companyName" readonly>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Folio</label>
                    <input type="text" class="form-control" v-model="paymentForm.folio" placeholder="Folio">
                  </div>
                </div>
              </div>

              <!-- asignar pago -->
              <div class="info-section mb-4">
                <h6 class="section-title">
                  <i class="bi bi-currency-dollar me-2"></i>
                  Asignar Pago
                </h6>
                <div class="payment-card">
                  <div class="mb-3">
                    <label class="form-label">Monto Total</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input 
                        type="number" 
                        class="form-control" 
                        v-model="paymentForm.totalAmount"
                        placeholder="0.00"
                      >
                      <span class="input-group-text">MXN</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Abonado</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input 
                        type="number" 
                        class="form-control" 
                        v-model="paymentForm.paidAmount"
                        placeholder="0.00"
                      >
                      <span class="input-group-text">MXN</span>
                    </div>
                  </div>
                  <div class="payment-summary" v-if="paymentForm.totalAmount && paymentForm.paidAmount">
                    <div class="d-flex justify-content-between">
                      <span>Restante:</span>
                      <span class="fw-bold text-warning">
                        ${{ (paymentForm.totalAmount - paymentForm.paidAmount).toLocaleString() }} MXN
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Plan/Service Selection -->
              <div class="info-section mb-4">
                <h6 class="section-title">
                  <i class="bi bi-box me-2"></i>
                  Plan / Servicio
                </h6>
                <div class="service-card">
                  <!-- Service Type Selection -->
                  <div class="mb-3">
                    <label class="form-label">Tipo de Servicio</label>
                    <div class="btn-group w-100" role="group">
                      <input type="radio" class="btn-check" name="serviceType" id="predefined" value="predefined" v-model="serviceType">
                      <label class="btn btn-outline-primary" for="predefined">
                        <i class="bi bi-list-ul me-1"></i>
                        Predefinido
                      </label>
                      
                      <input type="radio" class="btn-check" name="serviceType" id="custom" value="custom" v-model="serviceType">
                      <label class="btn btn-outline-primary" for="custom">
                        <i class="bi bi-gear me-1"></i>
                        Personalizado
                      </label>
                    </div>
                  </div>

                  <!-- Servicios Predefinidos -->
                  <div v-if="serviceType === 'predefined'" class="mb-3">
                    <label class="form-label">Plan o Servicio</label>
                    <select class="form-select" v-model="paymentForm.planService">
                      <option value="">Seleccionar plan o servicio</option>
                      <option value="Plan Huevo">Plan Huevo - $15,000</option>
                      <option value="Plan Ajolote">Plan Ajolote - $25,000</option>
                      <option value="Plan Alebrije">Plan Alebrije - Personalizado</option>
                      <option value="Desarrollo de Ecommerce">Desarrollo de Ecommerce - $8,000</option>
                      <option value="Email Marketing">Email Marketing - $5,000</option>
                      <option value="Marketing Digital">Marketing Digital - $8,000</option>
                      <option value="Diseño UI/UX">Diseño UI/UX - $8,000</option>
                      <option value="Automatización">Automatización - $8,000</option>
                    </select>
                  </div>

                  <!-- servicio personalizado -->
                  <div v-if="serviceType === 'custom'" class="mb-3">
                    <label class="form-label">Servicios Personalizados</label>
                    <div class="custom-services-container">
                      <div class="services-grid">
                        <div 
                          v-for="service in availableServices" 
                          :key="service.id"
                          class="service-option"
                          :class="{ 'selected': selectedServices.includes(service.id) }"
                          @click="toggleService(service.id)"
                        >
                          <div class="service-checkbox">
                            <i class="bi bi-check" v-if="selectedServices.includes(service.id)"></i>
                          </div>
                          <div class="service-details">
                            <div class="service-name">{{ service.name }}</div>
                            <div class="service-price">${{ service.price.toLocaleString() }}</div>
                          </div>
                        </div>
                      </div>
                      
                      <!--  listado de servicios seleccionados -->
                      <div v-if="selectedServices.length > 0" class="selected-summary mt-3">
                        <h6 class="mb-2">Servicios Seleccionados:</h6>
                        <div class="selected-list">
                          <div 
                            v-for="serviceId in selectedServices" 
                            :key="serviceId"
                            class="selected-item"
                          >
                            <span>{{ getServiceById(serviceId).name }}</span>
                            <span class="price">${{ getServiceById(serviceId).price.toLocaleString() }}</span>
                            <button 
                              type="button" 
                              class="btn-remove"
                              @click="toggleService(serviceId)"
                            >
                              <i class="bi bi-x"></i>
                            </button>
                          </div>
                        </div>
                        <div class="total-price">
                          <strong>Total: ${{ calculateTotal().toLocaleString() }} MXN</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Cliente</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="paymentForm.client"
                      placeholder="Nombre del cliente"
                    >
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tipo de Pago</label>
                    <select class="form-select" v-model="paymentForm.paymentType">
                      <option value="">Seleccionar tipo de pago</option>
                      <option value="Completo">Completo</option>
                      <option value="Abono">Abono</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-footer">
              <button class="btn btn-outline-secondary me-2" @click="closePaymentForm">
                <i class="bi bi-x-circle me-1"></i>
                Cancelar
              </button>
              <button class="btn btn-primary" @click="createPayment">
                <i class="bi bi-plus-circle me-2"></i>
                Crear Pago
              </button>
            </div>
          </div>
        </div>

        <!-- Overlay -->
        <div class="sidebar-overlay" :class="{ 'active': showPaymentForm }" @click="closePaymentForm"></div>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <AdminModal 
    v-if="showAdminModal"
    @close="showAdminModal = false"
    @save="saveAdmin"
  />

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
import { ref, computed } from 'vue';
import AdminModal from '../../components/modals/AdminModal.vue';
import PlanModal from '../../components/modals/PlanModal.vue';
import ServiceModal from '../../components/modals/ServiceModal.vue';

const activeTab = ref('clientes');
const searchQuery = ref('');
const statusFilter = ref('');
const companySearchQuery = ref('');
const showAdminModal = ref(false);
const showPlanModal = ref(false);
const showServiceModal = ref(false);
const showPaymentForm = ref(false);
const selectedCompany = ref(null);
const administrators = ref([]);
const serviceType = ref('predefined');
const selectedServices = ref([]);

// Servicios disponibles para selección personalizada
const availableServices = ref([
  { id: 1, name: 'Desarrollo Web', price: 15000 },
  { id: 2, name: 'Diseño UI/UX', price: 8000 },
  { id: 3, name: 'Email Marketing', price: 5000 },
  { id: 4, name: 'Marketing Digital', price: 8000 },
  { id: 5, name: 'Automatización', price: 8000 },
  { id: 6, name: 'E-commerce', price: 12000 },
  { id: 7, name: 'SEO', price: 6000 },
  { id: 8, name: 'Redes Sociales', price: 4000 },
  { id: 9, name: 'Consultoría', price: 3000 },
  { id: 10, name: 'Mantenimiento', price: 2000 }
]);

// datos del formulario de pago
const paymentForm = ref({
  userName: '',
  contractDate: '',
  companyName: '',
  folio: '',
  totalAmount: 0,
  paidAmount: 0,
  planService: '',
  client: '',
  paymentType: ''
});

// datos de las empresas
const companies = ref([
  {
    id: 1,
    name: 'Electrocopy',
    client: 'Juan Pérez'
  },
  {
    id: 2,
    name: 'DAI',
    client: 'María García'
  },
  {
    id: 3,
    name: 'Bufin del Norte',
    client: 'Carlos López'
  }
]);

//Datos de los pagos
const payments = ref([
  {
    id: 1,
    companyId: 1,
    planName: 'Plan Ajolote',
    amount: 25000,
    status: 'Pagado',
    date: '2024-01-15',
    purchaseId: 'TXN123456789'
  },
  {
    id: 2,
    companyId: 1,
    planName: 'Marketing Digital',
    amount: 8000,
    status: 'Pendiente',
    date: '2024-01-20',
    purchaseId: 'TXN987654321'
  },
  {
    id: 3,
    companyId: 2,
    planName: 'Plan Huevo',
    amount: 15000,
    status: 'Pagado',
    date: '2024-01-10',
    purchaseId: 'TXN456789123'
  },
  {
    id: 4,
    companyId: 3,
    planName: 'Desarrollo de Ecommerce',
    amount: 8000,
    status: 'Liquidado',
    date: '2024-01-05',
    purchaseId: 'TXN789123456'
  }
]);

const clients = ref([
  {
    name: 'Juan Pérez',
    plan: 'Premium',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'activo'
  },
  {
    name: 'María García',
    plan: 'Básico',
    startDate: '2024-02-01',
    endDate: '2024-08-01',
    status: 'pendiente'
  },
  {
    name: 'Carlos López',
    plan: 'Profesional',
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    status: 'activo'
  }
]);

const filteredClients = computed(() => {
  return clients.value.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         client.plan.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = !statusFilter.value || client.status === statusFilter.value;
    return matchesSearch && matchesStatus;
  });
});

const filteredCompanies = computed(() => {
  return companies.value.filter(company => {
    return company.name.toLowerCase().includes(companySearchQuery.value.toLowerCase()) ||
           company.client.toLowerCase().includes(companySearchQuery.value.toLowerCase());
  });
});

const selectCompany = (company) => {
  selectedCompany.value = company;
  paymentForm.value.companyName = company.name;
  paymentForm.value.client = company.client;
};

const getCompanyPayments = (companyId) => {
  return payments.value.filter(payment => payment.companyId === companyId);
};

const getStatusBadgeClass = (status) => {
  const baseClasses = 'badge rounded-pill';
  switch (status) {
    case 'Pagado':
      return `${baseClasses} bg-success`;
    case 'Pendiente':
      return `${baseClasses} bg-warning`;
    case 'Liquidado':
      return `${baseClasses} bg-info`;
    default:
      return baseClasses;
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX');
};

const openPaymentForm = () => {
  showPaymentForm.value = true;
  resetPaymentForm();
};

const closePaymentForm = () => {
  showPaymentForm.value = false;
  resetPaymentForm();
};

const resetPaymentForm = () => {
  paymentForm.value = {
    userName: '',
    contractDate: '',
    companyName: selectedCompany.value?.name || '',
    folio: '',
    totalAmount: 0,
    paidAmount: 0,
    planService: '',
    client: selectedCompany.value?.client || '',
    paymentType: ''
  };
  serviceType.value = 'predefined';
  selectedServices.value = [];
};

const toggleService = (serviceId) => {
  const index = selectedServices.value.indexOf(serviceId);
  if (index > -1) {
    selectedServices.value.splice(index, 1);
  } else {
    selectedServices.value.push(serviceId);
  }
};

const getServiceById = (serviceId) => {
  return availableServices.value.find(service => service.id === serviceId);
};

const calculateTotal = () => {
  return selectedServices.value.reduce((total, serviceId) => {
    const service = getServiceById(serviceId);
    return total + (service ? service.price : 0);
  }, 0);
};

const createPayment = () => {
  if (!selectedCompany.value) {
    alert('Por favor selecciona una empresa');
    return;
  }

  let planName = '';
  let amount = 0;

  if (serviceType.value === 'predefined') {
    if (!paymentForm.value.planService || !paymentForm.value.totalAmount) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }
    planName = paymentForm.value.planService;
    amount = parseFloat(paymentForm.value.totalAmount);
  } else {
    if (selectedServices.value.length === 0) {
      alert('Por favor selecciona al menos un servicio personalizado');
      return;
    }
    planName = selectedServices.value.map(id => getServiceById(id).name).join(', ');
    amount = calculateTotal();
  }

  const newPayment = {
    id: payments.value.length + 1,
    companyId: selectedCompany.value.id,
    planName: planName,
    amount: amount,
    status: paymentForm.value.paymentType === 'Completo' ? 'Pagado' : 'Pendiente',
    date: new Date().toISOString().split('T')[0],
    purchaseId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase()
  };

  payments.value.push(newPayment);
  closePaymentForm();
  
  alert('Pago creado exitosamente');
};

const viewPayment = (payment) => {
  alert(`Ver detalles del pago: ${payment.planName} - $${payment.amount}`);
};

const editPayment = (payment) => {
  alert(`Editar pago: ${payment.planName}`);
};

const saveClient = (client) => {
  console.log('Guardando cliente:', client);
};

const saveAdmin = (adminData) => {
  administrators.value.push(adminData);
};

const deleteAdmin = (index) => {
  administrators.value.splice(index, 1);
};

const savePlan = (planData) => {
  window.dispatchEvent(new CustomEvent('newPlan', { detail: planData }));
};

const saveService = (serviceData) => {
  window.dispatchEvent(new CustomEvent('newService', { detail: serviceData }));
};
</script>

<style scoped>
.admin-icon {
  width: 80px;
  height: 80px;
  background-color: var(--primary-coral);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.custom-nav {
  background: white;
  border-radius: 50px;
  padding: 5px;
  display: inline-flex;
  gap: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-button {
  border: none;
  background: none;
  padding: 8px 20px;
  border-radius: 50px;
  color: var(--primary-blue);
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-button.active {
  background-color: var(--primary-coral);
  color: white;
}

.nav-button:hover:not(.active) {
  background-color: #f8f9fa;
}

.admin-create-icon,
.service-icon {
  width: 60px;
  height: 60px;
  background-color: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-coral);
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--primary-coral);
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.25);
}

.table > :not(caption) > * > * {
  padding: 1rem 0.75rem;
}

/* Payments Layout */
.payments-layout {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 1.5rem;
  position: relative;
  min-height: 600px;
}

.companies-panel {
  position: relative;
}

.main-content {
  position: relative;
}

/* Enhanced Company List Styles */
.bg-gradient-primary {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
}

.search-container {
  background: #f8f9fa;
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

.company-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: white;
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
  transition: all 0.3s ease;
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

.stat-item {
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
}

.company-status {
  display: flex;
  align-items: center;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #28a745;
}

.empty-state {
  color: #6c757d;
}

.empty-selection {
  background: #f8f9fa;
}

.empty-icon {
  font-size: 3rem;
  opacity: 0.5;
}

.plan-info {
  display: flex;
  align-items: center;
}

/* Payment Sidebar */
.payment-sidebar {
  position: fixed;
  top: 0;
  right: -600px;
  width: 600px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15);
  transition: right 0.3s ease;
  z-index: 1050;
  overflow-y: auto;
}

.payment-sidebar.active {
  right: 0;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
}

.sidebar-body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1040;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

.info-section {
  margin-bottom: 1.5rem;
}

.section-title {
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-coral);
  display: flex;
  align-items: center;
}

.info-card,
.payment-card,
.service-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e9ecef;
}

.payment-card {
  border-color: var(--primary-coral);
}

.service-card {
  border-color: var(--primary-blue);
}

.payment-summary {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #dee2e6;
}

/* Custom Services Styles */
.custom-services-container {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid #e9ecef;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.service-option {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.service-option:hover {
  border-color: var(--primary-coral);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-option.selected {
  border-color: var(--primary-coral);
  background: rgba(233, 79, 55, 0.1);
}

.service-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #dee2e6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  transition: all 0.3s ease;
}

.service-option.selected .service-checkbox {
  background: var(--primary-coral);
  border-color: var(--primary-coral);
  color: white;
}

.service-details {
  flex: 1;
}

.service-name {
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 0.25rem;
}

.service-price {
  font-size: 0.875rem;
  color: var(--primary-coral);
  font-weight: 600;
}

.selected-summary {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.selected-list {
  margin-bottom: 1rem;
}

.selected-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  border: 1px solid #e9ecef;
}

.selected-item .price {
  color: var(--primary-coral);
  font-weight: 600;
}

.btn-remove {
  background: none;
  border: none;
  color: #dc3545;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-remove:hover {
  background: #dc3545;
  color: white;
}

.total-price {
  text-align: right;
  padding-top: 0.5rem;
  border-top: 1px solid #dee2e6;
  color: var(--primary-coral);
}

@media (max-width: 1400px) {
  .payments-layout {
    grid-template-columns: 300px 1fr;
  }
  
  .payment-sidebar {
    width: 500px;
    right: -500px;
  }
}

@media (max-width: 1200px) {
  .payments-layout {
    grid-template-columns: 280px 1fr;
  }
  
  .payment-sidebar {
    width: 450px;
    right: -450px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
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
  
  .payment-sidebar {
    width: 100%;
    right: -100%;
  }
  
  .sidebar-body {
    padding: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .custom-nav {
    flex-direction: column;
    border-radius: 15px;
  }

  .nav-button {
    width: 100%;
    text-align: left;
  }
  
  .company-content {
    padding: 1rem;
  }
  
  .company-avatar {
    width: 40px;
    height: 40px;
  }
  
  .sidebar-header,
  .sidebar-footer {
    padding: 1rem;
  }
  
  .info-card,
  .payment-card,
  .service-card {
    padding: 1rem;
  }
}

@media (max-width: 576px) {
  .service-option {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .service-checkbox {
    margin-right: 0;
  }
  
  .selected-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>