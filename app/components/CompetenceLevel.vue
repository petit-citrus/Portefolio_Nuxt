<script setup lang="ts">
import type { CompetenceItem } from '~/types/portfolio'

defineProps<{
  title: string
  items: CompetenceItem[]
}>()
</script>

<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-semibold text-secondaire">
      {{ title }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard
        v-for="item in items"
        :key="item.id"
        class="bg-fond/50 border border-primaire/20 hover:border-primaire/50 transition-colors"
      >
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon
              :name="item.icon"
              class="w-6 h-6 text-primaire"
            />
            <h3 class="font-bold text-lg text-texte">
              {{ item.id }} - {{ item.titre }}
            </h3>
          </div>
        </template>

        <div class="flex flex-col gap-4">
          <p class="text-sm text-texte/80">
            {{ item.description }}
          </p>

          <div
            v-if="item.traces.length"
            class="flex flex-col gap-6 mt-2"
          >
            <div
              v-for="(trace, index) in item.traces"
              :key="`${item.id}-${index}`"
              class="p-4 rounded bg-black/20 border border-white/5 flex flex-col gap-3"
            >
              <p class="text-sm text-texte/90">
                {{ trace.texte }}
              </p>

              <div
                v-if="trace.audio"
                class="mt-2 w-full"
              >
                <p class="text-xs text-primaire mb-2 font-medium">
                  Écouter l'interview :
                </p>
                <audio
                  controls
                  class="w-full"
                  :src="trace.audio"
                >
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>

              <NuxtImg
                v-if="trace.image"
                :src="trace.image"
                :alt="trace.alt ?? ''"
                loading="lazy"
                format="webp"
                class="rounded-md border border-white/10 max-w-full h-auto shadow-sm"
              />
            </div>
          </div>

          <div
            v-else
            class="p-4 rounded bg-black/20 border border-white/5 text-sm italic text-texte/50"
          >
            Aucune trace pour le moment.
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
