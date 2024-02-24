import { ApplicationsPropsType, ApplicationsInformationType } from '@/app/types/applications.type';
import styles from './applications.module.css'

export default function ApplicationsSection ( {applications}:ApplicationsPropsType){
    return (
        <div className={styles.listeApp}>
            {applications.map((application:ApplicationsInformationType, key: number) =>
                <div key={key} className={styles.oneApp}>
                    <a href={application.url}>
                    <h3>{application.nomApp}</h3>
                    <iframe className={styles.iframe} src={application.url}></iframe>
                    </a>
                    <p>{application.description}</p>
                </div>
            )}
        </div>
    )
}