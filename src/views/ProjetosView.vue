<template>
  <section>
    <h2 class="mb-3">Projetos</h2>
    <h3 class="titulo-projetos">Projetos:</h3>
    <div v-if="loading" class="col-12 text-center text-500">Carregando projetos do GitHub...</div>
    <div v-else-if="erro" class="col-12 text-center text-danger">Erro ao carregar projetos.</div>
    <div v-else class="projetos-grid">
      <div v-for="repo in repos" :key="repo.id" class="projeto-card surface-card">
        <div>
          <div class="flex align-items-center gap-2 mb-2">
            <i class="pi pi-github text-2xl"></i>
            <span class="projeto-titulo">{{ repo.name }}</span>
          </div>
          <div class="mb-2 projeto-desc">{{ repo.description || 'Sem descrição.' }}</div>
        </div>
        <div class="flex align-items-center justify-content-between mt-3">
          <span class="projeto-lang">
            <i class="pi pi-code mr-1"></i> {{ repo.language || 'N/A' }}
          </span>
          <button @click="abrirRepositorio(repo.html_url)" class="p-button p-button-sm p-button-primary botao-projeto" type="button">
            Ver no GitHub <i class="pi pi-external-link ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchRepos } from '../services/github';

const repos = ref([]);
const loading = ref(true);
const erro = ref(false);
const username = 'CaioPereira51'; // Substitua pelo seu usuário do GitHub

function abrirRepositorio(url) {
  window.open(url, '_blank');
}

onMounted(async () => {
  try {
    repos.value = await fetchRepos(username);
  } catch (e) {
    erro.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.projetos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 80vw;
  max-width: 1400px;
  margin: 0 auto;
}
.projeto-card {
  border: 2px solid var(--accent-color);
  color: var(--secondary-color);
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 #1b2a4111;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
  background: var(--card-bg);
}
.projeto-titulo {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-color);
}
.projeto-desc {
  color: var(--secondary-color);
  font-size: 1rem;
  min-height: 48px;
}
.projeto-lang {
  color: var(--accent-color);
  font-weight: 500;
}
.botao-projeto {
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  background: transparent !important;
  color: var(--accent-color) !important;
  border: 2px solid var(--accent-color) !important;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.botao-projeto:hover {
  background: var(--accent-color) !important;
  color: var(--text-light) !important;
}
.titulo-projetos {
  color: var(--secondary-color);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}
@media (max-width: 1100px) {
  .projetos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .projetos-grid {
    grid-template-columns: 1fr;
  }
}
</style> 