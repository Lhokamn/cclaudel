<script setup lang="ts">
import './Experiences.css'
import { experiences } from '@/data/experiences'
</script>

<template>
  <section class="experiences">
    <h2>Expériences Professionnelles</h2>
    <ul>
      <li v-for="(exp, index) in experiences" :key="index" class="experience-card">
        <h3>{{ exp.role }}</h3>
        <p class="company">{{ exp.company }}</p>
        <p class="period">{{ exp.period }}</p>
        <p v-if="exp.description" class="description">{{ exp.description }}</p>

        <!-- ✅ affichage des tags -->
        <ul v-if="exp.tags" class="tags">
          <li v-for="(tag, i) in exp.tags" :key="i" class="tag">
            {{ tag }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
