<template>
  <div class="formacao-container">
    <section>
      <h2 class="titulo-skills">Formação Acadêmica:</h2>
      <div class="formation-list">
        <Card v-for="(item, index) in experienciasAcademicas" :key="index" class="formation-card">
          <template #content>
            <div class="flex p-4">
              <div class="company-logo-side">
                <img :src="getLogoUrlAcademica(item.logo)" :alt="item.instituicao" class="logo-img-side">
              </div>
              <div class="flex-1 pl-5">
                <div class="font-bold text-xl mb-3 text-white">{{ item.instituicao }}</div>
                <div class="font-bold text-lg mb-3" style="color: var(--secondary-color);">{{ item.curso }}</div>
                <div class="text-white font-medium">{{ item.periodo }}</div>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <h2 class="titulo-skills mt-6">Outras Formações:</h2>
      <div class="carousel-container">
        <Carousel 
          v-if="certificados && certificados.length > 0" 
          :value="certificados" 
          :numVisible="3" 
          :numScroll="1" 
          :responsiveOptions="responsiveOptions" 
          circular 
          :autoplayInterval="8000" 
          class="certificates-carousel"
          style="--carousel-button-size: 80px; --carousel-icon-size: 2.5rem;"
        >
          <template #item="slotProps">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4 certificate-card">
              <div class="mb-4">
                <div class="relative mx-auto">
                  <img 
                    :src="getCertificateUrl(slotProps.data.image)" 
                    :alt="slotProps.data.name" 
                    class="w-full rounded certificate-image" 
                    @error="handleImageError"
                  />
                </div>
              </div>
              <div class="mb-4 font-medium certificate-title">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Carousel>
        <div v-else class="loading-certificates">
          <p class="text-white">Carregando certificados... ({{ certificados.length }})</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import { ref, onMounted } from 'vue';

const getLogoUrlAcademica = (fileName) => new URL(`../assets/faculdades/${fileName}`, import.meta.url).href;

const getCertificateUrl = (fileName) => new URL(`../assets/certificados/${fileName}`, import.meta.url).href;

const handleImageError = (event) => {
  console.error('Erro ao carregar imagem:', event.target.src);
  event.target.style.display = 'none';
};

const certificados = ref([]);

const responsiveOptions = [
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
];

const loadCertificates = () => {
  try {
    certificados.value = [
      { 
        image: 'Caio Pereira dos Santos - Curso Avançando com PHP_ Arrays, Strings, Função e Web - Alura_page-0001.jpg',
        name: 'Curso Avançando com PHP: Arrays, Strings, Função e Web - Alura'
      },
      { 
        image: 'Caio Pereira dos Santos - Curso Bootstrap5_ crie uma landing page responsiva - Alura_page-0001.jpg',
        name: 'Curso Bootstrap5: Crie uma landing page responsiva - Alura'
      },
      { 
        image: 'Caio Pereira dos Santos - Curso Git e Github_ controle e compartilhe seu código - Alura_page-0001.jpg',
        name: 'Curso Git e Github: Controle e compartilhe seu código - Alura'
      },
      { 
        image: 'Caio Pereira dos Santos - Curso PHP_ conceitos, lidando com dados, loops e mais - Alura_page-0001.jpg',
        name: 'Curso PHP: Conceitos, lidando com dados, loops e mais - Alura'
      },
      { 
        image: 'Caio Pereira dos Santos - Formação em Conectar_page-0001.jpg',
        name: 'Formação em Conectar'
      },
    ];
    
    console.log('Certificados carregados:', certificados.value);
    console.log('URL do primeiro certificado:', getCertificateUrl(certificados.value[0].image));
    
  } catch (error) {
    console.error('Erro ao carregar certificados:', error);
    certificados.value = [];
  }
};

const experienciasAcademicas = [
  {
    instituicao: 'UNIFOR - Formiga',
    curso: 'Bacharelado em Ciência da Computação',
    periodo: '2019 - 2019',
    logo: 'unifor.png'
  },
  {
    instituicao: 'Fumec',
    curso: 'Bacharelado em Ciência da Computação',
    periodo: '2020 - 2025',
    logo: 'fumec.png'
  },
];

