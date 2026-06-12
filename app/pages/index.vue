<script setup lang="ts">
// On liste tes compétences pour générer les cartes de la grille facilement
const competences = [
  { titre: 'Développer', lien: '/competence/developper', icon: 'i-heroicons-code-bracket' },
  { titre: 'Optimiser', lien: '/competence/optimiser', icon: 'i-heroicons-bolt' },
  { titre: 'Administrer', lien: '/competence/administrer', icon: 'i-heroicons-server' },
  { titre: 'Gérer', lien: '/competence/gerer', icon: 'i-heroicons-circle-stack' },
  { titre: 'Conduire', lien: '/competence/conduire', icon: 'i-heroicons-map' },
  { titre: 'Collaborer', lien: '/competence/collaborer', icon: 'i-heroicons-user-group' }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16 sm:py-24 flex flex-col gap-20">
    
    <section class="text-center sm:text-left flex flex-col gap-6 items-center sm:items-start">
      <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-texte">
        Bonjour, je suis <span class="text-secondaire">Simon Saulnier</span>.
      </h1>
      <p class="text-lg sm:text-xl text-texte/80 max-w-2xl leading-relaxed">
        Bienvenue sur mon portfolio, vous trouverez ici mes différents projets organisés en compétences. Vous pouvez consulter mon CV sur la page dédiée et vous trouverez des exemples de mes travaux dans les ressources.
      </p>
      
      <div class="flex flex-wrap gap-4 mt-4">
        <UButton 
          to="/contact" 
          label="Me contacter" 
          size="xl" 
          class="bg-primaire hover:bg-primaire-light text-white transition-colors" 
        />
        <UButton 
          to="/competence/developper" 
          label="Explorer mes compétences" 
          variant="outline" 
          size="xl" 
          class="text-primaire ring-primaire hover:bg-primaire/10" 
        />
      </div>
    </section>

    <section class="flex flex-col gap-8">
      <h2 class="text-2xl sm:text-3xl font-semibold border-b border-primaire/30 pb-4 text-texte">
        Évaluation des compétences
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="comp in competences" 
          :key="comp.titre" 
          :to="comp.lien"
          class="group outline-none"
        >
          <UCard class="h-full bg-fond/50 backdrop-blur-sm border border-primaire/20 hover:border-secondaire transition-all group-hover:-translate-y-1 group-focus-visible:ring-2 ring-secondaire duration-300">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-lg bg-primaire/10 group-hover:bg-secondaire/10 transition-colors">
                <UIcon :name="comp.icon" class="w-8 h-8 text-primaire group-hover:text-secondaire transition-colors" />
              </div>
              <span class="font-medium text-xl text-texte">{{ comp.titre }}</span>
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>