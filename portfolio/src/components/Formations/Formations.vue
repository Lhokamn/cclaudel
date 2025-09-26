<script setup lang="ts">
import './Formations.css'
import { formations } from '@/data/formations'
</script>

<template>
  <section class="formations">
    <h2>Mes Formations</h2>
    <ul>
      <li v-for="(formation, index) in formations" :key="index" class="formation-card">
        <h3>{{ formation.degree }}</h3>
        <p class="school">{{ formation.school }}</p>
        <p class="year">{{ formation.year }}</p>
        <p v-if="formation.description" class="description">{{ formation.description }}</p>
      </li>
    </ul>
  </section>
</template>
