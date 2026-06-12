<script setup lang="ts">
const acNiveau1 = [
  {
    id: 'AC1',
    titre: 'Appréhender les besoins du client',
    description: "Comprendre les attentes du client et des utilisateurs finaux.",
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    traces: [
      {
        texte: "Pour le projet d'application de carte maritime (SAE 1.05), j'ai mené des interviews d'utilisateurs et croisé ces données avec une étude de marché pour identifier la fonctionnalité principale attendue : un accès très rapide à la sécurité (bouton d'urgence).",
        audio: "/img/conduire/1-1.mp3",
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Mettre en place les outils de gestion',
    description: "Déployer et utiliser les outils de suivi de projet.",
    icon: 'i-heroicons-wrench-screwdriver',
    traces: [
      {
        texte: "Pour faciliter la compréhension du projet et structurer les idées après les interviews, nous avons utilisé des outils de design pour créer des maquettes de l'application, visualisant ainsi concrètement la navigation et les menus.",
        image: "/img/conduire/1-2.png",
        alt: "Maquette de l'application maritime"
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Identifier les acteurs et les phases',
    description: "Reconnaître les différents intervenants et les étapes d'un cycle de développement.",
    icon: 'i-heroicons-queue-list',
    traces: [
      {
        texte: "Nous avons vu les différents métiers et étapes nécessaires dans le développement. De l'analyse du besoin au cahier des charges, jusqu'à la reprise du projet d'un tiers.",
        image: "/img/conduire/1-3.png",
        alt: "Sommaire d'un rapport sur l'analyse des besoins"
      }
    ]
  }
]

const acNiveau2 = [
  {
    id: 'AC1',
    titre: 'Identifier les processus',
    description: "Analyser les processus présents dans l'organisation pour améliorer les SI.",
    icon: 'i-heroicons-arrow-path-rounded-square',
    traces: []
  },
  {
    id: 'AC2',
    titre: 'Formaliser les besoins',
    description: "Rédiger et structurer les besoins exprimés par le client et l'utilisateur.",
    icon: 'i-heroicons-document-check',
    traces: [
      {
        texte: "Nous avons réalisé plusieurs cahiers des charges pour différents projets afin de donner un cadre clair et définir les attendus pour ces derniers.",
        image: "/img/conduire/2-2.png",
        alt: "Extrait du cahier des charges fonctionnel"
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Identifier les critères de faisabilité',
    description: "Évaluer la faisabilité technique, financière et temporelle d'un projet informatique.",
    icon: 'i-heroicons-scale',
    traces: [
      {
        texte: "L'analyse de faisabilité réalisée pour nos différents projets nous a permis de comprendre ce qui était techniquement réalisable dans les délais impartis, évitant ainsi de promettre des fonctionnalités impossibles à livrer à temps. (Voir trace précédente)"
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Définir une démarche de suivi',
    description: "Mettre en œuvre des méthodes de suivi (agiles, classiques) adaptées au projet.",
    icon: 'i-heroicons-calendar-days',
    traces: [
      {
        texte: "Pour piloter la réalisation de l'application de JDR, une planification a été mise en place via un diagramme de Gantt couplé à des To-Do Lists (TDL). Cela a permis de suivre l'avancée de chaque tâche (Étude de la demande, Analyse fonctionnelle, Développement) et de mieux organiser le travail en équipe.",
        image: "/img/conduire/2-4-1.png",
        alt: "Diagramme de Gantt et To Do List"
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
          <UIcon name="i-heroicons-briefcase" class="w-10 h-10 text-primaire" />
        </div>
        <h1 class="text-4xl font-bold tracking-tight">Conduire un projet</h1>
      </div>
      <p class="text-lg text-texte/80 max-w-3xl leading-relaxed mt-2">
        Cette compétence est centrée sur l'organisation et le pilotage de projets informatiques. 
        Au niveau 1, l'objectif est d'identifier les besoins métiers. Au niveau 2, il s'agit d'appliquer une démarche de suivi de projet.
      </p>
    </header>

    <section class="flex flex-col gap-6">
      <h2 class="text-2xl font-semibold text-secondaire">Niveau 1 : Identifier les besoins métiers</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UCard 
          v-for="ac in acNiveau1" 
          :key="ac.id" 
          class="bg-fond/50 border border-primaire/20 hover:border-primaire/50 transition-colors"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon :name="ac.icon" class="w-6 h-6 text-primaire" />
              <h3 class="font-bold text-lg text-texte">{{ ac.id }} - {{ ac.titre }}</h3>
            </div>
          </template>
          
          <div class="flex flex-col gap-4">
            <p class="text-sm text-texte/80">{{ ac.description }}</p>
            
            <div v-if="ac.traces && ac.traces.length > 0" class="flex flex-col gap-6 mt-2">
              <div v-for="(trace, index) in ac.traces" :key="index" class="p-4 rounded bg-black/20 border border-white/5 flex flex-col gap-3">
                <p class="text-sm text-texte/90">{{ trace.texte }}</p>
                
                <div v-if="trace.audio" class="mt-2 w-full">
                  <p class="text-xs text-primaire mb-2 font-medium">Écouter l'interview :</p>
                  <audio controls class="w-full">
                    <source :src="trace.audio" type="audio/mpeg">
                    Votre navigateur ne supporte pas l'élément audio.
                  </audio>
                </div>

                <img v-if="trace.image" :src="trace.image" :alt="trace.alt" class="rounded-md border border-white/10 max-w-full h-auto shadow-sm" />
              </div>
            </div>
            <div v-else class="p-4 rounded bg-black/20 border border-white/5 text-sm italic text-texte/50">
              Aucune trace pour le moment.
            </div>

          </div>
        </UCard>
      </div>
    </section>

    <section class="flex flex-col gap-6 mt-8">
      <h2 class="text-2xl font-semibold text-secondaire">Niveau 2 : Appliquer une démarche de suivi de projet</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UCard 
          v-for="ac in acNiveau2" 
          :key="ac.id" 
          class="bg-fond/50 border border-primaire/20 hover:border-primaire/50 transition-colors"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon :name="ac.icon" class="w-6 h-6 text-primaire" />
              <h3 class="font-bold text-lg text-texte">{{ ac.id }} - {{ ac.titre }}</h3>
            </div>
          </template>
          
          <div class="flex flex-col gap-4">
            <p class="text-sm text-texte/80">{{ ac.description }}</p>

            <div v-if="ac.traces && ac.traces.length > 0" class="flex flex-col gap-6 mt-2">
              <div v-for="(trace, index) in ac.traces" :key="index" class="p-4 rounded bg-black/20 border border-white/5 flex flex-col gap-3">
                <p class="text-sm text-texte/90">{{ trace.texte }}</p>
                <img v-if="trace.image" :src="trace.image" :alt="trace.alt" class="rounded-md border border-white/10 max-w-full h-auto shadow-sm" />
              </div>
            </div>
            <div v-else class="p-4 rounded bg-black/20 border border-white/5 text-sm italic text-texte/50">
              Aucune trace pour le moment.
            </div>

          </div>
        </UCard>
      </div>
    </section>

    <section class="flex flex-col gap-6 mt-8">
      <div class="flex items-center gap-3 border-b border-primaire/30 pb-4">
        <UIcon name="i-heroicons-document-magnifying-glass" class="w-8 h-8 text-secondaire" />
        <h2 class="text-2xl font-semibold text-texte">Analyse Auto-réflexive</h2>
      </div>
      
      <div class="bg-primaire/5 rounded-xl p-6 border border-primaire/20 flex flex-col gap-6 text-texte/90 leading-relaxed">
        <div>
          <h3 class="font-bold text-primaire">1. Ressources mobilisées</h3>
          <p>
            Pour mieux préparer et faire plus professionnel, nous avons utilisé divers outils comme des planificateurs, des To-Do Lists et l'apprentissage de langages comme LaTeX pour mieux rédiger des documents. En ce qui concerne directement le code, Git a été nécessaire pour mieux apprendre à gérer un code entre plusieurs développeurs. 
          </p>
        </div>
        <div>
          <h3 class="font-bold text-primaire">2. Implication dans la conduite</h3>
          <p>
            J'ai souvent endossé le rôle de chef de projet pour définir le chemin que je voyais le plus optimisé pour les projets. Un cas concret a été le rendu de documentation de l'API Toutatix pour le TP 1 où j'ai distribué les tâches à l'ensemble du groupe. J'ai aussi appris à gérer seul la charge de travail de deux personnes après l'abandon d'un camarade en cours de projet pendant la SAE 4.01.
          </p>
        </div>
        <div>
          <h3 class="font-bold text-primaire">3. Apprentissages et recul critique</h3>
          <p>
            Le principal constat que je tire de ces deux années est que les difficultés techniques sont souvent la conséquence d'une mauvaise organisation en amont. Sur la SAE 1.05, une analyse de la demande mal comprise nous a fait perdre du temps. Sur la SAE 3.01 de développement, le fait de vouloir tout faire en parallèle plutôt que de suivre le cahier des charges nous a fait prendre du retard. À l'inverse, la gestion de l'imprévu lors de la SAE 4.01 m'a appris à trancher dans les fonctionnalités (comme abandonner le carrousel visuel pour prioriser la sécurité) afin de respecter les délais, même si tout n'était pas parfait.
          </p>
        </div>
      </div>
    </section>

    <div class="flex justify-between items-center mt-12 pt-6 border-t border-primaire/20">
      <UButton 
        to="/competence/gerer" 
        icon="i-heroicons-arrow-left" 
        variant="ghost" 
        label="Compétence précédente : Gérer" 
        class="text-texte hover:text-primaire"
      />
      <UButton 
        to="/competence/collaborer" 
        trailing-icon="i-heroicons-arrow-right" 
        color="primary" 
        variant="outline" 
        label="Compétence suivante : Collaborer" 
      />
    </div>
  </div>
</template>