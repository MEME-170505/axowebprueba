<template>
<div>
  <!-- Hero Section -->
<section class="hero-section">
  <div class="container-fluid px-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center animate__animated animate__fadeInLeft">
        <div class="logo-container">
          <img
            src="https://i.pinimg.com/736x/88/4a/8e/884a8ed8ebfa49841a40ab82b1b70965.jpg"
            alt="AxoWeb Logo"
            class="img-fluid hero-logo"
          />
          <p class="mt-2 text-muted">Asociados con Bufin Del Norte</p>
          <hr class="divider" />

          <!-- 👇 Rubor con blur más notable -->
          <div class="hero-banner blur-blush">
            <h2 class="text-white mb-0">
              Apoyamos a crear tu negocio digital y a impulsar su crecimiento
            </h2>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

  <!-- Services Section -->
  <section class="services-section">
    <div class="container">
      <div class="text-center">
        <h3 class="section-title">Nuestros Servicios</h3>
        <div class="title-underline"></div>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-lg-10 mb-4"
        >
          <div class="service-row">
            <div
              class="service-icon-container"
              :style="{ backgroundColor: service.color }"
            >
              <i :class="`bi ${service.icon} service-icon`"></i>
              <span class="service-title">{{ service.shortTitle }}</span>
            </div>
            <div class="service-description">
              <p class="service-text">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Belief Section -->
  <section class="belief-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <img
            src="https://i.pinimg.com/736x/ac/52/ea/ac52eab99e212a99c3412b4f44b2633c.jpg"
            alt="Digital Business"
            class="img-fluid belief-image"
          />
        </div>
        <div class="col-lg-7 text-center text-lg-start">
          <h2 class="belief-title">CREEMOS TU NEGOCIO DIGITAL</h2>
          <a href="/servicios" class="belief-button">
            Ver Nuestros Planes <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="projects-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title">Nuestros proyectos con empresas</h2>
        <div class="title-underline"></div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-md-4 col-sm-6 mb-4"
          v-for="(client, index) in clients"
          :key="index"
        >
          <div class="project-card">
            <div class="project-card-inner">
              <div class="project-card-front">
                <img
                  :src="client.logo"
                  :alt="client.name"
                  class="project-logo"
                />
              </div>
              <div class="project-card-back">
                <h5>{{ client.name }}</h5>
                <p>{{ client.description }}</p>
                <a :href="client.link" target="_blank" class="project-link">
                  Visitar sitio <i class="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import { ref } from 'vue';

const clients = ref([
{
  name: 'Bufin del Norte',
  logo: 'https://i.pinimg.com/736x/13/fb/65/13fb65def9e21e143aff6967029fd394.jpg',
  description: 'Consultora en comercio exterior y auditoría aduanera.',
  link: 'https://bufindelnorte.com.mx',
},
{
  name: 'electrocopy',
  logo: 'https://i.pinimg.com/736x/5a/33/af/5a33afa816f0be382c805982569c0cd8.jpg',
  description: 'electrónica para facilitar importaciones y exportaciones.',
  link: 'https://massbyte.mx',
},
{
  name: 'Dai',
  logo: 'https://i.pinimg.com/736x/33/f7/57/33f7578274c53bf6980a46b7a7e5c816.jpg',
  description: 'Despacho aduanal para facilitar importaciones y exportaciones.',
  link: 'https://dai.mx',
},
]);

const services = ref([
{
  icon: 'bi-laptop',
  shortTitle: 'Desarrollo Web',
  description: 'Desarrollo de tu página y tu negocio dentro del mundo digital.',
  color: '#f76c5e',
},
{
  icon: 'bi-envelope-paper-heart',
  shortTitle: 'Email Marketing',
  description: 'Correos electrónicos que venden, sustentados con una estrategia orientada a resultados.',
  color: '#8857e2',
},
{
  icon: 'bi-palette2',
  shortTitle: 'Diseño UX/UI',
  description: 'Diseñamos el concepto de tu tienda en línea para programarla a la medida.',
  color: '#0d6efd',
},
{
  icon: 'bi-megaphone-fill',
  shortTitle: 'Publicidad digital',
  description: 'Implementación de publicidad creativa en redes sociales y Google.',
  color: '#0dcaf0',
},
{
  icon: 'bi-robot',
  shortTitle: 'Automatización',
  description: 'Implementación de Servicio de Automatización a tus tareas más comunes dentro de tu empresa.',
  color: '#ffc107',
},
]);
</script>