<template>
  <div class="admin-card h-100">
    <div class="admin-card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0 fw-bold text-white">
          <i class="bi bi-building me-2"></i>
          Empresas
        </h5>
        <span class="badge bg-white text-coral">{{ empresasFiltradas.length }}</span>
      </div>
    </div>
    <div class="card-body p-0">
      <!-- Search Bar -->
      <div class="search-container p-3 border-bottom">
        <div class="input-group">
          <span class="input-group-text bg-light border-0">
            <i class="bi bi-search text-muted"></i>
          </span>
          <input 
            type="text" 
            class="form-control border-0 bg-light" 
            placeholder="Buscar empresa o cliente..."
            v-model="searchQuery"
          >
        </div>
      </div>
      
      <!-- Companies List -->
      <div class="company-list">
        <EmpresaItem
          v-for="empresa in empresasFiltradas"
          :key="empresa.id"
          :empresa="empresa"
          :is-selected="selectedEmpresa?.id === empresa.id"
          :pago-count="obtenerContadorPagos(empresa.id)"
          @select="$emit('select', empresa)"
        />
        
        <div v-if="empresasFiltradas.length === 0" class="empty-state p-4 text-center">
          <i class="bi bi-search text-muted fs-1 mb-3"></i>
          <p class="text-muted mb-0">No se encontraron empresas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEmpresasStore } from '../../stores/empresas'
import { usePagosStore } from '../../stores/pagos'
import EmpresaItem from './EmpresaItem.vue'

const props = defineProps({
  selectedEmpresa: {
    type: Object,
    default: null
  }
})

defineEmits(['select'])

const empresasStore = useEmpresasStore()
const pagosStore = usePagosStore()

const searchQuery = ref('')

const empresasFiltradas = computed(() => {
  return empresasStore.empresas.filter(empresa => {
    return empresa.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           empresa.client.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

const obtenerContadorPagos = (empresaId) => {
  return pagosStore.obtenerPagosPorEmpresa(empresaId).length
}
</script>

<style scoped>
.admin-card-header {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
}

.company-list {
  max-height: 500px;
  overflow-y: auto;
}
</style>