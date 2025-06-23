import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePagosStore = defineStore('pagos', () => {
  const pagos = ref([
    {
      id: 1,
      companyId: 1,
      userName: 'Juan Pérez',
      planName: 'Plan Ajolote',
      services: ['Plan Ajolote', 'Marketing Digital'],
      amount: 25000,
      status: 'Pagado',
      date: '2024-01-15',
      purchaseId: 'TXN123456789',
      notes: 'Pago realizado mediante transferencia bancaria. Cliente solicita factura.'
    },
    {
      id: 2,
      companyId: 1,
      userName: 'Ana López',
      planName: 'Marketing Digital + Email Marketing',
      services: ['Marketing Digital', 'Email Marketing', 'Diseño UI/UX'],
      amount: 21000,
      status: 'Pendiente',
      date: '2024-01-20',
      purchaseId: 'TXN987654321',
      notes: 'Servicios múltiples contratados. Pendiente de confirmación de pago.'
    },
    {
      id: 3,
      companyId: 2,
      userName: 'María García',
      planName: 'Plan Huevo',
      services: ['Plan Huevo'],
      amount: 15000,
      status: 'Pagado',
      date: '2024-01-10',
      purchaseId: 'TXN456789123',
      notes: ''
    }
  ])

  const agregarPago = (pago) => {
    pagos.value.push({
      id: Date.now(),
      ...pago
    })
  }

  const actualizarPago = (id, datosPago) => {
    const index = pagos.value.findIndex(p => p.id === id)
    if (index !== -1) {
      pagos.value[index] = { ...pagos.value[index], ...datosPago }
    }
  }

  const obtenerPagosPorEmpresa = (companyId) => {
    return pagos.value.filter(pago => pago.companyId === companyId)
  }

  return {
    pagos,
    agregarPago,
    actualizarPago,
    obtenerPagosPorEmpresa
  }
})