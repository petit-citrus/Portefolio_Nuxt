<script setup lang="ts">
import type { CompetenceItem } from '~/types/portfolio'

const acNiveau1: CompetenceItem[] = [
  {
    id: 'AC1',
    titre: 'Implémenter des conceptions simples',
    description: 'Traduction d\'une conception détaillée en code structuré.',
    icon: 'i-heroicons-command-line',
    traces: [
      {
        texte: 'Nous avons développé des sites en HTML/CSS sans backend pendant la première année de BUT INFO, notamment pour la SAE Web du premier S1 qui se concentrait dessus.',
        image: '/img/dev/1-1.png',
        alt: 'Capture d\'écran du code HTML/CSS'
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Élaborer des conceptions simples',
    description: 'Création de diagrammes et architecture de base avant le codage.',
    icon: 'i-heroicons-pencil-square',
    traces: [
      {
        texte: 'Nous avons réalisé des diagrammes afin de mieux visualiser et appréhender le travail, ce qui permet de mieux orienter le développement futur en s\'imaginant déjà le code dans son ensemble.',
        image: '/img/dev/1-2.png',
        alt: 'Image d\'un graphe réalisé'
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Faire des essais et évaluer leurs résultats',
    description: 'Mise en place de jeux d\'essais et validation des fonctionnalités en regard des spécifications.',
    icon: 'i-heroicons-beaker',
    traces: [
      {
        texte: 'Des tests sont nécessaires pour vérifier la bonne conformité de notre code. Nous en avons utilisé beaucoup, par exemple lors d\'un TP de développement mobile.',
        image: '/img/dev/1-3.png',
        alt: 'Image qui affiche les résultats de tests passés.'
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Développer des interfaces utilisateurs',
    description: 'Création d\'IHM/UI interactives et respectueuses de l\'ergonomie.',
    icon: 'i-heroicons-computer-desktop',
    traces: [
      {
        texte: 'Presque tous les sites web demandent à un moment ou à un autre d\'avoir une UI pour faciliter la navigation. Même au-delà de ça, nous avons travaillé sur des applications qui en demandaient aussi. Voici un exemple sur la SAE.1 du S2 sur lequel nous devions améliorer un système de calendrier avec ces mêmes interfaces UI (menu déroulant au clic...).',
        image: '/img/dev/1-4.png',
        alt: 'Extrait de l\'interface'
      }
    ]
  }
]

const acNiveau2: CompetenceItem[] = [
  {
    id: 'AC1',
    titre: 'Élaborer et implémenter les spécifications',
    description: 'Rédaction et implémentation des spécifications fonctionnelles et non fonctionnelles à partir des exigences.',
    icon: 'i-heroicons-document-text',
    traces: [
      {
        texte: 'Nous avons dû concevoir un cahier des charges pour réaliser un site de vote. Et nous avons dû nous y conformer lors du développement de notre application.',
        image: '/img/dev/2-1-1.png',
        alt: 'Capture des spécifications'
      },
      {
        texte: 'Résultat final sur l\'interface utilisateur.',
        image: '/img/dev/2-1-2.png',
        alt: 'Interface de l\'application'
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Appliquer des principes d\'accessibilité',
    description: 'Intégration des principes d\'accessibilité et d\'ergonomie dans le développement.',
    icon: 'i-heroicons-eye',
    traces: [
      {
        texte: 'Dans l\'idée de respecter l\'accès à internet pour tout le monde, nous avons dû prendre plusieurs mesures d\'accessibilité. Dans la SAE 4.01, nous avons dû ainsi travailler sur ce point-là en ajoutant des aides pour les personnes utilisant des lecteurs d\'écrans.',
        image: '/img/dev/2-2.png',
        alt: 'Aria label pour indiquer aux personnes mal/non voyantes l\'icône et son utilité'
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Adopter de bonnes pratiques',
    description: 'Utilisation de bonnes pratiques de conception et de programmation (patrons de conception, etc.).',
    icon: 'i-heroicons-check-badge',
    traces: [
      {
        texte: 'Durant la SAE 4.01, nous avons mis en œuvre l\'architecture MVC (Modèle-Vue-Contrôleur) à l\'aide de Symfony pour séparer les responsabilités.',
        image: '/img/dev/2-3.png',
        alt: 'Illustration de l\'architecture MVC'
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Vérifier et valider la qualité',
    description: 'Assurer la qualité de l\'application par des campagnes de tests rigoureuses.',
    icon: 'i-heroicons-shield-check',
    traces: [
      {
        texte: 'Pour les projets des SAE 4.01 et SAE 3.01, la validation de la qualité et des données a été assurée par une relecture attentive des attentes et par de nombreux tests poussés, afin de vérifier que tout fonctionnait bien dans le respect des limites et des demandes d\'origine.'
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
            name="i-heroicons-code-bracket"
            class="w-10 h-10 text-primaire"
          />
        </div>
        <h1 class="text-4xl font-bold tracking-tight">
          Réaliser un développement d'application
        </h1>
      </div>
      <p class="text-lg text-texte/80 max-w-3xl leading-relaxed mt-2">
        Cette compétence consiste à concevoir, coder, tester et intégrer une solution informatique pour un client.
        Au niveau 1, l'objectif est de développer des applications simples. Au niveau 2, l'objectif est de partir des exigences et aller jusqu'à une application complète.
      </p>
    </header>

    <CompetenceLevel
      title="Niveau 1 : Développer des applications informatiques simples"
      :items="acNiveau1"
    />

    <CompetenceLevel
      title="Niveau 2 : Partir des exigences et aller jusqu'à une application complète"
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
          Mon implication et mes ressources
        </h3>
        <p>
          Pendant mon stage et les diverses SAE, j'ai été amené à développer plusieurs sites web. D'abord en HTML et CSS simples, puis en PHP, avant une dernière montée en compétences vers des frameworks et des outils récents du Web.
          Mes réalisations sont ainsi allées des sites vitrines (SAE.1 Web) à des sites complets et sécurisés (Stage, SAE 3.01 et 4.01, ainsi que ce site).
        </p>

        <h3 class="font-bold text-primaire mt-4">
          Mon évolution et mon recul critique
        </h3>
        <p>
          Au cours de ces deux dernières années, j'ai appris à maîtriser et utiliser de nombreux outils avec une spécialisation en Web. Aujourd'hui, je suis capable à moi seul de développer un site web de A à Z.
          J'ai également appris à maîtriser deux frameworks : Symfony, abordé en cours et pendant mon stage, ainsi que Nuxt, que vous pouvez observer sur ce site mais également à travers les SAE 3.01 et 4.01 qui se concentraient sur la création et l'amélioration d'un site Web.
          Mais ce n'est pas tout, j'ai aussi appris avec le Web pendant mon stage à développer en React.
        </p>
      </div>
    </section>

    <CompetenceNavigation
      previous-to="/"
      previous-label="Retour à l'accueil"
      next-to="/competence/optimiser"
      next-label="Compétence suivante : Optimiser"
    />
  </div>
</template>
