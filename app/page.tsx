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
          <div >
            <Image 
              src="/img/pp.JPG"
              width={200}
              height={300}
              alt="picture of me"
              className={styles.shadowBox}
              />
          </div>
          <div className={styles.myJob}>
            <p>Administrateur Système et Réseau</p>
          </div>
          <div className={styles.aboutme}>
            <h2>About Me</h2>
            <p>Je suis un étudiant à l&apos;école d&apos;ingénieur des <a href="https://www.imt-mines-ales.fr/">Mines Alès</a> en formation INFRES. Parrallèllement je suis Apprenti Ingénieur Cloud au sein de l&apos;entreprise <a href="https://www.volvogroup.com/en/">Volvo</a> dans un but de professionnalisation de mon parcours professionnel</p>
            <ContactSection contacts={contact}></ContactSection>
          </div>
        </div>
      </div>
    </main>
  )
}