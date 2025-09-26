<script setup lang="ts">
import './About.css'

const props = withDefaults(defineProps<{
  heading?: string
  bio?: string
}>(), {
  heading: "À propos",
  bio: "Je suis un apprenti en Système et en Réseau, tous les jours j'essaye d'apprendre de nouvelle méthode de travail ou des nouveaux outils qui m'aideront dans mon travail"
})
</script>

<template>
  <section class="about-section">
    <h2>{{ props.heading }}</h2>
    <p>{{ props.bio }}</p>
  </section>
</template>
