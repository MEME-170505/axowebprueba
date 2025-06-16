<template>
<div>
  <!-- PLANES -->
  <section class="plans-section py-5">
    <div class="container">
      <h1 class="section-title text-center mb-5 animate__animated animate__fadeIn">NUESTROS PLANES</h1>
      <div class="row g-4 justify-content-center">
        <div
          v-for="(plan, index) in planes"
          :key="index"
          class="col-lg-4 col-md-6 animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="card h-100 rounded-4 shadow-sm text-center">
            <div class="card-body">
              <img
                v-if="plan.img"
                :src="plan.img"
                :alt="plan.nombre"
                class="img-fluid rounded mb-3"
                style="max-height: 150px;"
              />
              <div
                v-else
                class="magic-wand-icon bg-gold text-white mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle"
              >
                <i class="bi bi-stars fs-2"></i>
              </div>
              <h3 class="mb-3">{{ plan.nombre }}</h3>
              <ul v-if="plan.detalles" class="list-unstyled text-start" v-html="plan.detalles"></ul>
              <p v-else class="text-muted">{{ plan.descripcion }}</p>
              <h4 class="fw-bold mt-3">{{ plan.precio }}</h4>
              <p class="text-muted">{{ plan.subinfo }}</p>
              <a href="#" class="btn btn-primary px-4 mt-2 rounded-pill">Solicitar mi plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICIOS INDIVIDUALES -->
  <section class="individual-services py-5 bg-light">
    <div class="container">
      <h2 class="section-title text-center mb-5">SERVICIOS INDIVIDUALES</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(service, index) in services" :key="index">
          <div class="card h-100 service-card rounded-4 shadow-sm">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div
                  :class="`service-icon text-white p-3 rounded d-flex align-items-center justify-content-center ${service.color}`"
                >
                  <i :class="`${service.icon} fs-3`"></i>
                </div>
                <h5 class="fw-bold">{{ service.price }}</h5>
              </div>
              <h4>{{ service.title }}</h4>
              <p class="text-muted">{{ service.description }}</p>
              <div class="text-center mt-3">
                <a href="#" class="btn btn-sm btn-primary px-4 rounded-pill">Solicitar</a>
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
const planes = [
{
  nombre: "Huevo",
  img: "https://i.pinimg.com/736x/42/0b/89/420b893aae646c2488bc67fb406421bc.jpg",
  detalles: `
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Diseño UI/UX</li>
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>5 Página Web</li>
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Correo Empresarial (50 correos)</li>
    <hr>
  `,
  precio: "$15,000 MXM",
  subinfo: "Pago único mensual"
},
{
  nombre: "Ajolote",
  img: "https://i.pinimg.com/736x/f2/7f/2f/f27f2f084c6428348baae8ccb631e75f.jpg",
  detalles: `
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Diseño UI/UX</li>
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Página Web</li>
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Correo Empresarial</li>
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Marketing Digital (especializado o automatizado)</li>
    
    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Automatizaciones</li>
  <hr>
    `,
  precio: "$25,000 MXM",
  subinfo: "Pago único mensual"
  
},
{
  nombre: "ALEBRIJE (Personalizado)",
  img: "",
  descripcion: "Desarrollo completo de la paguina (solicitar cita definir los parametros del usuario que necesita)",
  
  precio: "Se define con el cliente" 
  ,
  subinfo: "Según necesidades"
}

]

const services = [
{
  title: "Desarrollo de Ecommerce",
  description: "Desarrollo de tu página y tu negocio dentro del mundo digital",
  price: "$8000 MXM",
  icon: "bi bi-display",
  color: "bg-coral"
},
{
  title: "Servicio de automatización",
  description: "Plan para automatizar tareas y flujos de trabajo.",
  price: "$8000 MXM",
  icon: "bi bi-robot",
  color: "bg-coral"
},
{
  title: "Email Marketing",
  description: "Correos electrónicos estratégicos y efectivos.",
  price: "$5000 MXM",
  icon: "bi bi-envelope",
  color: "bg-purple"
},
{
  title: "Diseño de UI/UX",
  description: "Diseño de interfaces atractivas y funcionales.",
  price: "$8000 MXM",
  icon: "bi bi-pencil",
  color: "bg-info"
},
{
  title: "Marketing digital",
  description: "Campañas digitales para potenciar tu marca.",
  price: "$8000 MXM",
  icon: "bi bi-megaphone",
  color: "bg-warning"
}
]
</script>

<style scoped>
.section-title {
font-weight: bold;
font-size: 2rem;
}

.service-icon {
width: 60px;
height: 60px;
}

.bg-coral {
background-color: #f28482;
}

.bg-purple {
background-color: #8857e2;
}

.bg-gold {
background-color: #f9c74f;
}

.magic-wand-icon {
width: 60px;
height: 60px;
box-shadow: 0 0 10px #f9c74f;
}
</style>
