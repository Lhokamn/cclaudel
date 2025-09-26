export type ProjectStatus = 'en cours' | 'terminé' | 'futur'

export interface Project {
  name: string
  description: string
  status: ProjectStatus
  url?: string      // ✅ lien démo ou code
  tags?: string[]
}

export const projects: Project[] = [
  {
    name: "Portfolio personnel",
    description: "Mon site portfolio développé avec Vue 3 + TypeScript.",
    status: "en cours",
    url: "https://www.cclaudel.fr", // exemple
    tags: ["Vue 3", "TypeScript", "Vite", "CSS Modules"]
  },
  {
    name: "Server Mail",
    description: "Mise en place d'un server mail privé avec l'outil mailserver",
    status: "terminé",
    url: "mailto:corentin@cclaudel.fr",
    tags: ["mailserver", "DNS"]
  },
  {
    name: "OpenStack",
    description: "Création d'un Cluster OpenStack dans le cadre d'un projet de recherche pour l'IMT Mines Alès",
    status: "terminé",
    tags: ["OpenStack", "Microservices", "Automatisation"]
  },
  {
    name: "Module Terraform KVM",
    description: "Création de module terraform pour simplifié la gestion de KVM",
    status: "terminé",
    url: "https://github.com/Lhokamn/kvm-tf-modules",
    tags: ["kvm", "terraform", "Automatisation"]
  },
  {
    name: "Productif Web",
    description: "Mise en place d'un environnement de travail en web",
    status: "terminé",
    url: "https://cloud.cclaudel.fr",
    tags: ["Nextcloud", "OnlyOffice","Reverse Proxy","certificat"]
  },
  {
    name: "Documentation Open",
    description: "Mise en place d'une documentation publique de mes connaissances",
    status: "en cours",
    url: "https://wiki.cclaudel.fr",
    tags: ["Documentation"]
  }
]
