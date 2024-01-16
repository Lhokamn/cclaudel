import { ParcoursScolPropsType, ParcoursScolInformationType } from '@/app/types/parcours/parcours.type';
import styles from './parcours.module.css'

export default function ParcoursScolSection ( {experiences}:ParcoursScolPropsType){
    return (
        <div className={styles.scolarite}>
            {experiences.map((experience:ParcoursScolInformationType) => 
                <div className={styles.wrapper}>
                    <strong>{experience.diplome}</strong>
                    <p>{experience.specialite}</p>
                    <p>{experience.anneeDip}</p>
                    <p>{experience.lieu}</p>
                    <p>{experience.ville}</p>
                    <p>{experience.duree}</p>
                </div>
            )}
        </div>
    )
}