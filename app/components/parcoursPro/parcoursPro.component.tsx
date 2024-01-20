import { ParcoursProPropsType, ParcoursProInformationType } from '@/app/types/parcoursPro.type';
import styles from './parcoursPro.module.css'

export default function ParcoursProSection ( {experiences}:ParcoursProPropsType){
    return (
        <div className={styles.pro}>
            {experiences.map((experience:ParcoursProInformationType) =>
                <div className={styles.wrapper}>
                    <strong>{experience.nom}</strong>
                    <p>{experience.fonction}</p>
                    <p>{experience.date}</p>
                    <p>{experience.contrat}</p>
                </div>
            )}
        </div>
    )
}