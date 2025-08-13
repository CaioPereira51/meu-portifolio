<script setup>
import Navbar from './components/Navbar.vue'
import SobreView from './views/SobreView.vue'
import ProjetosView from './views/ProjetosView.vue'
import SkillsView from './views/SkillsView.vue'
import ExperienciaView from './views/ExperienciaView.vue'
import FormacaoView from './views/FormacaoView.vue'
</script>

<template>
  <Navbar />
  <main class="pt-7">
    <section id="sobre" class="section full-section py-6"><SobreView /></section>
    <section id="projetos" class="section full-section py-6"><ProjetosView /></section>
    <section id="skills" class="section full-section py-6"><SkillsView /></section>
    <section id="experiencia" class="section full-section py-6"><ExperienciaView /></section>
    <section id="formacao" class="section full-section py-6"><FormacaoView /></section>
  </main>
</template>

<style scoped>
.pt-7 { padding-top: 70px; }
.section { min-height: 60vh; }
.full-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-frase {
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-frase-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  box-shadow: 0 6px 32px 0 #1b2a4133;
  background: rgba(27, 42, 65, 0.92) !important;
  border: 3px solid var(--accent-color);
}
.hero-frase-texto {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.hero-frase-destaque {
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1.2rem;
  line-height: 1.2;
}
.hero-frase-autor {
  font-size: 1.2rem;
  color: var(--secondary-color);
  font-style: italic;
}
.hero-frase-foto {
  flex: 0 0 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-foto {
  width: 260px;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  border: 4px solid var(--accent-color);
  box-shadow: 0 2px 12px 0 #3a86ff33;
  background: var(--secondary-color);
}
@media (max-width: 900px) {
  .full-section {
    min-height: unset;
    display: block;
    align-items: unset;
    justify-content: unset;
  }
  .hero-frase-content {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 1rem;
  }
  .hero-frase-texto {
    align-items: center;
    text-align: center;
  }
  .hero-frase-foto {
    flex: unset;
  }
  .hero-foto {
    width: 180px;
    height: 220px;
  }
}
</style>
