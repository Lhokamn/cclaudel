// On définit un type pour mieux structurer tes formations
export interface Formation {
  school: string
  degree: string
  year: string
  description?: string
}

export const formations: Formation[] = [
  {
    school: "IMT Mines Alès",
    degree: "Ingénieur Systèmes et Réseaux",
    year: "2024-Aujourd'hui",
    description: "Découverte du monde de l'ingénieurie informatique."
  },
  {
    school: "IUT Lyon 1 - La doua",
    degree: "BUT Informatique Option Déploiement d'Applications Communicantes Sécurisées",
    year: "2021 - 2024",
    description: "Spécialisation de ma formation dans le système et réseau avec de fortes connaissances en développement"
  }
]
