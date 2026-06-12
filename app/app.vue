<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

const title = 'Simon Saulnier - Portfolio'
const description = 'Portfolio de Simon Saulnier, Développeur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp class="bg-fond min-h-screen text-texte">
    
    <UHeader class="bg-fond text-texte border-b border-primaire/20">
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span class="font-bold text-white hidden sm:block">Simon.</span>
        </NuxtLink>

        <TemplateMenu />
      </template>

      <template #right>
        <UButton
          to="https://github.com/petit-citrus"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          class="text-texte hover:text-secondaire hover:bg-secondaire/10 transition-colors"
          variant="ghost"
        />
        
        <UButton
          to="https://www.linkedin.com/in/simon-saulnier-9948aa32b/"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          class="text-texte hover:text-secondaire hover:bg-secondaire/10 transition-colors"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain class="bg-fond">
      <NuxtPage />
    </UMain>

    <UFooter class="bg-fond border-t border-primaire/20 text-texte">
      <template #left>
        <p class="text-sm text-texte/70">
          © {{ new Date().getFullYear() }} SAULNIER Simon • Construit avec Nuxt
        </p>
      </template>

      <template #right>
        <UButton
          to="/contact"
          label="Me contacter"
          color="neutral"
          variant="ghost"
          class="text-texte hover:text-secondaire"
        />
      </template>
    </UFooter>
  </UApp>
</template>