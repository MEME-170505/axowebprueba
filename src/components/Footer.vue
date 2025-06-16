<template>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4 mb-md-0">
        <h5 class="footer-title">Explora</h5>
        <ul class="list-unstyled footer-links">
          <li><router-link to="/" class="d-flex align-items-center">
            <i class="bi bi-house-door me-2"></i>Inicio
          </router-link></li>
          <li><router-link to="/servicios" class="d-flex align-items-center">
            <i class="bi bi-grid me-2"></i>Servicios
          </router-link></li>
          <li><router-link to="/sobre-nosotros" class="d-flex align-items-center">
            <i class="bi bi-people me-2"></i>Sobre Nosotros
          </router-link></li>
          <li><router-link to="/contactanos" class="d-flex align-items-center">
            <i class="bi bi-envelope me-2"></i>Contáctanos
          </router-link></li>
        </ul>
      </div>
      
      <div class="col-md-4 mb-4 mb-md-0">
        <h5 class="footer-title">Nuestras redes sociales</h5>
        <div class="d-flex gap-3">
          <a href="#" class="social-icon-link">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="social-icon-link">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" class="social-icon-link">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="social-icon-link">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      
      <div class="col-md-4 text-md-end">
        <div class="d-flex justify-content-md-end justify-content-start">
          <div class="footer-logo rounded-circle bg-white p-2 d-flex align-items-center justify-content-center">
            <img
              src="https://i.pinimg.com/736x/88/4a/8e/884a8ed8ebfa49841a40ab82b1b70965.jpg"
              alt="AxoWeb Logo"
              class="rounded-logo-footer"
            />
          </div>
        </div>
        <p class="company-name">Axo Web Digital</p>
        <p class="copyright-text">© 2024 Todos los derechos reservados</p>
      </div>
    </div>
  </div>
</footer>
</template>