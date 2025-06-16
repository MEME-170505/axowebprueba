<template>
  <div class="marketing-page">
    <!-- Hero Section -->
    <div class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold mb-4 animate__animated animate__fadeIn">Marketing Digital</h1>
        <p class="lead mb-5 animate__animated animate__fadeIn">Aumenta tus Ventas Mediante tu Marketing Digital</p>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p class="mb-5 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
              Realizamos estrategias de marketing digital centrados en entregar resultados a nuestros clientes
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="services-grid py-5">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeIn">
          Nuestros Servicios de Marketing
        </h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(service, index) in services" :key="index">
            <div class="service-card animate__animated animate__fadeInUp"
                 :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="service-icon-wrapper">
                <i :class="service.icon + ' service-icon'"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Solutions Section -->
    <div class="solutions-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeIn">
          Soluciones de marketing a la medida de tu negocio
        </h2>
        
        <div class="row align-items-center mb-5 animate__animated animate__fadeInLeft">
          <div class="col-md-6">
            <div class="solution-image-container">
              <img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                   alt="Marketing Automatizado" 
                   class="img-fluid rounded-4 shadow">
            </div>
          </div>
          <div class="col-md-6">
            <div class="solution-content">
              <h3 class="mb-3">Marketing automatizado</h3>
              <p>Automatizamos tus publicaciones en redes sociales y otros canales digitales para mantener una presencia constante. Programamos contenido relevante y atractivo y ahora tienes tus redes sociales constantemente en movimiento.</p>
              <ul class="solution-benefits">
                <li><i class="bi bi-check-circle-fill"></i> Publicaciones programadas</li>
                <li><i class="bi bi-check-circle-fill"></i> Respuestas automáticas</li>
                <li><i class="bi bi-check-circle-fill"></i> Seguimiento de leads</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="row align-items-center animate__animated animate__fadeInRight">
          <div class="col-md-6 order-md-2">
            <div class="solution-image-container">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                   alt="Marketing Especializado" 
                   class="img-fluid rounded-4 shadow">
            </div>
          </div>
          <div class="col-md-6">
            <div class="solution-content">
              <h3 class="mb-3">Marketing especializado</h3>
              <p>Diseñamos estrategias de marketing personalizadas adaptadas a tu industria y objetivos. Desde estrategias de contenido hasta campañas de conversión, todo orientado a resultados medibles y rentables.</p>
              <ul class="solution-benefits">
                <li><i class="bi bi-check-circle-fill"></i> Estrategias personalizadas</li>
                <li><i class="bi bi-check-circle-fill"></i> Análisis de competencia</li>
                <li><i class="bi bi-check-circle-fill"></i> ROI medible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <div class="process-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeIn">
          Nuestro proceso de trabajo
        </h2>
        <div class="row g-4">
          <div class="col-md-3" v-for="(step, index) in processSteps" :key="index">
            <div class="process-step animate__animated animate__fadeInUp"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-icon">
                <i :class="step.icon"></i>
              </div>
              <h5>{{ step.title }}</h5>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeIn">
          Resultados que hablan por sí solos
        </h2>
        <div class="row g-4">
          <div class="col-md-3" v-for="(stat, index) in stats" :key="index">
            <div class="stat-card animate__animated animate__fadeInUp"
                 :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="stat-icon">
                <i :class="stat.icon"></i>
              </div>
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="pricing-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeIn">
          Planes de Marketing Digital
        </h2>
        <div class="row g-4 justify-content-center">
          <div class="col-md-4" v-for="(plan, index) in pricingPlans" :key="index">
            <div class="pricing-card animate__animated animate__fadeInUp"
                 :style="{ animationDelay: `${index * 0.2}s` }"
                 :class="{ 'featured': plan.featured }">
              <div class="pricing-header">
                <h3>{{ plan.name }}</h3>
                <div class="price">{{ plan.price }}</div>
                <p class="price-description">{{ plan.description }}</p>
              </div>
              <ul class="features-list">
                <li v-for="feature in plan.features" :key="feature">
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>
              <button class="btn btn-primary w-100 mt-3">Solicitar Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section py-5">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4 animate__animated animate__fadeIn">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p class="mb-4 animate__animated animate__fadeIn">
              Comienza hoy con una estrategia de marketing digital que genere resultados reales
            </p>
            <div class="cta-buttons animate__animated animate__fadeInUp">
              <router-link to="/contactanos" class="btn btn-primary btn-lg me-3">
                Solicitar Consulta Gratuita
              </router-link>
              <router-link to="/servicios" class="btn btn-outline-primary btn-lg">
                Ver Todos los Servicios
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    icon: 'bi bi-phone',
    title: 'Operación de Redes Sociales',
    description: 'Manejamos tus redes, el contenido y la presencia digital de tu marca'
  },
  {
    icon: 'bi bi-people',
    title: 'Community Management',
    description: 'Administración y crecimiento de tu comunidad en línea'
  },
  {
    icon: 'bi bi-graph-up',
    title: 'Posicionamiento Web',
    description: 'SEO y estrategias para mejorar tu visibilidad en buscadores'
  },
  {
    icon: 'bi bi-envelope',
    title: 'Email Marketing',
    description: 'Campañas efectivas de correo electrónico que convierten'
  },
  {
    icon: 'bi bi-globe',
    title: 'Campañas de Marketing',
    description: 'Estrategias publicitarias en Google Ads y Facebook Ads'
  },
  {
    icon: 'bi bi-pencil',
    title: 'Diseño Gráfico',
    description: 'Diseño profesional para todo tu contenido digital'
  }
];

