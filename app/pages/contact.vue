<script setup lang="ts">
import { cvData } from '~/data/cv'

useSeoMeta({
  title: 'Contact - Simon Saulnier',
  description: 'Contactez Simon Saulnier pour échanger au sujet d’un stage ou d’une opportunité en informatique.'
})

const {
  contact,
  competences,
  stackTechnique,
  stages,
  projets,
  experiences,
  benevolat,
  diplomes,
  langues,
  hobbys
} = cvData
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-10 text-texte">
    <!-- En-tête -->
    <header class="flex flex-col gap-4 border-b border-primaire/30 pb-8 text-center sm:text-left">
      <h1 class="text-5xl font-bold tracking-tight text-primaire">
        {{ contact.nom }}
      </h1>
      <h2 class="text-2xl font-semibold text-secondaire">
        {{ contact.recherche }}
      </h2>
      <p class="text-lg text-texte/80">
        {{ contact.formation }}
      </p>

      <div class="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
        <a :href="`tel:${contact.telephone.replaceAll(' ', '')}`">
          <UBadge
            color="neutral"
            variant="solid"
            icon="i-heroicons-phone"
          >
            {{ contact.telephone }}
          </UBadge>
        </a>
        <a :href="`mailto:${contact.email}`">
          <UBadge
            color="neutral"
            variant="solid"
            icon="i-heroicons-envelope"
          >
            {{ contact.email }}
          </UBadge>
        </a>
        <UBadge
          color="neutral"
          variant="solid"
          icon="i-heroicons-map-pin"
        >
          {{ contact.localisation }}
        </UBadge>
      </div>
    </header>

    <!-- Grille Principale -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <!-- Colonne Latérale (Compétences, Langues, etc.) -->
      <aside class="flex flex-col gap-8 lg:col-span-1">
        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon
              name="i-heroicons-cpu-chip"
              class="text-secondaire"
            /> Compétences
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="comp in competences"
              :key="comp"
              color="primary"
              variant="soft"
            >
              {{ comp }}
            </UBadge>
          </div>
        </section>

        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon
              name="i-heroicons-language"
              class="text-secondaire"
            /> Langues
          </h3>
          <ul class="flex flex-col gap-2 text-texte/90">
            <li
              v-for="langue in langues"
              :key="langue"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="text-primaire w-4 h-4"
              /> {{ langue }}
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon
              name="i-heroicons-academic-cap"
              class="text-secondaire"
            /> Diplômes & Permis
          </h3>
          <ul class="flex flex-col gap-2 text-texte/90">
            <li
              v-for="diplome in diplomes"
              :key="diplome"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-heroicons-document-check"
                class="text-primaire w-4 h-4"
              /> {{ diplome }}
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-texte border-b border-primaire/20 pb-2 mb-4 flex items-center gap-2">
            <UIcon
              name="i-heroicons-heart"
              class="text-secondaire"
            /> Hobbys
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="hobby in hobbys"
              :key="hobby"
              color="neutral"
              variant="outline"
            >
              {{ hobby }}
            </UBadge>
          </div>
        </section>
      </aside>

      <!-- Colonne Principale (Parcours, Stack Technique) -->
      <main class="flex flex-col gap-10 lg:col-span-2">
        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon
              name="i-heroicons-code-bracket-square"
              class="text-secondaire"
            /> Maîtrise de l'informatique
          </h3>
          <div class="flex flex-col gap-4">
            <UCard
              v-for="tech in stackTechnique"
              :key="tech.nom"
              class="bg-fond/50 border border-primaire/20"
            >
              <h4 class="font-bold text-primaire text-lg mb-2">
                {{ tech.nom }}
              </h4>
              <p class="text-sm text-texte/80 leading-relaxed">
                {{ tech.details }}
              </p>
            </UCard>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon
              name="i-heroicons-computer-desktop"
              class="text-secondaire"
            /> Stage et Projets
          </h3>
          <div class="flex flex-col gap-6 pl-2 border-l-2 border-primaire/20">
            <div
              v-for="stage in stages"
              :key="stage.titre"
              class="relative pl-6"
            >
              <div class="absolute w-3 h-3 bg-secondaire rounded-full -left-[23px] top-2" />
              <h4 class="font-bold text-lg text-texte">
                {{ stage.titre }}
              </h4>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-primaire mb-2">
                <span class="font-semibold">{{ stage.entreprise }}</span>
                <span
                  v-if="stage.periode"
                  class="hidden sm:inline text-texte/30"
                >•</span>
                <span>{{ stage.periode }}</span>
              </div>
              <ul class="list-disc list-inside text-sm text-texte/80 flex flex-col gap-1">
                <li
                  v-for="mission in stage.missions"
                  :key="mission"
                >
                  {{ mission }}
                </li>
              </ul>
            </div>

            <div
              v-for="projet in projets"
              :key="projet.titre"
              class="relative pl-6"
            >
              <div class="absolute w-3 h-3 bg-secondaire rounded-full -left-[23px] top-2" />
              <h4 class="font-bold text-lg text-texte">
                {{ projet.titre }}
              </h4>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-primaire mb-2">
                <span class="font-semibold">{{ projet.entreprise }}</span>
              </div>
              <ul class="list-disc list-inside text-sm text-texte/80 flex flex-col gap-1">
                <li
                  v-for="mission in projet.missions"
                  :key="mission"
                >
                  {{ mission }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon
              name="i-heroicons-briefcase"
              class="text-secondaire"
            /> Travail rémunéré
          </h3>
          <div class="flex flex-col gap-6 pl-2 border-l-2 border-primaire/20">
            <div
              v-for="exp in experiences"
              :key="exp.titre"
              class="relative pl-6"
            >
              <div class="absolute w-3 h-3 bg-secondaire rounded-full -left-[23px] top-2" />
              <h4 class="font-bold text-lg text-texte">
                {{ exp.titre }}
              </h4>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-primaire mb-2">
                <span class="font-semibold">{{ exp.entreprise }}</span>
                <span class="hidden sm:inline text-texte/30">•</span>
                <span>{{ exp.periode }}</span>
              </div>
              <ul
                v-if="exp.missions && exp.missions.length"
                class="list-disc list-inside text-sm text-texte/80 flex flex-col gap-1"
              >
                <li
                  v-for="mission in exp.missions"
                  :key="mission"
                >
                  {{ mission }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-texte border-b border-primaire/30 pb-2 mb-6 flex items-center gap-2">
            <UIcon
              name="i-heroicons-hand-raised"
              class="text-secondaire"
            /> Bénévolat
          </h3>
          <div class="flex flex-col gap-6 pl-2 border-l-2 border-primaire/20">
            <div
              v-for="ben in benevolat"
              :key="ben.titre"
              class="relative pl-6"
            >
              <div class="absolute w-3 h-3 bg-secondaire rounded-full -left-[23px] top-2" />
              <h4 class="font-bold text-lg text-texte">
                {{ ben.titre }}
              </h4>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-primaire mb-2">
                <span class="font-semibold">{{ ben.entreprise }}</span>
                <span
                  v-if="ben.periode"
                  class="hidden sm:inline text-texte/30"
                >•</span>
                <span>{{ ben.periode }}</span>
              </div>
              <ul
                v-if="ben.missions && ben.missions.length"
                class="list-disc list-inside text-sm text-texte/80 flex flex-col gap-1"
              >
                <li
                  v-for="mission in ben.missions"
                  :key="mission"
                >
                  {{ mission }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
