<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import About from '@/components/About/About.vue'
import Formations from '@/components/Formations/Formations.vue'
import Experiences from '@/components/Experiences/Experiences.vue'
import Projects from '@/components/Projects/Projects.vue'
import Footer from '@/components/Footer/Footer.vue'

</script>

<template>
  <div id="app">
    <Header />

    <main class="content">
      <About />

      <Projects />

      <Experiences />

      <Formations />

    </main>

    <Footer owner="Corentin Claudel" />
  </div>
</template>
