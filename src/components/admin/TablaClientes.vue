<template>
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
        <FilaCliente
          v-for="cliente in clientesFiltrados"
          :key="cliente.id"
          :cliente="cliente"
          @save="$emit('save', cliente)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import FilaCliente from './FilaCliente.vue'

defineProps({
  clientesFiltrados: {
    type: Array,
    required: true
  }
})

defineEmits(['save'])
</script>

<style scoped>
.admin-table {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.admin-table .table {
  margin-bottom: 0;
}

.admin-table .table thead th {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #2a4a6b 100%);
  color: white;
  border: none;
  padding: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}

.admin-table .table tbody td {
  padding: 1.25rem;
  border-color: #f1f3f4;
  vertical-align: middle;
}

.admin-table .table tbody tr {
  transition: all 0.3s ease;
}

.admin-table .table tbody tr:hover {
  background-color: #f8f9fa;
  transform: scale(1.01);
}
</style>