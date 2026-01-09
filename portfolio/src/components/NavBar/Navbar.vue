<script setup lang="ts">
import './Navbar.css'
</script>

<template>
  <nav class="navbar">
    <div class="logo">Mon Projet</div>
    <div class="links">
      <router-link to="/">Accueil</router-link>
      <router-link to="/experiences">Mes expériences</router-link>
      <router-link to="/projects">Mes projets</router-link>
    </div>
  </nav>
</template>

<style scoped>

</style>