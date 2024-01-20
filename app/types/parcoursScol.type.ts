export type ParcoursScolPropsType = {
    experiences: ParcoursScolInformationType[]
}

export type ParcoursScolInformationType = {
    diplome: string,    // Correspond au diplome visé
    specialite:string,  // Correspond à la spécialité choisi du diplome
    anneeDip: string,   // Correspond à l'année d'obtention du diplome
    lieu: string,       // Correspond au lieu d'étude
    ville: string,      // Correspond à la ville de l'établissement
    duree: string,      // Correspond aux années d'entrée et de fin de diplome
}