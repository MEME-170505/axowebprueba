<template>
  <span :class="badgeClasses">
    {{ status }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'normal' // normal, small, large
  }
})

const badgeClasses = computed(() => {
  const baseClasses = 'badge rounded-pill'
  let statusClass = ''
  let sizeClass = ''

  // Status classes
  switch (props.status.toLowerCase()) {
    case 'pagado':
    case 'liquidado':
    case 'activo':
      statusClass = 'bg-success'
      break
    case 'pendiente':
      statusClass = 'bg-danger'
      break
    case 'abono':
    case 'por vencer':
      statusClass = 'bg-warning'
      break
    case 'vencido':
    case 'inactivo':
      statusClass = 'bg-secondary'
      break
    default:
      statusClass = 'bg-primary'
  }

  // Size classes
  switch (props.size) {
    case 'small':
      sizeClass = 'fs-7'
      break
    case 'large':
      sizeClass = 'fs-5 px-3 py-2'
      break
    default:
      sizeClass = 'fs-6 px-3 py-2'
  }

  return `${baseClasses} ${statusClass} ${sizeClass}`
})
</script>