export interface CvContact {
  nom: string
  recherche: string
  formation: string
  telephone: string
  email: string
  localisation: string
}

export interface CvEntry {
  titre: string
  entreprise: string
  periode: string
  missions: string[]
}

export interface CvTechnicalStack {
  nom: string
  details: string
}

export const cvData = {
  contact: {
    nom: 'SAULNIER SIMON',
    recherche: 'STAGE INFORMATIQUE',
    formation: 'BUT INFO 3ème année - Saint-Dié-des-Vosges',
    telephone: '06 08 13 44 05',
    email: 'simonsaulnier40@gmail.com',
    localisation: 'Saint-Dié-des-Vosges, 88100'
  } satisfies CvContact,

  competences: [
    'Backend',
    'Frontend',
    'Dev d\'application',
    'Base de donnée',
    'Rigueur',
    'Rédaction de document',
    'Ponctualité',
    'Gestion du stress',
    'Communication'
  ],

  stackTechnique: [
    {
      nom: 'Bases de Données',
      details: 'Conception et intégration : MySQL, PostgreSQL, Elasticsearch'
    },
    {
      nom: 'Web',
      details: 'Conception et développement : HTML5, CSS3, JavaScript, PHP, React, Framework (Symfony, Flutter et Nuxt)'
    },
    {
      nom: 'Langage de programmation',
      details: 'C, Java (SpringBoot, JavaFX, Java Swing...), Python'
    },
    {
      nom: 'Environnement',
      details: 'Linux (Ubuntu, Debian)'
    }
  ] satisfies CvTechnicalStack[],

  stages: [
    {
      titre: 'Stage - Centre National D\'assistance au Utilisateur (CNAU)',
      entreprise: 'Gendarmerie Nationale',
      periode: 'Fin février à fin avril 2025',
      missions: [
        'Redesign du site intranet du CNAU (Mise aux normes du DSFR)',
        'Amélioration de la navigation et de la recherche (UX)',
        'Modernisation des technologies',
        'Stack technique : Symfony, React, ElasticSearch, PostgreSQL'
      ]
    }
  ] satisfies CvEntry[],

  projets: [
    {
      titre: 'Portefolio Numérique',
      entreprise: 'Projet Personnel et Scolaire',
      periode: '',
      missions: [
        'Lien : https://portefolio-nuxt-green.vercel.app',
        'Framework Nuxt',
        'Optimisation et amélioration d\'un site internet (scolaire) en PHP / Symfony',
        'Améliorations : Sécurité, ergonomie, robustesse, accessibilité...'
      ]
    }
  ] satisfies CvEntry[],

  experiences: [
    {
      titre: 'Nageur Sauveteur',
      entreprise: 'SNSM (Grau-du-Roi)',
      periode: 'Aout 2024 - Septembre 2024',
      missions: [
        'Surveillance de plage',
        'Entretenir le matériel',
        'Travail en équipe'
      ]
    },
    {
      titre: 'Surveillant de baignade',
      entreprise: 'Zendaya Séquoia Parc et Piscine Municipal Jean Langet (Rochefort)',
      periode: 'Été 2023 - 2025 - 2026',
      missions: [
        'Surveillance de complexe aquatique',
        'Communication bilingue (français, anglais)',
        'Travail en équipe'
      ]
    },
    {
      titre: 'Castreur de maïs',
      entreprise: 'Agriculture',
      periode: 'Juillet 2021 et Juillet 2022',
      missions: [
        'Marcher dans les rangs de maïs afin de castrer les plants.'
      ]
    }
  ] satisfies CvEntry[],

  benevolat: [
    {
      titre: 'Secouriste sur événement',
      entreprise: 'SNSM',
      periode: '',
      missions: []
    },
    {
      titre: 'Officier Chronométreur',
      entreprise: 'FFN',
      periode: '',
      missions: []
    }
  ] satisfies CvEntry[],

  diplomes: [
    'Bac général',
    'BNSSA',
    'PSE1 et PSE2',
    'Permis B',
    'Permis Bateau (côtier)'
  ],

  langues: [
    'Français',
    'Anglais - B2',
    'Espagnol - A1'
  ],

  hobbys: [
    'Ingénierie',
    'Natation',
    'Secourisme'
  ]
} as const
