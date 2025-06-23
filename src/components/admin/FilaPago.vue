<template>
  <tr>
    <td>
      <div class="user-info">
        <i class="bi bi-person-circle me-2 text-coral"></i>
        {{ pago.userName || 'N/A' }}
      </div>
    </td>
    <td>
      <div class="plan-info">
        <i class="bi bi-box me-2 text-coral"></i>
        <div>
          <div class="fw-bold">{{ pago.planName }}</div>
          <small class="text-muted" v-if="pago.services && pago.services.length > 1">
            +{{ pago.services.length - 1 }} servicios más
          </small>
        </div>
      </div>
    </td>
    <td>
      <span class="fw-bold text-success">${{ formatCurrency(pago.amount) }}</span>
    </td>
    <td>
      <StatusBadge :status="pago.status" />
    </td>
    <td>{{ formatDate(pago.date) }}</td>
    <td>
      <code class="text-muted">{{ pago.purchaseId }}</code>
    </td>
    <td>
      <div class="notes-cell">
        <span v-if="pago.notes" class="text-muted">
          {{ truncateText(pago.notes, 30) }}
        </span>
        <span v-else class="text-muted">-</span>
      </div>
    </td>
    <td>
      <div class="btn-group btn-group-sm">
        <button class="btn btn-outline-primary" @click="$emit('view', pago)" title="Ver detalles">
          <i class="bi bi-eye"></i>
        </button>
        <button class="btn btn-outline-secondary" @click="$emit('edit', pago)" title="Editar">
          <i class="bi bi-pencil"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import StatusBadge from '../ui/StatusBadge.vue'

defineProps({
  pago: {
    type: Object,
    required: true
  }
})

defineEmits(['view', 'edit'])

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-MX').format(amount || 0)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-MX')
}

const truncateText = (text, maxLength) => {
  if (!text) return ''
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}
</script>

<style scoped>
.plan-info,
.user-info {
  display: flex;
  align-items: center;
}

.notes-cell {
  max-width: 150px;
  overflow: hidden;
}
</style>