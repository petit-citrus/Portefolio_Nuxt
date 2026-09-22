<script setup lang="ts">
import type { CompetenceItem } from '~/types/portfolio'

const acNiveau1: CompetenceItem[] = [
  {
    id: 'AC1',
    titre: 'Mettre à jour et interroger une base de données',
    description: 'Utilisation de requêtes directes ou via une application pour une base de données relationnelle.',
    icon: 'i-heroicons-table-cells',
    traces: [
      {
        texte: 'Lors des SAE 1.04 et 2.04, j\'ai écrit et exécuté des requêtes SQL pour insérer des données concrètes dans les tables (par exemple, pour alimenter les rayons d\'un supermarché avec INSERT INTO) et lier ces données entre elles.',
        image: '/img/gerer/1-1.png',
        alt: 'Extrait de requêtes d\'insertion SQL'
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Visualiser des données',
    description: 'Restitution et affichage d\'informations pertinentes pour l\'entreprise.',
    icon: 'i-heroicons-chart-pie',
    traces: [
      {
        texte: 'J\'ai modélisé nos bases de données via des schémas relationnels sur MySQL Workbench. Ensuite, les données ont été extraites pour générer des représentations visuelles, comme des boîtes à moustaches, utiles pour une analyse mathématique et statistique.',
        image: '/img/gerer/1-2.png',
        alt: 'Schéma relationnel sur Workbench'
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Concevoir une base de données relationnelle',
    description: 'Création d\'un modèle à partir d\'un cahier des charges.',
    icon: 'i-heroicons-circle-stack',
    traces: [
      {
        texte: 'À partir d\'énoncé textuel décrivant les besoins (informations clients, réservations), j\'ai établie des relations et conçu des bases de données.',
        image: '/img/gerer/1-3.png',
        alt: 'Texte ou les relations ont été mis en surbrillance'
      }
    ]
  }
]

const acNiveau2: CompetenceItem[] = [
  {
    id: 'AC1',
    titre: 'Optimiser les modèles de données',
    description: 'Améliorer les performances et la structure des modèles de données de l\'entreprise.',
    icon: 'i-heroicons-adjustments-horizontal',
    traces: [
      {
        texte: 'Pour automatiser des tâches et garantir la cohérence en temps réel, nous avons appris à implémenter des triggers en SQL ou alors établir des DELETE ON CASCADE permettant de mieux optimiser et gérer une base de données.',
        image: '/img/gerer/2-1.png',
        alt: 'DELETE ON CASACADE'
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Assurer la confidentialité des données',
    description: 'Garantir l\'intégrité et la sécurité des données stockées.',
    icon: 'i-heroicons-shield-exclamation',
    traces: [
      {
        texte: 'Lors de la SAE de développement web pendant le S4, j\'ai sécurisé la base de données en hachant les mots de passe et en garantissant l\'intégrité référentielle grâce à des transactions SQL (commit/rollback).',
        image: '/img/gerer/2-1.png',
        alt: 'Transaction SQL'
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Organiser la restitution de données',
    description: 'Programmation et visualisation avancée pour l\'exploitation des données.',
    icon: 'i-heroicons-presentation-chart-bar',
    traces: [
      {
        texte: 'Sur le projet web du S3, j\'ai organisé la restitution des données de lecture des élèves en développant un tableau de bord dynamique pour les professeurs, générant des graphiques interactifs via Chart.js alimentés par des données JSON lui même créer à partir des informations de la base de données.',
        image: '/img/gerer/2-3.png',
        alt: 'Charte graphique'
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Manipuler des données hétérogènes',
    description: 'Traitement de données issues de sources et de formats multiples.',
    icon: 'i-heroicons-document-duplicate',
    traces: [
      {
        texte: 'Nous avons vu comment extraire des données sous différent format, en particulier JSON (mobile et pendant mon stage) et CSV',
        image: '/img/gerer/2-4.png',
        alt: 'Traitement et convertion d\'un JSON'
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
            name="i-heroicons-circle-stack"
            class="w-10 h-10 text-primaire"
          />
        </div>
        <h1 class="text-4xl font-bold tracking-tight">
          Gérer des données de l'information
        </h1>
      </div>
      <p class="text-lg text-texte/80 max-w-3xl leading-relaxed mt-2">
        Cette compétence vise à concevoir, gérer, administrer et exploiter les données de l'entreprise.
        Au niveau 1, l'objectif est de concevoir et mettre en place une base. Au niveau 2, l'objectif est d'optimiser une base de données et mettre en œuvre la sécurité.
      </p>
    </header>

    <CompetenceLevel
      title="Niveau 1 : Concevoir et mettre en place une base de données"
      :items="acNiveau1"
    />

    <CompetenceLevel
      title="Niveau 2 : Optimiser et sécuriser une base de données"
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
          Mon approche de la conception et de l'optimisation
        </h3>
        <p>
          Durant mes premières SAE (et ce jusqu'a à la SAE 3.01). Mes bases de données n'était pas terrible. Plusieurs erreurs basique, des optimisations sur les tables à faire et diverse probème compliquant l'ensemble du dévellopement sur la suite. Mais à force d'erreur et à découvrir de nouveau outils pour mieux les gérer. Mes bases sont de mieux en mieux dévelloper et exploiter.
        </p>

        <h3 class="font-bold text-primaire mt-4">
          Prise de recul et sécurité des données
        </h3>
        <p>
          Au fur et à mesure de mon parcours, la sécurité et l'intégrité des données sont devenues centrales. Dans des projets comme Votendo, je ne pouvais plus me contenter de simples requêtes SQL. J'ai dû mettre en place des transactions pour m'assurer qu'un vote n'était enregistré que si l'état de l'utilisateur était correctement mis à jour en parallèle. J'ai également appris à utiliser des contraintes de suppression en cascade pour éviter les données orphelines, et à utiliser des ORM (comme Doctrine) pour sécuriser les requêtes contre les injections.
        </p>
      </div>
    </section>

    <CompetenceNavigation
      previous-to="/competence/administrer"
      previous-label="Compétence précédente : Administrer"
      next-to="/competence/conduire"
      next-label="Compétence suivante : Conduire"
    />
  </div>
</template>
