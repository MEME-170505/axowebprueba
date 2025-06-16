<template>
  <div class="container py-5 animate__animated animate__fadeIn">
    <div class="text-center mb-5">
      <div class="user-icon mb-3">
        <i class="bi bi-people-fill fs-1"></i>
      </div>
      <h2 class="fw-bold">Nombre De Usuario</h2>
    </div>

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
</template>

<script setup>
import { ref, reactive } from 'vue';

const isEditing = ref(false);
const userData = reactive({
  nombre: 'Mario',
  apellido: 'González',
  telefono: '123-456-7890',
  email: 'mario@ejemplo.com',
  empresa: 'Empresa S.A. de C.V.'
});

const toggleEdit = () => {
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
};

const saveData = () => {
  isEditing.value = false;
  // Aquí iría la lógica para guardar los datos
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

.form-control:disabled {
  background-color: #f8f9fa;
  opacity: 0.8;
}

.form-control:focus {
  border-color: #e94f37;
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.25);
}
</style>