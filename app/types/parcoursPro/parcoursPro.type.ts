export type ParcoursProPropsType = {
    experiences: ParcoursProInformationType[]
}

export type ParcoursProInformationType = {
    nom: string,        // Correspond au nom de l'entreprise
    fonction: string,   // Correspond au poste dans l'entreprise
    date: string,       // Correspond au date de travail dans l'entreprise
    contrat:string,     // Correspond au type de contrat dans l'entreprise
}