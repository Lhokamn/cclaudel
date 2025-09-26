<script setup lang="ts">
import './Contact.css'
import LinkedInPic from '@/assets/linkedin.png'
import GithubPic from '@/assets/github.png'
import EmailPic from '@/assets/mail.png'

export interface Contact {
  name: string
  url: string
  icon: string
}

const contacts: Contact[] = [
  { name: "Email", url: "mailto:corentin@cclaudel.fr", icon: EmailPic },
  { name: "GitHub", url: "https://github.com/Lhokamn", icon: GithubPic },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/corentin-claudel/", icon: LinkedInPic },
]
</script>


<template>
  <div class="contact-links">
    <ul>
      <li v-for="(contact, index) in contacts" :key="index">
        <a :href="contact.url" target="_blank" rel="noopener noreferrer">
          <img :src="contact.icon" :alt="contact.name" class="contact-icon" />
          <span class="label">{{ contact.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
