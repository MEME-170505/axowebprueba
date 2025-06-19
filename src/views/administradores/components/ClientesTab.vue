<template>
  <div class="clientes-tab fade-in">
    <!-- Search and Filter Section -->
    <div class="search-container">
      <div class="row g-3">
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text bg-light border-0">
              <i class="bi bi-search text-coral"></i>
            </span>
            <input 
              type="text" 
              class="form-control search-input border-0" 
              placeholder="Buscar cliente..."
              v-model="searchQuery"
            >
          </div>
        </div>
        <div class="col-md-6">
          <select 
            class="form-select search-input border-0"
            v-model="statusFilter"
          >
            <option value="">Todos los estados</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Clients Table -->
    <div class="admin-table">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Plan del Cliente</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, index) in filteredClients" :key="index" class="slide-up">
            <td>
              <input 
                type="text" 
                class="admin-form-control"
                v-model="client.name"
              >
            </td>
            <td>
              <input 
                type="text" 
                class="admin-form-control"
                v-model="client.plan"
              >
            </td>
            <td>
              <input 
                type="date" 
                class="admin-form-control"
                v-model="client.startDate"
              >
            </td>
            <td>
              <input 
                type="date" 
                class="admin-form-control"
                v-model="client.endDate"
              >
            </td>
            <td>
              <select 
                class="form-select admin-form-control"
                v-model="client.status"
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </td>
            <td>
              <button class="admin-btn admin-btn-primary" @click="saveClient(client)">
                <i class="bi bi-save me-1"></i>
                Guardar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAlert } from '../../../composables/useAlert';

const { showSuccess } = useAlert();

const searchQuery = ref('');
const statusFilter = ref('');

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

const saveClient = (client) => {
  console.log('Guardando cliente:', client);
  showSuccess('Cliente guardado', `Los datos de ${client.name} han sido actualizados`);
};
</script>