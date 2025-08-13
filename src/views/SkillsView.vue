<template>
  <section>
    <h2 class="mb-3">Skills & Tech Stack</h2>
    <h3 class="titulo-skills">Skills:</h3>
    <div class="grid gap-3">
      <div class="col-6 md:col-3" v-for="skill in skills" :key="skill.name">
        <div class="surface-card border-round shadow-1 p-3 flex flex-column align-items-center">
          <i v-if="skill.type === 'devicon'" :class="skill.icon + ' text-3xl mb-2'" :title="skill.name"></i>
          <i v-else :class="skill.icon + ' text-3xl mb-2'" :title="skill.name"></i>
          <span class="font-medium">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored', type: 'devicon' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', type: 'devicon' },
  { name: 'Laravel', icon: 'devicon-laravel-plain colored', type: 'devicon' },
  { name: '.NET', icon: 'devicon-dotnetcore-plain colored', type: 'devicon' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', type: 'devicon' },
  { name: 'C#', icon: 'devicon-csharp-plain colored', type: 'devicon' },
  { name: 'PHP', icon: 'devicon-php-plain colored', type: 'devicon' },
  { name: 'Git', icon: 'devicon-git-plain colored', type: 'devicon' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', type: 'devicon' },
  { name: 'Postman', icon: 'pi pi-cog', type: 'pi' },
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
.surface-card {
  background: rgba(27, 42, 65, 0.92) !important;
  color: var(--secondary-color);
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 #1b2a4111;
}
</style> 