<template>
  <div class="container py-5 animate__animated animate__fadeIn">
    <div class="text-center mb-5">
      <div class="user-icon mb-3">
        <i class="bi bi-people-fill fs-1"></i>
      </div>
      <h2 class="fw-bold">{{ authStore.user?.name || 'Usuario' }}</h2>
    </div>

    <!-- Navigation Tabs -->
    <div class="nav-container mb-4">
      <div class="custom-nav mx-auto">
        <button 
          class="nav-button" 
          :class="{ 'active': activeTab === 'inicio' }"
          @click="activeTab = 'inicio'"
        >
          <i class="bi bi-house me-2"></i>
          Inicio
        </button>
        <button 
          class="nav-button" 
          :class="{ 'active': activeTab === 'servicios' }"
          @click="activeTab = 'servicios'"
        >
          <i class="bi bi-grid me-2"></i>
          Servicios
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="tab-content">
      <!-- Inicio Tab -->
      <div v-if="activeTab === 'inicio'" class="animate__animated animate__fadeIn">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <h4 class="card-title mb-4">Datos Personales</h4>
                
                <form @submit.prevent="saveData">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="nombre" 
                          placeholder="Nombre"
                          v-model="userData.nombre"
                          :disabled="!isEditing"
                        >
                        <label for="nombre">Nombre</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="apellido" 
                          placeholder="Apellido"
                          v-model="userData.apellido"
                          :disabled="!isEditing"
                        >
                        <label for="apellido">Apellido</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="tel" 
                          class="form-control" 
                          id="telefono" 
                          placeholder="Teléfono"
                          v-model="userData.telefono"
                          :disabled="!isEditing"
                        >
                        <label for="telefono">Teléfono</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="email" 
                          class="form-control" 
                          id="email" 
                          placeholder="Correo Electrónico"
                          v-model="userData.email"
                          :disabled="!isEditing"
                        >
                        <label for="email">Correo Electrónico</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="empresa" 
                          placeholder="Nombre de la empresa"
                          v-model="userData.empresa"
                          :disabled="!isEditing"
                        >
                        <label for="empresa">Nombre de la empresa</label>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center gap-3 mt-4">
                    <button 
                      type="button" 
                      class="btn btn-outline-primary px-4"
                      @click="toggleEdit"
                      v-if="!isEditing"
                    >
                      <i class="bi bi-pencil me-2"></i>
                      Editar
                    </button>
                    <button 
                      type="submit" 
                      class="btn btn-primary px-4"
                      v-if="isEditing"
                    >
                      <i class="bi bi-check-lg me-2"></i>
                      Guardar
                    </button>
                    <button 
                      type="button" 
                      class="btn btn-outline-secondary px-4"
                      @click="cancelEdit"
                      v-if="isEditing"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Servicios Tab -->
      <div v-if="activeTab === 'servicios'" class="animate__animated animate__fadeIn">
        <div class="table-responsive">
          <table class="table table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">Icono</th>
                <th scope="col">Nombre del Plan</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha de Vencimiento</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(plan, index) in planes" :key="index" class="animate__animated animate__fadeInUp" :style="{ animationDelay: `${index * 0.1}s` }">
                <td>
                  <div class="plan-icon">
                    <i :class="plan.icon"></i>
                  </div>
                </td>
                <td>{{ plan.nombre }}</td>
                <td>
                  <span :class="getStatusClass(plan.estado)">
                    {{ plan.estado }}
                  </span>
                </td>
                <td>{{ plan.fechaVencimiento }}</td>
                <td>
                  <div class="d-flex gap-2">
                    <button class="btn btn-primary btn-sm" @click="renovarPlan(plan)">
                      Renovar
                    </button>
                    <button class="btn btn-danger btn-sm" @click="cancelarPlan(plan)">
                      Cancelar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

// Redirect if not authenticated or not a client
onMounted(() => {
  if (!authStore.isAuthenticated || !authStore.isClient) {
    router.push('/')
  }
})

const activeTab = ref('inicio')
const isEditing = ref(false)

const userData = reactive({
  nombre: authStore.user?.name?.split(' ')[0] || 'Mario',
  apellido: authStore.user?.name?.split(' ')[1] || 'González',
  telefono: authStore.user?.phone || '123-456-7890',
  email: authStore.user?.email || 'mario@ejemplo.com',
  empresa: authStore.user?.company || 'Empresa S.A. de C.V.'
})

const planes = ref([
  {
    icon: 'bi bi-globe fs-4',
    nombre: 'Plan Web Básico',
    estado: 'Activo',
    fechaVencimiento: '13/06/2024'
  },
  {
    icon: 'bi bi-envelope fs-4',
    nombre: 'Email Marketing Pro',
    estado: 'Por vencer',
    fechaVencimiento: '28/02/2024'
  },
  {
    icon: 'bi bi-megaphone fs-4',
    nombre: 'Marketing Digital',
    estado: 'Vencido',
    fechaVencimiento: '15/01/2024'
  },
  {
    icon: 'bi bi-robot fs-4',
    nombre: 'Automatización',
    estado: 'Activo',
    fechaVencimiento: '01/12/2024'
  }
])

const toggleEdit = () => {
  isEditing.value = true
}

const cancelEdit = () => {
  isEditing.value = false
  // Reset to original values
  userData.nombre = authStore.user?.name?.split(' ')[0] || 'Mario'
  userData.apellido = authStore.user?.name?.split(' ')[1] || 'González'
  userData.telefono = authStore.user?.phone || '123-456-7890'
  userData.email = authStore.user?.email || 'mario@ejemplo.com'
  userData.empresa = authStore.user?.company || 'Empresa S.A. de C.V.'
}

const saveData = () => {
  isEditing.value = false
  // Here you would typically save to a backend
  console.log('Saving user data:', userData)
  alert('Datos guardados exitosamente')
}

const getStatusClass = (estado) => {
  const baseClasses = 'badge rounded-pill'
  switch (estado) {
    case 'Activo':
      return `${baseClasses} bg-success`
    case 'Por vencer':
      return `${baseClasses} bg-warning`
    case 'Vencido':
      return `${baseClasses} bg-danger`
    default:
      return baseClasses
  }
}

const renovarPlan = (plan) => {
  console.log('Renovar plan:', plan.nombre)
  alert(`Renovando plan: ${plan.nombre}`)
}

const cancelarPlan = (plan) => {
  if (confirm(`¿Estás seguro de que quieres cancelar el plan: ${plan.nombre}?`)) {
    console.log('Cancelar plan:', plan.nombre)
    alert(`Plan cancelado: ${plan.nombre}`)
  }
}
</script>

<style scoped>
.user-icon {
  width: 80px;
  height: 80px;
  background-color: #e94f37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.custom-nav {
  background: white;
  border-radius: 50px;
  padding: 5px;
  display: inline-flex;
  gap: 5px;
  border: 2px solid #e94f37;
}

.nav-button {
  border: none;
  background: none;
  padding: 8px 20px;
  border-radius: 50px;
  color: #e94f37;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-button.active {
  background-color: #e94f37;
  color: white;
}

.form-control:disabled {
  background-color: #f8f9fa;
  opacity: 0.8;
}

.form-control:focus {
  border-color: #e94f37;
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.25);
}

.plan-icon {
  width: 40px;
  height: 40px;
  background-color: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e94f37;
}

.badge {
  font-size: 0.875rem;
  padding: 0.5em 1em;
}

.table > :not(caption) > * > * {
  padding: 1rem 0.75rem;
}
</style>