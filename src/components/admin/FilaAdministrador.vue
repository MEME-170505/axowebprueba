<template>
  <tr class="slide-up">
    <td>
      <div class="d-flex align-items-center">
        <div class="admin-avatar me-3">
          <i class="bi bi-person-circle"></i>
        </div>
        <strong>{{ administrador.nombre }}</strong>
      </div>
    </td>
    <td>{{ administrador.apellido }}</td>
    <td>
      <span class="text-muted">
        <i class="bi bi-telephone me-1"></i>
        {{ administrador.telefono }}
      </span>
    </td>
    <td>
      <span class="text-muted">
        <i class="bi bi-envelope me-1"></i>
        {{ administrador.email }}
      </span>
    </td>
    <td>
      <span class="text-muted">{{ formatDate(administrador.fechaCreacion) }}</span>
    </td>
    <td>
      <div class="d-flex gap-2">
        <button class="admin-btn admin-btn-outline btn-sm" @click="$emit('edit', administrador)">
          <i class="bi bi-pencil me-1"></i>
          Editar
        </button>
        <button class="admin-btn admin-btn-danger btn-sm" @click="$emit('delete', administrador)">
          <i class="bi bi-trash me-1"></i>
          Eliminar
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  administrador: {
    type: Object,
    required: true
  }
})

defineEmits(['edit', 'delete'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-MX')
}
</script>

<style scoped>
.admin-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
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

.admin-btn-outline {
  background: transparent;
  color: var(--primary-coral);
  border-color: var(--primary-coral);
}

.admin-btn-outline:hover {
  background: var(--primary-coral);
  color: white;
}

.admin-btn-danger {
  background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%);
  color: white;
  border-color: #dc3545;
}
</style>