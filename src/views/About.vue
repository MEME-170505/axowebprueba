<template>
<div class="about-page">
  <div class="container py-5">
    <h1 class="section-title animate__animated animate__fadeIn">Sobre Nosotros</h1>
    
    <!-- Misión Section -->
    <div class="row mb-5 pt-3 animate__animated animate__fadeInUp">
      <div class="col-md-5 mb-4 mb-md-0">
        <div class="about-image">
          <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Nuestra Misión" class="img-fluid rounded shadow" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="about-content">
          <h2 class="about-subtitle mb-3">Misión</h2>
          <p class="about-text">
            Nuestra misión es la transformación digital de las empresas mediante soluciones creativas e innovadoras en desarrollo web, diseño de identidad visual y estrategias de marketing que generen valor y crecimiento para cada uno de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Visión Section -->
    <div class="row align-items-center py-4 my-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
      <div class="col-md-7 order-md-1 order-2">
        <div class="about-content">
          <h2 class="about-subtitle mb-3">Visión</h2>
          <p class="about-text">
            Nuestra visión es ser la empresa líder de México en venta de servicios digitales, reconocida por su calidad, innovación y compromiso con cada uno de los clientes.
          </p>
        </div>
      </div>
      <div class="col-md-5 mb-4 mb-md-0 order-md-2 order-1">
        <div class="about-image">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Nuestra Visión" class="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
    
    <!-- Filosofía Section -->
    <div class="row py-4 my-4 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
      <div class="col-md-5 mb-4 mb-md-0">
        <div class="about-image">
          <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" alt="Nuestra Filosofía" class="img-fluid rounded shadow" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="about-content">
          <h2 class="about-subtitle mb-3">Filosofía</h2>
          <p class="about-text">
            En Axo Web digital creemos que las tecnologías de hoy en día deben estar al alcance de cada una de las empresas que hay hoy en día y a su vez ser funcionales. Nuestro enfoque se basa en la creatividad, en el trabajo colaborativo y mejora continua.
          </p>
        </div>
      </div>
    </div>

    <!-- Valores Section -->
    <div class="valores-section py-4 my-4 animate__animated animate__fadeInUp" style="animation-delay: 0.6s">
      <h2 class="about-subtitle text-center mb-4">Nuestros Valores</h2>
      <div class="row g-4">
        <div class="col-md-4 col-sm-6">
          <div class="valor-card">
            <div class="valor-icon">
              <i class="bi bi-lightbulb"></i>
            </div>
            <h3>Innovación</h3>
            <p>Nos adaptamos al cambio y buscamos soluciones creativas.</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="valor-card">
            <div class="valor-icon">
              <i class="bi bi-check2-circle"></i>
            </div>
            <h3>Compromiso</h3>
            <p>Cumplimos con cada proyecto como si fuera propio.</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="valor-card">
            <div class="valor-icon">
              <i class="bi bi-award"></i>
            </div>
            <h3>Calidad</h3>
            <p>Nos enfocamos en ofrecer resultados profesionales y duraderos.</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="valor-card">
            <div class="valor-icon">
              <i class="bi bi-heart"></i>
            </div>
            <h3>Empatía</h3>
            <p>Entendemos las necesidades del cliente para brindar soluciones personalizadas.</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="valor-card">
            <div class="valor-icon">
              <i class="bi bi-people"></i>
            </div>
            <h3>Colaboración</h3>
            <p>Trabajamos en equipo con comunicación y respeto.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.about-page {
  background-color: #F9E4CF;
}

.section-title {
  color: #E94F37;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.about-subtitle {
  color: #1D3557;
  font-weight: 600;
  font-size: 1.75rem;
}

.about-content {
  padding: 20px;
}

.about-text {
  color: #1D3557;
  font-size: 1.1rem;
  line-height: 1.6;
}

.about-image {
  transition: transform 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
}

.about-image:hover {
  transform: scale(1.02);
}

.about-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.valores-section {
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 2rem;
  margin-top: 3rem;
}

.valor-card {
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #F9E4CF;
}

.valor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.valor-icon {
  width: 60px;
  height: 60px;
  background-color: #E94F37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.valor-icon i {
  font-size: 1.75rem;
  color: #FFFFFF;
}

.valor-card h3 {
  color: #1D3557;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.valor-card p {
  color: #1D3557;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-image {
    margin-bottom: 1.5rem;
  }
  
  .about-content {
    padding: 0;
  }
  
  .valor-card {
    margin-bottom: 1.5rem;
  }
}
</style>