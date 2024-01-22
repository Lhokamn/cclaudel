import { ContactPropsType, ContactInformationType } from '@/app/types/contact.type';
import styles from './contact.module.css'
import Image from 'next/image'

export default function ContactSection ( {contacts}:ContactPropsType){
    return (
        <main>
            <div className={styles.main}>
                {contacts.map((contact:ContactInformationType, key: number) =>
                <div key={key} className={styles.icone}>
                    <a href={contact.url}>
                        <Image
                            src={contact.image}
                            width={50}
                            height={50}
                            alt={contact.url}
                        />
                    </a>
                </div>
                
                )}
            </div>
        </main>
    )
}