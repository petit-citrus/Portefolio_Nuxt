<script setup lang="ts">
const contact = {
  nom: "SAULNIER SIMON",
  recherche: "STAGE INFORMATIQUE",
  formation: "BUT INFO 2éme année - Saint-Dié-des-Vosges",
  telephone: "06 08 13 44 05",
  email: "simonsaulnier40@gmail.com",
  localisation: "Saint-Dié-des-Vosges, 88100"
}

const competences = [
  "Backend", "Frontend", "Dev d'application", 
  "Base de donnée", "Rigueur", "Rédaction de document", 
  "Ponctualité", "Gestion du stress", "Communication"
]

const stackTechnique = [
  {
    nom: "Java",
    details: "Frameworks avancés (Spring boot, injection de dépendance), interfaces graphiques (Swing et JavaFX), Maven, JDBC, JPA/Jakarta Persistence avec Lombok. Projets de gestion avec architecture DAO/CRUD"
  },
  {
    nom: "Python",
    details: "Maîtrise de l'API Discord.py avec gestion des rôles et permissions, intégration avec des bases de données et connexion à des interfaces web. (en cours de découverte)"
  },
  {
    nom: "Bases de Données",
    details: "MySQL, intégration applicative: Connexion Java/MySQL via JDBC, environnement de développement (Docker, Compose), MySQL Workbench"
  },
  {
    nom: "Développement Web",
    details: "HTML5, CSS3, JavaScript, PHP. Conception de sites fonctionnels"
  },
  {
    nom: "C",
    details: "Maîtrise des concepts bas niveau, développement d'applications orientées terminal"
  }
]

const experiences = [
  {
    titre: "Nageur Sauveteur",
    entreprise: "SNSM (Grau-du-Roi)",
    periode: "Aout 2024 - Septembre 2024",
    missions: [
      "Surveillance de plage par tous les temps",
      "Entretenir le matériel afin de s'assurer de son état de fonctionnement.",
      "Travail en équipe afin d'accomplir au mieux les missions précédentes"
    ]
  },
  {
    titre: "Surveillant de baignade",
    entreprise: "Zendaya Séquoia Parc et Piscine Municipal Jean Langet (Rochefort)",
    periode: "Été 2023 et Été 2025",
    missions: [
      "Surveillance de complexe aquatique, pouvant comprendre plusieurs activités aquatiques (rivière, toboggan, etc.).",
      "Communication bilingue (français, anglais) pour application du règlement ou prévention",
      "Travail en équipe"
    ]
  },
  {
    titre: "Castreur de maïs",
    entreprise: "Agriculture",
    periode: "Juillet 2021 et Juillet 2022",
    missions: [
      "Marcher dans les rangs de maïs afin de castrer les plants."
    ]
  }
]

const benevolat = [
  {
    titre: "Secouriste sur évenement",
    entreprise: "SNSM",
    periode: "14 juillet 2024",
    missions: [
      "Secourisme et prise en charge de petit soins lors d'événements.",
      "Dialogue et explication de notre rôle"
    ]
  },
  {
    titre: "Officier Chronométreur",
    entreprise: "FFN",
    periode: "2021 - Aujourd'hui",
    missions: [
      "Chronométrage/Arbitrage durant les compétitions de natation.",
      "Rester concentré plusieurs heures d'affilé à réaliser des tâches répétitives"
    ]
  }
]

const diplomes = [
  "Bac général", 
  "BNSSA", 
  "PSE1 et PSE2", 
  "Permis B", 
  "Permis Bateau (côtier)"
]

const langues = [
  "Français", 
  "Anglais - B2", 
  "Espagnol - A1"
]

