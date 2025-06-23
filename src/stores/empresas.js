import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEmpresasStore = defineStore('empresas', () => {
  const empresas = ref([
    { id: 1, name: 'Electrocopy', client: 'Juan Pérez' },
    { id: 2, name: 'DAI', client: 'María García' },
    { id: 3, name: 'Bufin del Norte', client: 'Carlos López' }
  ])

  const agregarEmpresa = (empresa) => {
    empresas.value.push({
      id: Date.now(),
      ...empresa
    })
  }

  const obtenerEmpresaPorId = (id) => {
    return empresas.value.find(empresa => empresa.id === id)
  }

  return {
    empresas,
    agregarEmpresa,
    obtenerEmpresaPorId
  }
})