import ParcoursScolSection from '@/app/components/parcoursScol/parcoursScol.component'
import ParcoursProSection from '@/app/components/parcoursPro/parcoursPro.component'
import styles from './page.module.css'
import { scol } from '@/app/data/parcoursScol.data'
import { pro } from '@/app/data/parcoursPro.data'

export default function Parcours() {
    return (
        <main>
            <div className={styles.maindiv}>
                <h1>Parcours</h1>
                <div className={styles.scol}>
                    <h2>Scolaire</h2>
                    <ParcoursScolSection experiences={scol} ></ParcoursScolSection>
                </div>
                <div className={styles.pro}>
                    <h2>Professionel</h2>
                    <ParcoursProSection experiences={pro} ></ParcoursProSection>
                </div>     
            </div>
        </main>
    )
}