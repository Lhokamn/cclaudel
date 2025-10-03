<script setup lang="ts">
import Header from '@/components/Header/Header.vue'

import Footer from '@/components/Footer/Footer.vue'

</script>

<template>
  <div id="app">
    <Header />
    <main>
      <!-- Ici s’affiche la page courante -->
      <router-view />
    </main>

    <Footer owner="Corentin Claudel" />
  </div>
</template>
