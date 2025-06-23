<template>
  <tr class="slide-up">
    <td>
      <input 
        type="text" 
        class="admin-form-control"
        v-model="clienteLocal.name"
        @blur="guardarCambios"
      >
    </td>
    <td>
      <input 
        type="text" 
        class="admin-form-control"
        v-model="clienteLocal.plan"
        @blur="guardarCambios"
      >
    </td>
    <td>
      <input 
        type="date" 
        class="admin-form-control"
        v-model="clienteLocal.startDate"
        @blur="guardarCambios"
      >
    </td>
    <td>
      <input 
        type="date" 
        class="admin-form-control"
        v-model="clienteLocal.endDate"
        @blur="guardarCambios"
      >
    </td>
    <td>
      <select 
        class="form-select admin-form-control"
        v-model="clienteLocal.status"
        @change="guardarCambios"
      >
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
        <option value="pendiente">Pendiente</option>
      </select>
    </td>
    <td>
      <button class="admin-btn admin-btn-primary" @click="guardarCambios">
        <i class="bi bi-save me-1"></i>
        Guardar
      </button>
    </td>
  </tr>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  cliente: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['save'])

const clienteLocal = ref({ ...props.cliente })

watch(() => props.cliente, (newCliente) => {
  clienteLocal.value = { ...newCliente }
}, { deep: true })

const guardarCambios = () => {
  emit('save', clienteLocal.value)
}
</script>

<style scoped>
.admin-form-control {
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.admin-form-control:focus {
  border-color: var(--primary-coral);
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.15);
  background-color: white;
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