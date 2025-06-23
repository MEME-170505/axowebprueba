<template>
  <div class="admin-table">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Fecha de Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <FilaAdministrador
          v-for="administrador in administradores"
          :key="administrador.id"
          :administrador="administrador"
          @edit="$emit('edit', administrador)"
          @delete="$emit('delete', administrador)"
        />
        <tr v-if="administradores.length === 0">
          <td colspan="6" class="text-center py-4 text-muted">
            <i class="bi bi-inbox me-2"></i>
            No hay administradores registrados
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import FilaAdministrador from './FilaAdministrador.vue'

defineProps({
  administradores: {
    type: Array,
    required: true
  }
})

defineEmits(['edit', 'delete'])
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