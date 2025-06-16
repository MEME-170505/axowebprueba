<template>
  <div class="ecommerce-page">
    <div class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold mb-4 animate__animated animate__fadeIn">E-Commerce</h1>
        <p class="lead mb-5 animate__animated animate__fadeIn">Creamos tu negocio</p>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
              Crearemos tu sueño en digital
            </h2>
            <p class="mb-5 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
              Hacemos las mejores negocios para ti
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section py-5">
      <div class="container">
        <div class="row align-items-center mb-5 animate__animated animate__fadeInLeft">
          <div class="col-md-6">
            <div class="feature-icon-container">
              <i class="bi bi-cart-check display-1"></i>
            </div>
          </div>
          <div class="col-md-6">
            <div class="feature-content">
              <h3 class="mb-4">Creamos tiendas en línea increíbles</h3>
              <p>Listas para ayudarte a vender desde el primer día. Desde proyectos simples hasta plataformas robustas con funcionalidades avanzadas, desarrollamos soluciones eCommerce adaptadas a cualquier tipo de negocio.</p>
            </div>
          </div>
        </div>

        <div class="row align-items-center mb-5 animate__animated animate__fadeInRight">
          <div class="col-md-6 order-md-2">
            <div class="feature-icon-container">
              <i class="bi bi-bullseye display-1"></i>
            </div>
          </div>
          <div class="col-md-6">
            <div class="feature-content">
              <h3 class="mb-4">Tu tienda será:</h3>
              <ul class="feature-list">
                <li class="animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
                  <i class="bi bi-check-circle-fill me-2"></i>Visualmente impactante
                </li>
                <li class="animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
                  <i class="bi bi-check-circle-fill me-2"></i>Fácil de administrar
                </li>
                <li class="animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
                  <i class="bi bi-check-circle-fill me-2"></i>Escalable para vender cientos o miles de productos
                </li>
                <li class="animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
                  <i class="bi bi-check-circle-fill me-2"></i>Lista para comenzar a vender en poco tiempo
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="features-grid mt-5">
          <div class="row g-4">
            <div class="col-md-4" v-for="(feature, index) in features" :key="index">
              <div class="feature-card animate__animated animate__fadeInUp" 
                   :style="{ animationDelay: `${index * 0.1}s` }">
                <i :class="feature.icon + ' feature-card-icon'"></i>
                <h4>{{ feature.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    icon: 'bi bi-grid-3x3-gap',
    title: 'Gestión sencilla de productos y categorías'
  },
  {
    icon: 'bi bi-credit-card',
    title: 'Pagos con tarjeta, efectivo, transferencias'
  },
  {
    icon: 'bi bi-people',
    title: 'Gestión de clientes y pedidos'
  },
  {
    icon: 'bi bi-shield-check',
    title: 'Seguridad en cada transacción'
  },
  {
    icon: 'bi bi-share',
    title: 'Integración con redes sociales'
  },
  {
    icon: 'bi bi-graph-up',
    title: 'Reportes de ventas en tiempo real'
  }
];
</script>

<style scoped>
.ecommerce-page {
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

.feature-icon-container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  color: var(--primary-coral);
  transition: transform 0.3s ease;
}

.feature-icon-container:hover {
  transform: translateY(-5px);
}

.feature-content {
  padding: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: white;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease;
}

.feature-list li:hover {
  transform: translateX(10px);
}

.feature-list i {
  color: var(--primary-coral);
  font-size: 1.2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(0,0,0,0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-coral);
}

.feature-card-icon {
  font-size: 2.5rem;
  color: var(--primary-coral);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-card-icon {
  transform: scale(1.1);
}

.feature-card h4 {
  font-size: 1.1rem;
  margin: 0;
  color: var(--primary-blue);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .feature-icon-container {
    margin-bottom: 30px;
  }
  
  .feature-list li {
    margin-bottom: 1rem;
  }
}
</style>