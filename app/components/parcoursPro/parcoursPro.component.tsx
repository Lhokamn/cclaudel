import { ParcoursProPropsType, ParcoursProInformationType } from '@/app/types/parcoursPro/parcoursPro.type';
import styles from './parcoursPro.module.css'

export default function parcoursProSection ( {experiences}:ParcoursProPropsType){
    return (
        <div className={styles.pro}>
            {experiences.map((experience:ParcoursProInformationType) =>
                <div className={styles.wrapper}>
                    <strong>{experience.</strong>
                </div>
            )}
        </div>
    )
}