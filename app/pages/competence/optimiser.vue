<script setup lang="ts">
import type { CompetenceItem } from '~/types/portfolio'

const acNiveau1: CompetenceItem[] = [
  {
    id: 'AC1',
    titre: 'Analyser un problème avec méthode',
    description: 'Découpage en éléments algorithmiques simples, choix des structures de données...',
    icon: 'i-heroicons-magnifying-glass-circle',
    traces: [
      {
        texte: 'Lors de la SAE sur le problème du voyageur de commerce, nous avons dû structurer notre approche en créant une matrice symétrique des distances entre plusieurs villes pour optimiser les calculs de parcours.',
        image: '/img/opti/1-1.png',
        alt: 'Extrait du calcul matriciel'
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Comparer des algorithmes',
    description: 'Analyse et comparaison pour des problèmes classiques (tris simples, recherche...).',
    icon: 'i-heroicons-arrows-right-left',
    traces: [
      {
        texte: 'En BUT 1, j\'ai comparé deux approches pour la coloration de graphes. L\'algorithme Glouton traitait les sommets dans l\'ordre croissant, tandis que Welsh-Powell les triait par degré, démontrant l\'importance de l\'ordre de traitement sur le résultat final.',
        image: '/img/opti/1-2.png',
        alt: 'Comparaison Glouton et Welsh-Powell'
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Expérimenter la notion de compilation',
    description: 'Compréhension des étapes de compilation et des représentations bas niveau des données.',
    icon: 'i-heroicons-cpu-chip',
    traces: [
      {
        texte: 'Nous avons développé en Java et PHP. De ce fait, pour pouvoir exécuter et vérifier nos codes, il est nécessaire de les compiler. Nous avons donc appris à le faire et avons ainsi compris l\'utilité de la compilation (notamment pour optimiser la vitesse d\'exécution).'
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Mettre en œuvre des outils mathématiques',
    description: 'Formaliser et utiliser des outils mathématiques adaptés pour résoudre des problèmes informatiques.',
    icon: 'i-heroicons-calculator',
    traces: [
      {
        texte: 'Nous avons réalisé plusieurs SAE de mathématiques. Elles nous ont par exemple permis de trouver, parmi de multiples chemins, le plus court (voir traces précédentes).'
      }
    ]
  }
]

const acNiveau2: CompetenceItem[] = [
  {
    id: 'AC1',
    titre: 'Choisir des structures de données complexes',
    description: 'Sélectionner des structures adaptées aux contraintes du problème posé.',
    icon: 'i-heroicons-rectangle-group',
    traces: [
      {
        texte: 'Pour la SAE 4.01, j\'ai sécurisé l\'intégrité des données en encapsulant les votes dans des transactions SQL strictes (commit/rollback) et en utilisant des contraintes de base de données (suppression en cascade) via Doctrine, afin de respecter certains principes importants lors de la création et de l\'optimisation d\'un site web.',
        image: '/img/opti/2-1-1.png',
        alt: 'Code de suppression en cascade'
      },
      {
        texte: 'Mise en place des transactions SQL.',
        image: '/img/opti/2-1-2.png',
        alt: 'Code de transaction SQL'
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Utiliser des techniques algorithmiques adaptées',
    description: 'Résolution de problèmes complexes et optimisation des performances.',
    icon: 'i-heroicons-chart-bar',
    traces: [
      {
        texte: 'Afin d\'optimiser les performances pour la SAE 4.01, j\'ai mis en place une stratégie de Cache HTTP permettant aux navigateurs de conserver les pages statiques pendant une heure.',
        image: '/img/opti/2-2.png',
        alt: 'Extrait du code de configuration du cache'
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Sécuriser les données et le code',
    description: 'Comprendre et appliquer les enjeux et moyens de sécurisation.',
    icon: 'i-heroicons-lock-closed',
    traces: [
      {
        texte: 'Lors de la reprise de Votendo, j\'ai corrigé plusieurs vulnérabilités critiques par l\'activation de la protection CSRF sur tous les formulaires, la limitation du brute-force à 5 essais, ou encore en désactivant le mode debug en production.',
        image: '/img/opti/2-3.png',
        alt: 'Configuration YAML de sécurité'
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Évaluer l\'impact environnemental',
    description: 'Analyser l\'impact environnemental et sociétal des solutions informatiques proposées.',
    icon: 'i-heroicons-globe-europe-africa',
    traces: [
      {
        texte: 'L\'implémentation du pattern Singleton pour la connexion à la base de données (SAE 3.01) et la mise en cache des requêtes HTTP (SAE 4.01) permettent de réduire drastiquement la charge des serveurs, limitant ainsi la consommation énergétique de l\'application.'
      }
    ]
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12 text-texte">
    <header class="flex flex-col gap-4 border-b border-primaire/30 pb-8">
      <div class="flex items-center gap-4">
        <div class="p-4 rounded-xl bg-primaire/10">
          <UIcon
            name="i-heroicons-bolt"
            class="w-10 h-10 text-primaire"
          />
        </div>
        <h1 class="text-4xl font-bold tracking-tight">
          Optimiser des applications informatiques
        </h1>
      </div>
      <p class="text-lg text-texte/80 max-w-3xl leading-relaxed mt-2">
        Cette compétence vise à proposer des applications informatiques optimisées.
        Au niveau 1, l'objectif est d'appréhender et construire des algorithmes. Au niveau 2, l'objectif est de sélectionner les algorithmes adéquats pour répondre à un problème donné.
      </p>
    </header>

    <CompetenceLevel
      title="Niveau 1 : Appréhender et construire des algorithmes"
      :items="acNiveau1"
    />

    <CompetenceLevel
      title="Niveau 2 : Sélectionner les algorithmes adéquats"
      :items="acNiveau2"
    />
    <section class="flex flex-col gap-6 mt-8">
      <div class="flex items-center gap-3 border-b border-primaire/30 pb-4">
        <UIcon
          name="i-heroicons-document-magnifying-glass"
          class="w-8 h-8 text-secondaire"
        />
        <h2 class="text-2xl font-semibold text-texte">
          Analyse Auto-réflexive
        </h2>
      </div>

      <div class="bg-primaire/5 rounded-xl p-6 border border-primaire/20 flex flex-col gap-4 text-texte/90 leading-relaxed">
        <h3 class="font-bold text-primaire mt-2">
          Mon implication et ma démarche d'analyse
        </h3>
        <p>
          En première année, ma démarche d'optimisation était très mathématique et théorique. J'ai été confronté à des problèmes d'algorithmique pure comme le voyageur de commerce ou la coloration de graphes. J'ai ainsi appris à évaluer la complexité de certains algorithmes et les différentes méthodes pour optimiser tous ces processus, que ce soit en termes de temps, d'espace ou de charge.
        </p>

        <h3 class="font-bold text-primaire mt-4">
          Mon évolution sur la compréhension des performances
        </h3>
        <p>
          Au fil des projets, ma vision de l'optimisation a évolué vers des cas concrets de développement Web. Lors de la SAE 4.01 sur le site Web, j'ai compris que l'optimisation ne se limitait pas aux boucles dans le code, mais englobait l'architecture complète : limiter les requêtes avec du cache HTTP, alléger les médias, et surtout, sécuriser les accès. Aujourd'hui, avec ce recul, je code plus efficacement en prenant en compte toutes ces problématiques.
        </p>
      </div>
    </section>

    <CompetenceNavigation
      previous-to="/competence/developper"
      previous-label="Compétence précédente : Développer"
      next-to="/competence/administrer"
      next-label="Compétence suivante : Administrer"
    />
  </div>
</template>
