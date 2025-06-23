import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClientesStore = defineStore('clientes', () => {
  const clientes = ref([
    {
      id: 1,
      name: 'Juan Pérez',
      plan: 'Premium',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'activo'
    },
    {
      id: 2,
      name: 'María García',
      plan: 'Básico',
      startDate: '2024-02-01',
      endDate: '2024-08-01',
      status: 'pendiente'
    },
    {
      id: 3,
      name: 'Carlos López',
      plan: 'Profesional',
      startDate: '2024-03-01',
      endDate: '2025-03-01',
      status: 'activo'
    }
  ])

  const actualizarCliente = (id, datosCliente) => {
    const index = clientes.value.findIndex(cliente => cliente.id === id)
    if (index !== -1) {
      clientes.value[index] = { ...clientes.value[index], ...datosCliente }
    }
  }

  return {
    clientes,
    actualizarCliente
  }
})