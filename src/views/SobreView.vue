<template>
  <section class="sobre-hero">
    <div class="sobre-content">
      <div class="sobre-card-img">
        <div class="img-card">
          <img src="/programador.png" alt="Ilustração programador" class="avatar-ilustra" />
        </div>
      </div>
      <div class="sobre-info">
        <h1 class="sobre-titulo">Caio Pereira</h1>
        <h2 class="sobre-subtitulo">Desenvolvedor FullStack</h2>
        <p class="descricao mb-4">
          Sou programador full stack, apaixonado por tecnologia e especializado em análise e desenvolvimento de sistemas. 
          Possuo sólida experiência na criação de soluções inovadoras e eficientes, aliando qualidade técnica a visão estratégica. 
          Com habilidades avançadas em programação, mantenho-me em constante atualização para superar desafios tecnológicos e contribuir 
          ativamente para o crescimento e a excelência dos resultados da empresa.
        </p>
        <div class="botoes-sociais mt-4">
          <button @click="openGitHub" class="social-btn" aria-label="GitHub" type="button"><i class="pi pi-github"></i></button>
          <button @click="openLinkedIn" class="social-btn" aria-label="LinkedIn" type="button"><i class="pi pi-linkedin"></i></button>
          <button @click="openEmail" class="social-btn" aria-label="E-mail" type="button"><i class="pi pi-envelope"></i></button>
          <button @click="openWhatsApp" class="social-btn" aria-label="WhatsApp" type="button"><i class="pi pi-whatsapp"></i></button>
          <button @click="openCurriculo" class="p-button p-button-primary p-button-lg botao-cv" type="button">
            <span class="p-button-label">Baixar Currículo</span>
            <i class="pi pi-download ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importar o currículo
import curriculoUrl from '../assets/Caio_Pereira_programador_2025.pdf';

// Funções para abrir links externos
const openGitHub = () => {
  if (typeof window !== 'undefined') {
    window.open('https://github.com/CaioPereira51', '_blank');
  }
};

const openLinkedIn = () => {
  if (typeof window !== 'undefined') {
    window.open('https://www.linkedin.com/in/caiopereira51/', '_blank');
  }
};

const openEmail = () => {
  if (typeof window !== 'undefined') {
    window.open('mailto:dev.caiop@gmail.com');
  }
};

const openWhatsApp = () => {
  if (typeof window !== 'undefined') {
    window.open('https://wa.me/5537999567472', '_blank');
  }
};

const openCurriculo = () => {
  if (typeof window !== 'undefined') {
    window.open(curriculoUrl, '_blank');
  }
};
</script>

<style scoped>
.sobre-hero {
  min-height: 70vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sobre-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 1400px;
  min-width: 320px;
  margin: 0 auto;
  gap: 3rem;
  background: rgba(27, 42, 65, 0.92) !important;
  border-radius: 24px;
  box-shadow: 0 6px 32px 0 #1b2a4133;
  border: 2px solid #232c3b;
  padding: 2.5rem 2rem;
}
.sobre-card-img {
  flex: 1 1 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.img-card {
  background: transparent;
  border-radius: 18px;
  box-shadow: none;
  padding: 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.avatar-ilustra {
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: 520px;
  object-fit: cover;
  border-radius: 18px;
  background: transparent;
  border: 4px solid var(--primary-color);
  box-shadow: 0 2px 12px 0 #2563eb22;
  display: block;
}
.sobre-info {
  flex: 1 1 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.sobre-titulo {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.1em;
}
.sobre-subtitulo {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 1.2rem;
  margin-top: 0;
}
.descricao {
  font-size: 1.3rem;
  color: var(--secondary-color);
  max-width: 520px;
}
.botoes-sociais {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
  margin-top: 1.5rem;
}
.social-btn {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% !important;
  background: var(--accent-color);
  color: var(--text-light) !important;
  font-size: 1.5rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 #3a86ff22;
  border: 2px solid var(--accent-color) !important;
}
.social-btn:hover {
  background: var(--primary-color);
  color: var(--text-light) !important;
}
.botao-cv {
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent-color) !important;
  color: var(--text-light) !important;
  border: none;
  transition: background 0.2s, color 0.2s;
}
.botao-cv:hover {
  background: #265bb5 !important;
  color: var(--text-light) !important;
}
/* Forçar a cor do rótulo interno do botão, pois .p-button-label global define cor com !important */
.botao-cv .p-button-label {
  color: var(--text-light) !important;
  border: none !important;
}
.botao-cv:hover .p-button-label {
  color: var(--text-light) !important;
  border: none !important;
}
@media (max-width: 1100px) {
  .sobre-card-img {
    min-width: 220px;
  }
  .avatar-ilustra {
    max-height: 320px;
  }
}
@media (max-width: 900px) {
  .sobre-hero {
    min-height: unset;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .sobre-content {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 1rem 0.5rem;
  }
  .sobre-card-img {
    width: 100%;
    min-width: unset;
  }
  .img-card {
    width: 100%;
    height: auto;
  }
  .avatar-ilustra {
    width: 100%;
    height: auto;
    max-height: 200px;
  }
  .sobre-info {
    align-items: center;
    text-align: center;
    width: 100%;
  }
  .descricao {
    font-size: 1.1rem;
  }
  .botao-cv {
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }
}
</style> 