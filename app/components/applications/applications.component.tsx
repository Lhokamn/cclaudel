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
                    <iframe src={application.url} allowFullScreen={true}></iframe>
                    </a>
                    <p>{application.description}</p>
                </div>
            )}
        </div>
    )
}