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
    <TablaClientes
      :clientes-filtrados="clientesFiltrados"
      @save="saveClient"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useClientesStore } from '../../../stores/clientes'
import TablaClientes from '../../../components/admin/TablaClientes.vue'
import { useAlert } from '../../../composables/useAlert'

const { showSuccess } = useAlert()

const clientesStore = useClientesStore()
const searchQuery = ref('')
const statusFilter = ref('')

const clientesFiltrados = computed(() => {
  return clientesStore.clientes.filter(cliente => {
    const matchesSearch = cliente.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         cliente.plan.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = !statusFilter.value || cliente.status === statusFilter.value
    return matchesSearch && matchesStatus
  })
})

const saveClient = (cliente) => {
  clientesStore.actualizarCliente(cliente.id, cliente)
  showSuccess('Cliente guardado', `Los datos de ${cliente.name} han sido actualizados`)
}
</script>

<style scoped>
.search-container {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.search-input {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  padding: 12px 20px;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--primary-coral);
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.15);
  background: white;
}
</style>