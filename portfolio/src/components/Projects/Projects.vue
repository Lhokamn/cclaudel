<script setup lang="ts">
import './Projects.css'
import { projects } from '@/data/projects'
</script>

<template>
  <section class="projects">
    <h2>Mes Projets</h2>
    <ul>
      <li v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="project-header">
          <h3>{{ project.name }}</h3>
          <span class="status" :class="project.status">{{ project.status }}</span>
        </div>
        <p class="description">{{ project.description }}</p>

        <!-- ✅ Affichage du lien si dispo -->
        <p v-if="project.url" class="project-link">
          <a :href="project.url" target="_blank" rel="noopener noreferrer">
            Voir le projet →
          </a>
        </p>

        <ul v-if="project.tags" class="tags">
          <li v-for="(tag, i) in project.tags" :key="i" class="tag">
            {{ tag }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
