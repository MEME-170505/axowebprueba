<template>
  <div class="admin-container">
    <div class="container py-5 animate__animated animate__fadeIn">
      <!-- Admin Header -->
      <div class="admin-header">
        <div class="admin-icon">
          <i class="bi bi-shield-lock fs-1"></i>
        </div>
        <h2 class="fw-bold mb-0">Panel de Administración</h2>
        <p class="mb-0 opacity-75">Gestiona clientes, administradores, servicios y pagos</p>
      </div>

      <!-- Navigation Tabs -->
      <div class="nav-container">
        <div class="custom-nav">
          <button 
            class="nav-button" 
            :class="{ 'active': activeTab === 'clientes' }"
            @click="activeTab = 'clientes'"
          >
            <i class="bi bi-people me-2"></i>
            Clientes
          </button>
          <button 
            class="nav-button" 
            :class="{ 'active': activeTab === 'administradores' }"
            @click="activeTab = 'administradores'"
          >
            <i class="bi bi-shield me-2"></i>
            Administradores
          </button>
          <button 
            class="nav-button" 
            :class="{ 'active': activeTab === 'servicios' }"
            @click="activeTab = 'servicios'"
          >
            <i class="bi bi-gear me-2"></i>
            Servicios
          </button>
          <button 
            class="nav-button" 
            :class="{ 'active': activeTab === 'pagos' }"
            @click="activeTab = 'pagos'"
          >
            <i class="bi bi-credit-card me-2"></i>
            Pagos
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <ClientesTab v-if="activeTab === 'clientes'" />
        <AdministradoresTab v-if="activeTab === 'administradores'" />
        <ServiciosTab v-if="activeTab === 'servicios'" />
        <PagosTab v-if="activeTab === 'pagos'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ClientesTab from './components/ClientesTab.vue';
import AdministradoresTab from './components/AdministradoresTab.vue';
import ServiciosTab from './components/ServiciosTab.vue';
import PagosTab from './components/PagosTab.vue';

const activeTab = ref('clientes');

</script>

<style>
@import '../../assets/estiloadmin.css';
</style>