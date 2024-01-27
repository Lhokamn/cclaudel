'use client';

import ApplicationsSection from '@/app/components/applications/applications.component'
import CompetenceSection from '@/app/components/competence/competence.component'

import { useState } from 'react';

import styles from './page.module.css'
import { apps } from '@/app/data/applications.data'

export default function Portfolio() {

    

    const [activeButton, setActiveButton] = useState(2);

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
      };

    return (
        <main>
            <div className={styles.content}>
                <h1>Portfolio</h1>
                <div className={styles.select}>
                    <div className={styles.allButton}>
                        <button className={` ${styles.button} ${activeButton === 2 ? styles.actButton : ''}`} onClick={() => handleClick(2)}>
                            <h2>Mes compétences</h2>
                        </button>
                        <button className={` ${styles.button} ${activeButton === 1 ? styles.actButton : ''}`} onClick={() => handleClick(1)}>
                            <h2>Mes Applications</h2>
                        </button>
                    </div>
                    <div className={styles.contentTMP}>
                        <div className={activeButton === 1 ? styles.active : ''}>
                            <CompetenceSection></CompetenceSection>
                        </div>   
                        <div className={activeButton === 2 ? styles.active : ''}>
                            <ApplicationsSection applications={apps}></ApplicationsSection>
                        </div> 
                    </div>  
                </div> 
            </div>
        </main>
        
    )
}