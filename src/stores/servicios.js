import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiciosStore = defineStore('servicios', () => {
  const planes = ref([
    {
      id: 1,
      nombre: "Huevo",
      img: "https://i.pinimg.com/736x/42/0b/89/420b893aae646c2488bc67fb406421bc.jpg",
      detalles: [
        'Diseño UI/UX',
        '5 Página Web',
        'Correo Empresarial (50 correos)'
      ],
      precio: 15000,
      precioTexto: "$15,000 MXN",
      subinfo: "Pago único mensual"
    },
    {
      id: 2,
      nombre: "Ajolote",
      img: "https://i.pinimg.com/736x/f2/7f/2f/f27f2f084c6428348baae8ccb631e75f.jpg",
      detalles: [
        'Diseño UI/UX',
        'Página Web',
        'Correo Empresarial',
        'Marketing Digital (especializado o automatizado)',
        'Automatizaciones'
      ],
      precio: 25000,
      precioTexto: "$25,000 MXN",
      subinfo: "Pago único mensual"
    },
    {
      id: 3,
      nombre: "ALEBRIJE (Personalizado)",
      img: "",
      descripcion: "Desarrollo completo de la página (solicitar cita definir los parámetros del usuario que necesita)",
      precio: 0,
      precioTexto: "Se define con el cliente",
      subinfo: "Según necesidades"
    }
  ])

  const serviciosIndividuales = ref([
    {
      id: 1,
      title: "Desarrollo de Ecommerce",
      description: "Desarrollo de tu página y tu negocio dentro del mundo digital",
      price: "$8000 MXN",
      precio: 8000,
      icon: "bi bi-display",
      color: "bg-coral"
    },
    {
      id: 2,
      title: "Servicio de automatización",
      description: "Plan para automatizar tareas y flujos de trabajo.",
      price: "$8000 MXN",
      precio: 8000,
      icon: "bi bi-robot",
      color: "bg-coral"
    },
    {
      id: 3,
      title: "Email Marketing",
      description: "Correos electrónicos estratégicos y efectivos.",
      price: "$5000 MXN",
      precio: 5000,
      icon: "bi bi-envelope",
      color: "bg-purple"
    },
    {
      id: 4,
      title: "Diseño de UI/UX",
      description: "Diseño de interfaces atractivas y funcionales.",
      price: "$8000 MXN",
      precio: 8000,
      icon: "bi bi-pencil",
      color: "bg-info"
    },
    {
      id: 5,
      title: "Marketing digital",
      description: "Campañas digitales para potenciar tu marca.",
      price: "$8000 MXN",
      precio: 8000,
      icon: "bi bi-megaphone",
      color: "bg-warning"
    }
  ])

  const agregarPlan = (plan) => {
    planes.value.push({
      id: Date.now(),
      ...plan
    })
  }

  const agregarServicio = (servicio) => {
    serviciosIndividuales.value.push({
      id: Date.now(),
      ...servicio
    })
  }

  return {
    planes,
    serviciosIndividuales,
    agregarPlan,
    agregarServicio
  }
})