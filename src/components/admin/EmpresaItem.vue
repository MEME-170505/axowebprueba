<template>
  <div 
    class="company-item"
    :class="{ 'active': isSelected }"
    @click="$emit('select', empresa)"
  >
    <div class="company-content">
      <div class="company-avatar">
        <i class="bi bi-building-fill"></i>
      </div>
      <div class="company-info">
        <div class="company-name">{{ empresa.name }}</div>
        <div class="company-client">
          <i class="bi bi-person-circle me-1"></i>
          {{ empresa.client }}
        </div>
        <div class="company-stats">
          <span class="stat-item">
            <i class="bi bi-credit-card me-1"></i>
            {{ pagoCount }} pagos
          </span>
        </div>
      </div>
      <div class="company-status">
        <div class="status-indicator active"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  empresa: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  pagoCount: {
    type: Number,
    default: 0
  }
})

defineEmits(['select'])
</script>

<style scoped>
.company-item {
  padding: 0;
  border-bottom: 1px solid #e9ecef;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.company-item:hover {
  background-color: #f8f9fa;
}

.company-item.active {
  background: linear-gradient(135deg, var(--primary-coral) 0%, #d73c26 100%);
  color: white;
}

.company-content {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  gap: 1rem;
}

.company-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  font-size: 1.25rem;
}

.company-item.active .company-avatar {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.company-info {
  flex: 1;
}

.company-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.company-client {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 0.25rem;
}

.company-stats {
  font-size: 0.75rem;
  opacity: 0.7;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #28a745;
}
</style>