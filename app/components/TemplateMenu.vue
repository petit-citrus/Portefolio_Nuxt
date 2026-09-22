<script setup>
const menuItems = [
  [
    { label: 'Accueil', to: '/', icon: 'i-heroicons-home' },
    { label: 'CV', to: '/cv', icon: 'i-heroicons-document-text' },
    { label: 'Contact', to: '/contact', icon: 'i-heroicons-envelope' }
  ],
  [
    {
      label: 'Compétences',
      icon: 'i-heroicons-academic-cap',
      children: [
        { label: 'Développer', to: '/competence/developper' },
        { label: 'Optimiser', to: '/competence/optimiser' },
        { label: 'Administrer', to: '/competence/administrer' },
        { label: 'Gérer', to: '/competence/gerer' },
        { label: 'Conduire', to: '/competence/conduire' },
        { label: 'Collaborer', to: '/competence/collaborer' }
      ]
    }
  ]
]
</script>

<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="menuItems"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-48' }"
    size="md"
  >
    <UButton
      label="NAVIGATION"
      variant="soft"
      color="primary"
      trailing-icon="i-lucide-chevron-down"
      size="md"
      class="font-bold rounded-full px-5 py-2 transition-all"
      :class="[open && 'ring-2 ring-primaire bg-primaire/20']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
