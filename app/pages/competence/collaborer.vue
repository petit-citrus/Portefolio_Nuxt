<script setup lang="ts">
const acNiveau1 = [
  {
    id: 'AC1',
    titre: 'Appréhender l\'écosystème numérique',
    description: "Comprendre l'environnement et les divers acteurs de l'informatique.",
    icon: 'i-heroicons-globe-europe-africa',
    traces: [
      {
        texte: "Lors de la SAE 1.06, j'ai dû me glisser dans la peau d'un designer web puis d'un intégrateur. Cela m'a permis de comprendre les enjeux de la séparation des rôles et l'importance de respecter les standards imposés (W3C Validator) pour que le travail soit exploitable par tous.",
        image: "/img/collab/1-1.png",
        alt: "Extrait de code HTML standardisé"
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Découvrir les aptitudes requises',
    description: "Identifier les compétences nécessaires selon les secteurs informatiques.",
    icon: 'i-heroicons-academic-cap',
    traces: [
      {
        texte: "Nous avons développé des compétences diverses, de la cybersécurité au backend, en passant par la virtualisation. Ainsi, nous nous sommes plongés au cœur de plusieurs métiers et avons pu mieux comprendre les différentes compétences requises pour chacun."
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Identifier les statuts et rôles',
    description: "Comprendre les fonctions de chaque membre d'une équipe pluridisciplinaire.",
    icon: 'i-heroicons-users',
    traces: [
      {
        texte: "Pour le projet WEB du S4, nous étions en équipe de quatre. Je me suis chargé de la conteneurisation et du backend du projet, pendant que mes camarades s'occupaient plutôt du frontend. Nous avons donc délimité clairement les tâches pour ne pas avoir à tout faire."
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Acquérir les compétences interpersonnelles',
    description: "Développer ses soft skills pour travailler efficacement en équipe.",
    icon: 'i-heroicons-hand-raised',
    traces: [
      {
        texte: "Pendant mon stage, j'ai appris à m'exprimer auprès d'un supérieur pour lui demander des explications ou des consignes pour la suite de mon projet. J'ai aussi dû apprendre à m'adapter à un public de non-connaisseurs et à adapter mon langage en conséquence."
      }
    ]
  }
]

const acNiveau2 = [
  {
    id: 'AC1',
    titre: 'Comprendre la diversité et la structure',
    description: "Saisir la dimension de l'informatique dans une organisation (ESN, DSI...).",
    icon: 'i-heroicons-building-office',
    traces: [
      {
        texte: "Pendant mon stage, mon tuteur était chargé du développement du site web pour l'unité, ainsi que de plusieurs autres applications internes. Le CNAU (mon lieu de stage) faisait office de 'DSI' pour la gendarmerie, aidant les gendarmes sur les problèmes courants liés aux applications. De ce fait, j'ai vite découvert quels étaient les différents rôles de chacun."
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'S\'intégrer dans une organisation',
    description: "Appliquer une démarche pour intégrer une équipe informatique professionnelle.",
    icon: 'i-heroicons-user-plus',
    traces: [
      {
        texte: "Lors de la recherche de mon stage, j'ai envoyé plusieurs CV et lettres de motivation à divers organismes. Une fois accepté, j'ai dû apprendre à connaître les règles (explicites comme implicites) de l'équipe avec laquelle je travaillais, pour mieux communiquer avec ses membres et mieux cerner leurs besoins."
      }
    ]
  },
  {
    id: 'AC3',
    titre: 'Mobiliser les compétences interpersonnelles',
    description: "Mettre en pratique son savoir-être pour s'intégrer activement.",
    icon: 'i-heroicons-handshake',
    traces: [
      {
        texte: "Pendant mon stage, j'ai dû écouter et appliquer les consignes demandées, tout en proposant des améliorations sur ce qui m'était soumis afin d'aider au mieux le projet."
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Rendre compte',
    description: "Savoir rendre compte de son activité professionnelle à sa hiérarchie ou son équipe.",
    icon: 'i-heroicons-clipboard-document-check',
    traces: [
      {
        texte: "J'ai réalisé plusieurs soutenances pour les projets de SAE que nous avions à faire. De plus, pendant mon stage, je devais régulièrement rendre compte de mon avancement à mes supérieurs et à mon tuteur, afin d'en discuter et de proposer de nouvelles choses.",
        image: "/img/collab/2-4.png",
        alt: "Première page de mon rapport de stage"
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
          <UIcon name="i-heroicons-user-group" class="w-10 h-10 text-primaire" />
        </div>
        <h1 class="text-4xl font-bold tracking-tight">Collaborer au sein d'une équipe informatique</h1>
      </div>
      <p class="text-lg text-texte/80 max-w-3xl leading-relaxed mt-2">
        Cette compétence est centrée sur le travail en équipe et l'intégration dans des projets collaboratifs. 
        Au niveau 1, l'objectif est d'identifier ses aptitudes. Au niveau 2, il s'agit de situer son rôle et ses missions au sein d'une équipe.
      </p>
    </header>

    <section class="flex flex-col gap-6">
      <h2 class="text-2xl font-semibold text-secondaire">Niveau 1 : Identifier ses aptitudes pour travailler en équipe</h2>

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
      <h2 class="text-2xl font-semibold text-secondaire">Niveau 2 : Situer son rôle et ses missions</h2>

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
      
      <div class="bg-primaire/5 rounded-xl p-6 border border-primaire/20 flex flex-col gap-4 text-texte/90 leading-relaxed">
        <h3 class="font-bold text-primaire mt-2">Ma place et mon rôle dans l'équipe</h3>
        <p>
          Mon rôle au sein des équipes a beaucoup évolué au fil des projets. Au début, lors de la création de sites web simples, j'essayais de coder en parallèle avec mes camarades, sans réelle méthode. J'ai vite compris que c'était inefficace et qu'il fallait utiliser des outils professionnels comme Git. J'ai ensuite pris des rôles plus transverses, allant du design à l'architecture de base de données. L'expérience la plus marquante reste la SAE 4.01, où l'absence de mon binôme m'a obligé à endosser la totalité des rôles techniques et décisionnels. J'ai appris à m'adapter aux aléas humains et à ne compter que sur une méthodologie solide pour avancer.
        </p>

        <h3 class="font-bold text-primaire mt-4">Mes soft-skills et reddition de comptes</h3>
        <p>
          L'un de mes plus grands apprentissages concerne la capacité à me remettre en question et à présenter mon travail. En codant, je faisais énormément d'erreurs car je voulais aller trop vite ou car je ne me focalisais que sur une unique solution sans voir les alternatives. Pendant mon stage, j'ai ouvert les yeux sur d'autres chemins possibles lors du développement, ce qui m'a très certainement permis de gagner du temps sur le long terme. J'ai aussi appris à vulgariser ce que je faisais, à rendre compte à mes supérieurs, qui pouvaient vite être largués quand je rentrais dans la technique.
        </p>
      </div>
    </section>

    <div class="flex justify-between items-center mt-12 pt-6 border-t border-primaire/20">
      <UButton 
        to="/competence/conduire" 
        icon="i-heroicons-arrow-left" 
        variant="ghost" 
        label="Compétence précédente : Conduire" 
        class="text-texte hover:text-primaire"
      />
      <UButton 
        to="/" 
        trailing-icon="i-heroicons-home" 
        color="primary" 
        variant="solid" 
        label="Retour à l'accueil" 
      />
    </div>
  </div>
</template>