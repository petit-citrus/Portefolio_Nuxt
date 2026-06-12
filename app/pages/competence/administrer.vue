<script setup lang="ts">
const acNiveau1 = [
  {
    id: 'AC1',
    titre: 'Identifier les différents composants',
    description: "Reconnaître les matériels et logiciels d'un système numérique.",
    icon: 'i-heroicons-cpu-chip',
    traces: [
      {
        texte: "Lors de la SAE 1.03, j'ai dû schématiser et assimiler l'architecture logicielle complète d'un système, allant de la couche matérielle (BIOS) au gestionnaire d'amorçage (GRUB), puis au noyau, jusqu'aux interfaces utilisateur (Shell, APT).",
        image: "/img/admin/1-1.png",
        alt: "Schéma de l'architecture logicielle OS"
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Utiliser les fonctionnalités de base',
    description: "Maîtriser un système multitâches / multiutilisateurs.",
    icon: 'i-heroicons-command-line',
    traces: [
      {
        texte: "Installation et manipulation d'outils de développement (Java, JavaScript, C++) directement en ligne de commande via APT sous un environnement Linux Debian."
      }
    ]
  },
  {
    id: 'AC3',
    titre: "Installer et configurer un système d'exploitation",
    description: "Déploiement d'OS et d'outils de développement (ex: machines virtuelles, dual boot).",
    icon: 'i-heroicons-cog-6-tooth',
    traces: [
      {
        texte: "Création d'une clé USB bootable avec BalenaEtcher pour déployer une distribution Debian. J'ai opté pour une configuration en Dual Boot afin de séparer strictement mon environnement personnel de mon environnement de développement.",
        image: "/img/admin/1-3.png",
        alt: "Interface de flashage BalenaEtcher"
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Configurer un poste de travail',
    description: "Intégration d'un poste de travail dans un réseau d'entreprise.",
    icon: 'i-heroicons-computer-desktop',
    traces: [
      {
        texte: "En TP d'Architecture des Réseaux, j'ai configuré des commutateurs (Switches) pour segmenter les domaines de collision, et j'ai mis en place des VLANs pour isoler logiquement les postes de travail sur un même réseau physique.",
      }
    ]
  }
]

const acNiveau2 = [
  {
    id: 'AC1',
    titre: 'Concevoir et développer des applications communicantes',
    description: "Création d'applications capables de communiquer à travers le réseau.",
    icon: 'i-heroicons-globe-alt',
    traces: [
      {
        texte: "Lors de la SAE 2.03, j'ai installé et configuré un serveur web Apache sous Ubuntu. J'ai modifié les fichiers de configuration (apache2.conf) et géré le fichier /etc/hosts pour associer des noms de domaine locaux à mon serveur.",
      }
    ]
  },
  {
    id: 'AC2',
    titre: 'Utiliser des serveurs et des services réseaux virtualisés',
    description: "Mise en place et exploitation d'infrastructures virtuelles.",
    icon: 'i-heroicons-cloud',
    traces: [
      {
        texte: "J'ai configuré des routeurs (via Cisco Packet Tracer) en utilisant des protocoles de routage dynamique comme RIP (algorithme de Bellman-Ford) pour automatiser la mise à jour des tables de routage, et configuré des Virtual Hosts sous Apache. J'ai aussi vu durant mon stage comment se gère le réseau de la gendarmerie nationale.",
        image: "/img/admin/2-2.png",
        alt: "Topologie réseau avec routeurs"
      }
    ]
  },
  {
    id: 'AC3',
    titre: "Sécuriser les services et données d'un système",
    description: "Application des politiques de sécurité sur l'infrastructure réseau.",
    icon: 'i-heroicons-shield-check',
    traces: [
      {
        texte: "Lors de mon stage en entreprise, j'ai découvert comment gérer une infrastructure réseau dans un contexte militaire (gendarmerie), et donc quelles sont les différentes politiques de sécurité qui entourent les accès.",
        image: "/img/admin/2-3.png",
        alt: "Exemple de gestion de la sécurité au sein de la gendarmerie"
        
      }
    ]
  },
  {
    id: 'AC4',
    titre: 'Rédiger une documentation technique',
    description: "Rédaction de compte-rendus et notices techniques (en français et en anglais).",
    icon: 'i-heroicons-document-text',
    traces: [
      {
        texte: "Nous avons dû rédiger des documentations d'installation et des fichiers README.md (GitHub/GitLab), ainsi que de nombreux rapports ou divers documents techniques lors de toutes nos SAE (devis, rapport d'audit).",
        image: "/img/admin/2-4.png",
        alt: "Extrait d'un readme.md"

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
          <UIcon name="i-heroicons-server" class="w-10 h-10 text-primaire" />
        </div>
        <h1 class="text-4xl font-bold tracking-tight">Administrer des systèmes</h1>
      </div>
      <p class="text-lg text-texte/80 max-w-3xl leading-relaxed mt-2">
        Cette compétence consiste à installer, configurer et mettre à disposition des infrastructures et services.
        Au niveau 1, l'objectif est de savoir installer et configurer un poste de travail. Au niveau 2, l'objectif est de déployer des services dans une architecture réseau.
      </p>
    </header>

    <section class="flex flex-col gap-6">
      <h2 class="text-2xl font-semibold text-secondaire">Niveau 1 : Installer et configurer un poste de travail</h2>

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
      <h2 class="text-2xl font-semibold text-secondaire">Niveau 2 : Déployer des services dans une architecture réseau</h2>

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
        <h3 class="font-bold text-primaire mt-2">Mon implication</h3>
        <p>
          Durant mes différents projets, je me suis d'abord concentré sur l'installation matérielle et logicielle de base. J'ai préparé mon propre environnement de travail de développeur en installant un Dual Boot Debian/Windows afin d'avoir des espaces séparés et propres. Ensuite, je me suis impliqué dans la configuration de l'architecture réseau via des simulations en TP ou pendant mon stage en étant curieux sur la façon dont est géré un réseau intranet sécurisé avec des normes de sécurité importantes.
        </p>
        
        <h3 class="font-bold text-primaire mt-4">Mon évolution</h3>
        <p>
          Si, auparavant, je ne savais pas installer un OS sur un ordinateur ni configurer un serveur, aujourd'hui j'en suis capable. J'ai appris à monter un serveur distant et à installer un OS (Linux en particulier). J'ai utilisé Docker pour créer des mini-serveurs, et j'ai même installé un serveur Web avec Apache. Je désire apprendre à maîtriser NGINX à l'avenir et monter divers serveurs web. 
        </p>
      </div>
    </section>

    <div class="flex justify-between items-center mt-12 pt-6 border-t border-primaire/20">
      <UButton 
        to="/competence/optimiser" 
        icon="i-heroicons-arrow-left" 
        variant="ghost" 
        label="Précédent : Optimiser" 
        class="text-texte hover:text-primaire"
      />
      <UButton 
        to="/competence/gerer" 
        trailing-icon="i-heroicons-arrow-right" 
        color="primary" 
        variant="outline" 
        label="Suivant : Gérer" 
      />
    </div>
  </div>
</template>