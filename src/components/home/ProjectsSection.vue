<template>
  <section class="projects-section">
    <div class="container">
      <SectionTitle title="Nuestros proyectos con empresas" />
      
      <div class="row justify-content-center">
        <div
          class="col-md-4 col-sm-6 mb-4"
          v-for="(client, index) in clients"
          :key="index"
        >
          <ProjectCard :client="client" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '../ui/SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'

const clients = ref([
  {
    name: 'Bufin del Norte',
    logo: 'https://i.pinimg.com/736x/13/fb/65/13fb65def9e21e143aff6967029fd394.jpg',
    description: 'Consultora en comercio exterior y auditoría aduanera.',
    link: 'https://bufinorte.com/',
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
    link: 'https://elegant-mousse-a3d2e8.netlify.app/',
  },
])
</script>

<style scoped>
.projects-section {
  background-color: #F6F1E6;
  padding: 5rem 0;
}
</style>