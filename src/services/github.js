export async function fetchRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
  if (!response.ok) throw new Error('Erro ao buscar repositórios do GitHub');
  return await response.json();
} 