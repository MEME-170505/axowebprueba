import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAdministradoresStore = defineStore('administradores', () => {
  const administradores = ref([
    {
      id: 1,
      nombre: 'Admin',
      apellido: 'Principal',
      telefono: '555-0001',
      email: 'admin@axoweb.com',
      fechaCreacion: '2024-01-01'
    }
  ])

  const agregarAdministrador = (admin) => {
    administradores.value.push({
      id: Date.now(),
      ...admin,
      fechaCreacion: new Date().toISOString().split('T')[0]
    })
  }

  const eliminarAdministrador = (id) => {
    const index = administradores.value.findIndex(admin => admin.id === id)
    if (index !== -1) {
      administradores.value.splice(index, 1)
    }
  }

  return {
    administradores,
    agregarAdministrador,
    eliminarAdministrador
  }
})