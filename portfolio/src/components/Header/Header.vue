<script setup lang="ts">
import './Header.css'
import Contact from '@/components/Header/Contact/Contact.vue'
import profilePic from '@/assets/picture.webp'

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: "Bienvenue sur mon Portfolio",
  subtitle: "Futur ingénieur Système avec une passion pour le développement 🚀",
})
</script>

<template>
  <header class="site-header">
    <img :src="profilePic" alt="Photo de profil" class="profile-pic" />
    <h1>{{ props.title }}</h1>
    <p>{{ props.subtitle }}</p>
    
    <Contact />
    
  </header>
</template>