onMounted(() => {
  loadCertificates();
});

// Também chamar imediatamente para garantir que os dados sejam carregados
loadCertificates();
</script>

<style scoped>
.formacao-container {
  width: 75%;
  margin: 0 auto;
  max-width: 1200px;
}

@media (max-width: 768px) {
  .formacao-container {
    width: 100%;
    padding: 0 1rem;
  }
}

.titulo-skills {
  color: var(--secondary-color);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}

.formation-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.formation-card {
  background: rgba(27, 42, 65, 0.92) !important;
  color: var(--primary-color) !important;
  border-radius: 12px !important;
  box-shadow: 0 2px 12px 0 #1b2a4111 !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
  min-width: 700px !important;
}

.formation-card:hover {
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
  .formation-card {
    min-width: auto !important;
  }
  
  .company-logo-side {
    width: 60px !important;
  }
  
  .logo-img-side {
    max-height: 50px !important;
  }
}

.certificates-carousel {
  margin-top: 1rem;
}

.certificate-card {
  background: rgba(27, 42, 65, 0.92) !important;
  border-color: var(--surface-border) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.certificate-card:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 20px 0 #1b2a4122 !important;
}

.certificate-image {
  height: 200px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

.certificate-image:hover {
  transform: scale(1.02);
}

.certificate-title {
  color: var(--secondary-color) !important;
  font-size: 1rem;
  line-height: 1.4;
  text-align: center;
}

.certificate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
}

:deep(.p-carousel-indicators) {
  margin-top: 1rem;
}

:deep(.p-carousel-indicator) {
  background-color: var(--secondary-color);
  opacity: 0.5;
  width: 16px !important;
  height: 16px !important;
  border-radius: 50% !important;
  margin: 0 6px !important;
}

:deep(.p-carousel-indicator.p-highlight) {
  opacity: 1;
}

/* Forçar tamanho em todos os elementos do botão */
:deep(.p-carousel) .p-carousel-prev *,
:deep(.p-carousel) .p-carousel-next * {
  font-size: 2.5rem !important;
}

/* Usando variáveis CSS customizadas */
.certificates-carousel {
  --carousel-button-size: 80px;
  --carousel-icon-size: 2.5rem;
}

:deep(.p-carousel-next-button),
:deep(.p-carousel-prev-button) {
  width: 35px !important;
  height: 35px !important;
  min-width: 35px !important;
  min-height: 35px !important;
  font-size: 1.2rem !important;
  border-radius: 50% !important;
  background: var(--accent-color) !important;
  border: 2px solid var(--accent-color) !important;
  color: var(--text-light) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 10 !important;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s !important;
  box-shadow: 0 2px 8px 0 #3a86ff22 !important;
}

:deep(.p-carousel-next-button:hover),
:deep(.p-carousel-prev-button:hover) {
  background: var(--primary-color) !important;
  color: var(--text-light) !important;
  box-shadow: 0 4px 12px 0 #3a86ff44 !important;
}

:deep(.p-carousel-next-button:focus),
:deep(.p-carousel-prev-button:focus) {
  outline: none !important;
  box-shadow: 0 0 0 3px var(--secondary-color) !important;
}

:deep(.p-carousel-next-button .pi),
:deep(.p-carousel-prev-button .pi) {
  font-size: 1.2rem !important;
}

.carousel-container {
  overflow: hidden;
}

.certificates-carousel {
  overflow: hidden;
}

@media (max-width: 768px) {
  .certificate-image {
    max-width: 250px;
    height: 150px;
  }
  
  :deep(.p-carousel) {
    .p-carousel-items-container {
      padding: 0 1rem;
    }
  }
}

.loading-certificates {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(27, 42, 65, 0.92);
  border-radius: 12px;
  margin-top: 1rem;
}
</style> 