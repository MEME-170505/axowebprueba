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
    <TablaAdministradores
      :administradores="administradoresStore.administradores"
      @edit="editAdmin"
      @delete="deleteAdmin"
    />

    <!-- Admin Modal -->
    <AdminModal 
      v-if="showAdminModal"
      @close="showAdminModal = false"
      @save="saveAdmin"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAdministradoresStore } from '../../../stores/administradores'
import AdminModal from '../../../components/modals/AdminModal.vue'
import TablaAdministradores from '../../../components/admin/TablaAdministradores.vue'
import { useAlert } from '../../../composables/useAlert'

const { showSuccess, showConfirm } = useAlert()

const administradoresStore = useAdministradoresStore()
const showAdminModal = ref(false)

const saveAdmin = (adminData) => {
  administradoresStore.agregarAdministrador(adminData)
  showSuccess('Administrador creado', `Se ha creado la cuenta para ${adminData.nombre} ${adminData.apellido}`)
}

const editAdmin = (admin) => {
  console.log('Editando administrador:', admin)
  // Implementar lógica de edición
}

const deleteAdmin = async (admin) => {
  const confirmed = await showConfirm(
    '¿Eliminar administrador?',
    `¿Estás seguro de que quieres eliminar la cuenta de ${admin.nombre} ${admin.apellido}? Esta acción no se puede deshacer.`,
    () => {
      administradoresStore.eliminarAdministrador(admin.id)
      showSuccess('Administrador eliminado', 'La cuenta ha sido eliminada exitosamente')
    },
    () => {
      // Cancelado
    }
  )
}
</script>

<style scoped>
.action-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-coral);
}

.action-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  flex-shrink: 0;
}

.action-content {
  flex: 1;
}

.action-title {
  color: var(--primary-blue);
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.action-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
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