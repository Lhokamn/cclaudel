import { ApplicationsPropsType, ApplicationsInformationType } from '@/app/types/applications.type';
import styles from './applications.module.css'
import Image from 'next/image'

export default function ApplicationsSection ( {applications}:ApplicationsPropsType){
    return (
        <div className={styles.listeApp}>
            {applications.map((application:ApplicationsInformationType, key: number) =>
                <div key={key} className={styles.oneApp}>
                    <a href={application.url}>
                    <h3>{application.nomApp}</h3>
                    <Image
                        src={application.image}
                        width={300}
                        height={150}
                        alt={application.nomApp}
                    />
                    </a>
                    <p>{application.description}</p>
                </div>
            )}
        </div>
    )
}