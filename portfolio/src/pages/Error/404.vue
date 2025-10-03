<script setup lang="ts">
// Pas besoin de logique pour l'instant
</script>

<template>
  <div class="notfound">
    <h1>404</h1>
    <p>Oups… Cette page n’existe pas.</p>
    <img src="@/assets/peugeot404.jpg" alt="Peugeot 404" />
    <router-link to="/">⬅️ Retour à l’accueil</router-link>
  </div>
</template>

<style scoped>
.notfound {
  text-align: center;
  padding: 60px 20px;
}

.notfound h1 {
  font-size: 6rem;
  color: #ef4444;
  margin: 0;
}

.notfound p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.notfound img {
  margin: 20px auto;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.notfound a {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: #6366f1;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}

.notfound a:hover {
  background: #4f46e5;
}
</style>
