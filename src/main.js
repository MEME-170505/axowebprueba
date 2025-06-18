import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css'
import './style.css'

// Importa las vistas
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

// Crea Pinia y App primero
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Importa el store *DESPUÉS* de usar pinia
import { useAuthStore } from './stores/auth'

// Define rutas
const routes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Services },
  { path: '/sobre-nosotros', component: About },
  { path: '/contactanos', component: Contact },
  { 
    path: '/cliente', 
    component: Cliente,
    meta: { requiresAuth: true, role: 'client' }
  },
  { 
    path: '/admin', 
    component: Dashboard,
    meta: { requiresAuth: true, role: 'admin' }
  },
  { path: '/ecommerce', component: Ecommerce },
  { path: '/marketing-digital', component: Marketing },
  { path: '/pago-exitoso', component: PaymentSuccess },
  { path: '/404', component: Error404 },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

// Crea router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

// Guarda de navegación
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore() // ahora sí funciona porque ya existe pinia

  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated) {
      return next('/')
    }

    if (to.meta.role && authStore.user.role !== to.meta.role) {
      return next('/')
    }
  }

  next()
})

app.use(router)
app.mount('#app')
