<template>
  <div class="container py-5 animate__animated animate__fadeIn">
    <div class="text-center mb-5">
      <div class="user-icon mb-3">
        <i class="bi bi-people-fill fs-1"></i>
      </div>
      <h2 class="fw-bold">Nombre De Usuario</h2>
    </div>

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
</template>

<script setup>
import { ref } from 'vue';

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
]);

const getStatusClass = (estado) => {
  const baseClasses = 'badge rounded-pill';
  switch (estado) {
    case 'Activo':
      return `${baseClasses} bg-success`;
    case 'Por vencer':
      return `${baseClasses} bg-warning`;
    case 'Vencido':
      return `${baseClasses} bg-danger`;
    default:
      return baseClasses;
  }
};

const renovarPlan = (plan) => {
  // Implementar lógica de renovación
  console.log('Renovar plan:', plan.nombre);
};

const cancelarPlan = (plan) => {
  // Implementar lógica de cancelación
  console.log('Cancelar plan:', plan.nombre);
};
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