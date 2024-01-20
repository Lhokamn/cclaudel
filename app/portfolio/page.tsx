import ApplicationsSection from '@/app/components/applications/applications.component'

import styles from './page.module.css'
import { apps } from '@/app/data/applications.data'


export default function Portfolio() {
    return (
        <main>
            <div className={styles.content}>
                <h1>Portfolio</h1>
                <div className={styles.contentApp}>
                    <h2>Mes Applications</h2>
                    <ApplicationsSection applications={apps}></ApplicationsSection>
                </div>
            </div>
        </main>
        
    )
}