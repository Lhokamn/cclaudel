export interface Experience {
  company: string
  role: string
  period: string
  tags?: string[]
  description?: string
}

export const experiences: Experience[] = [
    {
        company: "Renault Trucks",
        role: "Appenti ingénieur Cloud",
        period: "2024 - Aujourd'hui",
        tags: ["Cloud","Azure","FinOps","PowerBi"],
        description: "Faire la liaison entre les équipes applicatives et les équipes qui gère la platforme Cloud." 
    },
    {
        company: "Endrix",
        role: "Apprenti Technicien Informatique",
        period: "2022 - 2024",
        tags: ["PowerShell", "Administration Windows", "Poste de travail", "Mise en place de service"],
        description: "Apprentissage du rôle de technicien dans une entreprise"
    },
    {
        company: "APMG ",
        role: "Technicien Fluide",
        period: " juillet-aout 2022",
        description: "Travail intérimaire pour faire de la maintenance Fluide pour l'entreprise Sanofi"
    },
    {
        company: "Ainfo Service",
        role: "Stage d'observation",
        period: " Octobre 2020",
        description: "Stage de découverte de l'informatique Système et réseaux"
    }
]