const processSteps = [
  {
    icon: 'bi bi-search',
    title: 'Análisis',
    description: 'Estudiamos tu mercado, competencia y audiencia objetivo'
  },
  {
    icon: 'bi bi-lightbulb',
    title: 'Estrategia',
    description: 'Desarrollamos un plan personalizado para tus objetivos'
  },
  {
    icon: 'bi bi-play-circle',
    title: 'Ejecución',
    description: 'Implementamos las campañas y estrategias definidas'
  },
  {
    icon: 'bi bi-bar-chart',
    title: 'Optimización',
    description: 'Monitoreamos y optimizamos para mejores resultados'
  }
];

const stats = [
  {
    icon: 'bi bi-people-fill',
    number: '500+',
    label: 'Clientes Satisfechos'
  },
  {
    icon: 'bi bi-graph-up-arrow',
    number: '150%',
    label: 'Aumento Promedio en Ventas'
  },
  {
    icon: 'bi bi-award',
    number: '98%',
    label: 'Tasa de Satisfacción'
  },
  {
    icon: 'bi bi-clock',
    number: '24/7',
    label: 'Soporte Disponible'
  }
];

const pricingPlans = [
  {
    name: 'Básico',
    price: '$8,000',
    description: 'Ideal para emprendedores',
    features: [
      'Gestión de 2 redes sociales',
      '12 publicaciones mensuales',
      'Diseño básico de contenido',
      'Reportes mensuales',
      'Soporte por email'
    ]
  },
  {
    name: 'Profesional',
    price: '$15,000',
    description: 'Para negocios en crecimiento',
    featured: true,
    features: [
      'Gestión de 4 redes sociales',
      '20 publicaciones mensuales',
      'Diseño profesional de contenido',
      'Campañas publicitarias básicas',
      'Reportes semanales',
      'Soporte prioritario'
    ]
  },
  {
    name: 'Empresarial',
    price: 'Cotización',
    description: 'Solución completa',
    features: [
      'Gestión ilimitada de redes',
      'Contenido ilimitado',
      'Campañas publicitarias avanzadas',
      'Community management',
      'Reportes personalizados',
      'Consultor dedicado'
    ]
  }
];
</script>

<style scoped>
.marketing-page {
  background-color: var(--primary-beige);
}

.hero-section {
   background: linear-gradient(135deg, rgba(233, 79, 55, 0.9) 0%, rgba(249, 162, 108, 0.9) 100%);
  color: white;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
  opacity: 0.5;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-coral);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(233, 79, 55, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  background: var(--primary-coral);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--primary-coral);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  color: white;
  transform: scale(1.1);
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--primary-blue);
}

.service-card p {
  color: #666;
  margin: 0;
}

.solution-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);
}

.solution-image-container img {
  transition: transform 0.5s ease;
}

.solution-image-container:hover img {
  transform: scale(1.05);
}

.solution-content {
  padding: 2rem;
}

.solution-content h3 {
  color: var(--primary-coral);
  font-weight: bold;
}

.solution-benefits {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.solution-benefits li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
}

.solution-benefits i {
  color: var(--primary-coral);
  margin-right: 0.5rem;
}

.process-step {
  text-align: center;
  position: relative;
  padding: 2rem 1rem;
}

.step-number {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: var(--primary-coral);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.step-icon {
  margin: 2rem 0 1rem;
}

.step-icon i {
  font-size: 3rem;
  color: var(--primary-blue);
}

.process-step h5 {
  color: var(--primary-coral);
  margin-bottom: 1rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.stat-icon {
  font-size: 3rem;
  color: var(--primary-coral);
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

.pricing-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pricing-card.featured {
  border: 2px solid var(--primary-coral);
  transform: scale(1.05);
}

.pricing-card.featured::before {
  content: 'Más Popular';
  position: absolute;
  top: 20px;
  right: -30px;
  background: var(--primary-coral);
  color: white;
  padding: 5px 40px;
  transform: rotate(45deg);
  font-size: 0.8rem;
  font-weight: bold;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.pricing-header h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-coral);
  margin-bottom: 0.5rem;
}

.price-description {
  color: #666;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 2rem;
}

.features-list li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
}

.features-list i {
  color: var(--primary-coral);
  margin-right: 0.5rem;
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #2a4a6b 100%);
  color: white;
}

.cta-buttons .btn {
  margin: 0.5rem;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .service-card {
    margin-bottom: 30px;
  }
  
  .solution-content {
    padding: 1rem 0;
  }
  
  .pricing-card.featured {
    transform: none;
    margin-bottom: 2rem;
  }
  
  .cta-buttons .btn {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
  }
}
</style>