import { ApplicationsInformationType } from '@/app/types/applications.type'

export const apps:ApplicationsInformationType[] = [
    {
        nomApp: 'Documentation',
        url: 'https://doc.cclaudel.fr',
        description:'Documentation Opensource en français',
        image:'/img/doc.png'
    },
    {
        nomApp: 'Passwd',
        url: 'https://passwd.cclaudel.fr',
        description:'Partage de mot de passe de manière sécurisés',
        image:'/img/passwd.png'
    },
    {
        nomApp: 'VaultWarden',
        url: 'https://vault.cclaudel.fr',
        description:'Stockage de mot de passe héberger chez moi',
        image:'/img/vaultwarden.png'
    },
    {
        nomApp: 'Nextcloud',
        url:'https://cloud.cclaudel.fr',
        description:'Stockage de fichier en ligne',
        image:'/img/nextcloud.jpg'
    }
]