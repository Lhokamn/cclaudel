import ContactSection from '@/app/components/contact/contact.component'
import { contact } from '@/app/data/contact.data'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  
  return (
    <main>
      <div className={styles.fullPageWrapper}>
        <div className={styles.header}>
          <h1>Corentin CLAUDEL</h1>
        </div>
        <div className={styles.fullContent}>
          <Image 
            src="/img/pp.jpeg"
            width={300}
            height={300}
            alt="picture of me"
            />
          <div className={styles.myJob}>
            <p>Administrateur Système et Réseau</p>
          </div>
          <div className={styles.aboutme}>
            <h2>About Me</h2>
            <p>Je suis un étudiant en Informatique à l'IUT Informatique de Lyon 1 la doua. Mais je suis Apprenti Technicien à l'entreprise <a href="https://endrix.com">Endrix</a> dans un but de professionnalisation de mon parcours professionnel </p>
            <ContactSection contacts={contact}></ContactSection>
          </div>
        </div>
      </div>
    </main>
  )
}