const hobbys = [
  "Ingénierie", 
  "Lecture", 
  "Natation", 
  "Secourisme"
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-10 text-texte">
    
    <!-- En-tête -->
    <header class="flex flex-col gap-4 border-b border-primaire/30 pb-8 text-center sm:text-left">
      <h1 class="text-5xl font-bold tracking-tight text-primaire">{{ contact.nom }}</h1>
      <h2 class="text-2xl font-semibold text-secondaire">{{ contact.recherche }}</h2>
      <p class="text-lg text-texte/80">{{ contact.formation }}</p>
      
      <div class="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
        <UBadge color="gray" variant="solid" icon="i-heroicons-phone">{{ contact.telephone }}</UBadge>
        <UBadge color="gray" variant="solid" icon="i-heroicons-envelope">{{ contact.email }}</UBadge>
        <UBadge color="gray" variant="solid" icon="i-heroicons-map-pin">{{ contact.localisation }}</UBadge>
      </div>
    </header>

    <!-- Grille Principale -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      <!-- Colonne Latérale (Compétences, Langues, etc.) -->
      <aside class="flex flex-col gap-8 lg:col-span-1">
        
        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon name="i-heroicons-cpu-chip" class="text-secondaire" /> Compétences
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="comp in competences" :key="comp" color="primary" variant="soft">{{ comp }}</UBadge>
          </div>
        </section>

        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon name="i-heroicons-language" class="text-secondaire" /> Langues
          </h3>
          <ul class="flex flex-col gap-2 text-texte/90">
            <li v-for="langue in langues" :key="langue" class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-primaire w-4 h-4" /> {{ langue }}
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon name="i-heroicons-academic-cap" class="text-secondaire" /> Diplômes & Permis
          </h3>
          <ul class="flex flex-col gap-2 text-texte/90">
            <li v-for="diplome in diplomes" :key="diplome" class="flex items-center gap-2">
              <UIcon name="i-heroicons-document-check" class="text-primaire w-4 h-4" /> {{ diplome }}
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon name="i-heroicons-heart" class="text-secondaire" /> Hobbys
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="hobby in hobbys" :key="hobby" color="gray" variant="outline">{{ hobby }}</UBadge>
          </div>
        </section>

      </aside>

      <!-- Colonne Principale (Parcours, Stack Technique) -->
      <main class="flex flex-col gap-10 lg:col-span-2">
        
        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-code-bracket-square" class="text-secondaire" /> Langages de programmation
          </h3>
          <div class="flex flex-col gap-4">
            <UCard v-for="tech in stackTechnique" :key="tech.nom" class="bg-fond/50 border border-primaire/20">
              <h4 class="font-bold text-primaire text-lg mb-2">{{ tech.nom }}</h4>
              <p class="text-sm text-texte/80 leading-relaxed">{{ tech.details }}</p>
            </UCard>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-briefcase" class="text-secondaire" /> Travail rémunéré
          </h3>
          <div class="flex flex-col gap-6 pl-2 border-l-2 border-primaire/20">
            <div v-for="exp in experiences" :key="exp.titre" class="relative pl-6">
              <div class="absolute w-3 h-3 bg-secondaire rounded-full -left-[23px] top-2"></div>
              <h4 class="font-bold text-lg text-texte">{{ exp.titre }}</h4>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-primaire mb-2">
                <span class="font-semibold">{{ exp.entreprise }}</span>
                <span class="hidden sm:inline text-texte/30">•</span>
                <span>{{ exp.periode }}</span>
              </div>
              <ul class="list-disc list-inside text-sm text-texte/80 flex flex-col gap-1">
                <li v-for="mission in exp.missions" :key="mission">{{ mission }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-hand-raised" class="text-secondaire" /> Bénévolat
          </h3>
          <div class="flex flex-col gap-6 pl-2 border-l-2 border-primaire/20">
            <div v-for="ben in benevolat" :key="ben.titre" class="relative pl-6">
              <div class="absolute w-3 h-3 bg-secondaire rounded-full -left-[23px] top-2"></div>
              <h4 class="font-bold text-lg text-texte">{{ ben.titre }}</h4>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-primaire mb-2">
                <span class="font-semibold">{{ ben.entreprise }}</span>
                <span class="hidden sm:inline text-texte/30">•</span>
                <span>{{ ben.periode }}</span>
              </div>
              <ul class="list-disc list-inside text-sm text-texte/80 flex flex-col gap-1">
                <li v-for="mission in ben.missions" :key="mission">{{ mission }}</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

    </div>
  </div>
</template>