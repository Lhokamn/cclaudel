<script setup lang="ts">
import './Footer.css'

const year: number = new Date().getFullYear()
const props = withDefaults(defineProps<{
  owner?: string
}>(), {
  owner: "Mon Nom"
})
</script>

<template>
  <footer class="site-footer">
    <p>© {{ year }} {{ props.owner }} — Tous droits réservés</p>
  </footer>
</template>
