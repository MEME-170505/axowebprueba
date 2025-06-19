<template>
  <div class="administradores-tab fade-in">
    <!-- Create Admin Card -->
    <div class="action-card mb-4">
      <div class="action-icon">
        <i class="bi bi-person-plus-fill"></i>
      </div>
      <div class="action-content">
        <h4 class="action-title">Dar de alta Administrador</h4>
        <p class="action-description">Crear una nueva cuenta de administrador con permisos completos</p>
        <button class="admin-btn admin-btn-primary" @click="showAdminModal = true">
          <i class="bi bi-plus-circle me-2"></i>
          CREAR ADMINISTRADOR
        </button>
      </div>
    </div>

    <!-- Administrators Table -->
    <div class="admin-table">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha de Creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(admin, index) in administrators" :key="index" class="slide-up">
            <td>
              <div class="d-flex align-items-center">
                <div class="admin-avatar me-3">
                  <i class="bi bi-person-circle"></i>
                </div>
                <strong>{{ admin.nombre }}</strong>
              </div>
            </td>
            <td>{{ admin.apellido }}</td>
            <td>
              <span class="text-muted">
                <i class="bi bi-telephone me-1"></i>
                {{ admin.telefono }}
              </span>
            </td>
            <td>
              <span class="text-muted">
                <i class="bi bi-envelope me-1"></i>
                {{ admin.email }}
              </span>
            </td>
            <td>
              <span class="text-muted">{{ formatDate(admin.fechaCreacion) }}</span>
            </td>
            <td>
              <div class="d-flex gap-2">
                <button class="admin-btn admin-btn-outline btn-sm" @click="editAdmin(admin)">
                  <i class="bi bi-pencil me-1"></i>
                  Editar
                </button>
                <button class="admin-btn admin-btn-danger btn-sm" @click="deleteAdmin(index)">
                  <i class="bi bi-trash me-1"></i>
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="administrators.length === 0">
            <td colspan="6" class="text-center py-4 text-muted">
              <i class="bi bi-inbox me-2"></i>
              No hay administradores registrados
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Admin Modal -->
    <AdminModal 
      v-if="showAdminModal"
      @close="showAdminModal = false"
      @save="saveAdmin"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AdminModal from '../../../components/modals/AdminModal.vue';
import { useAlert } from '../../../composables/useAlert';

const { showSuccess, showConfirm } = useAlert();

const showAdminModal = ref(false);
const administrators = ref([
  {
    nombre: 'Admin',
    apellido: 'Principal',
    telefono: '555-0001',
    email: 'admin@axoweb.com',
    fechaCreacion: '2024-01-01'
  }
]);

const saveAdmin = (adminData) => {
  const newAdmin = {
    ...adminData,
    fechaCreacion: new Date().toISOString().split('T')[0]
  };
  administrators.value.push(newAdmin);
  showSuccess('Administrador creado', `Se ha creado la cuenta para ${adminData.nombre} ${adminData.apellido}`);
};

const editAdmin = (admin) => {
  console.log('Editando administrador:', admin);
  // Implementar lógica de edición
};

const deleteAdmin = async (index) => {
  const admin = administrators.value[index];
  const confirmed = await showConfirm(
    '¿Eliminar administrador?',
    `¿Estás seguro de que quieres eliminar la cuenta de ${admin.nombre} ${admin.apellido}? Esta acción no se puede deshacer.`,
    () => {
      administrators.value.splice(index, 1);
      showSuccess('Administrador eliminado', 'La cuenta ha sido eliminada exitosamente');
    },
    () => {
      // Cancelado
    }
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX');
};
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
</style>