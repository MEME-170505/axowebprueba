import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css'
import './style.css'

// Import routes
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Cliente from './views/clientes/Cliente.vue'
import Dashboard from './views/administradores/Dashboard.vue'
import Ecommerce from './views/ofertas/Ecommerce.vue'
import Marketing from './views/ofertas/Marketing.vue'
import Error404 from './views/Error404.vue'
import PaymentSuccess from './views/PaymentSuccess.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Services },
  { path: '/sobre-nosotros', component: About },
  { path: '/contactanos', component: Contact },
  { path: '/cliente', component: Cliente },
  { path: '/admin', component: Dashboard },
  { path: '/ecommerce', component: Ecommerce },
  { path: '/marketing-digital', component: Marketing },
  { path: '/pago-exitoso', component: PaymentSuccess },
  { path: '/404', component: Error404 },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Create app
const app = createApp(App)
app.use(router)
app.mount('#app')