<template>
  <nav class="navbar p-5 flex align-items-center justify-content-between surface-0 shadow-2 fixed-navbar">
    <div class="flex align-items-center gap-3" style="min-width: 220px;">
      <i class="pi pi-code text-3xl text-primary"></i>
      <span class="font-bold text-2xl">&lt;CaioPereira /&gt;</span>
    </div>
    <ul class="flex gap-6 m-0 p-0 list-none justify-content-center flex-1">
      <li v-for="item in navItems" :key="item.id">
        <a :href="item.href" class="nav-link" @click.prevent="scrollToSection(item.href)">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { id: 1, label: 'Sobre', href: '#sobre' },
  { id: 2, label: 'Projetos', href: '#projetos' },
  { id: 3, label: 'Skills', href: '#skills' },
  { id: 4, label: 'Experiência', href: '#experiencia' },
  { id: 5, label: 'Formação', href: '#formacao' },
];

function scrollToSection(href) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.navbar {
  min-height: 110px;
  background: var(--primary-color) !important;
  color: var(--text-light);
  box-shadow: 0 4px 24px 0 #1b2a4133;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  z-index: 1000;
}
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
.navbar ul {
  flex: 1;
  justify-content: center;
}
.navbar span {
  font-size: 2.5rem;
  color: var(--text-light);
}
.nav-link {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--text-light) !important;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  text-decoration: none !important;
  font-family: inherit;
}
.nav-link:hover {
  background: var(--accent-color);
  color: var(--text-light) !important;
  text-decoration: none !important;
}
@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 80px;
  }
  .navbar ul {
    gap: 1rem;
  }
  .navbar span {
    font-size: 1.5rem;
  }
  .nav-link {
    font-size: 1.1rem;
  }
}
</style> 