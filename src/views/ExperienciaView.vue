<template>
  <section>
    <h2 class="titulo-skills">Experiência Profissional:</h2>
    <div class="experience-list">
      <Card v-for="(item, index) in experiencias" :key="index" class="experience-card">
        <template #content>
          <div class="flex p-4">
            <div class="company-logo-side">
              <img :src="getLogoUrl('ws.png')" :alt="item.empresa" class="logo-img-side">
            </div>
            <div class="flex-1 pl-5">
              <div class="font-bold text-xl mb-3 text-white">{{ item.empresa }}</div>
              <div class="font-bold text-lg mb-3" style="color: var(--secondary-color);">{{ item.cargo }}</div>
              <div class="text-white line-height-3">{{ item.descricao }}</div>
              <div class="text-white font-medium mt-3">{{ item.periodo }}</div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card';

const getLogoUrl = (fileName) => new URL(`../assets/empresas/${fileName}`, import.meta.url).href;

const experiencias = [
  {
    empresa: 'WorkingSoftware',
    cargo: 'Desenvolvedor FullStack',
    descricao: 'Analise e Desenvolvimento de sistemas',
    periodo: 'Julho de 2022 - Atualmente',
    logo: 'ws.png'
  },
];
</script>

<style scoped>
.titulo-skills {
  color: var(--secondary-color);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-card {
  background: rgba(27, 42, 65, 0.92) !important;
  color: var(--primary-color) !important;
  border-radius: 12px !important;
  box-shadow: 0 2px 12px 0 #1b2a4111 !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
  min-width: 700px !important;
}

.experience-card:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 20px 0 #1b2a4122 !important;
}

.company-logo-side {
  flex-shrink: 0 !important;
  width: 80px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: var(--surface-ground) !important;
  border-radius: 8px 0 0 8px !important;
  padding: 1rem 0.5rem !important;
}

.logo-img-side {
  width: 140% !important;
  height: auto !important;
  max-height: 100px !important;
  object-fit: contain !important;
  margin: -20% !important;
}

@media (max-width: 768px) {
  .experience-card {
    min-width: auto !important;
  }
  
  .company-logo-side {
    width: 60px !important;
  }
  
  .logo-img-side {
    max-height: 50px !important;
  }
}
</style> 