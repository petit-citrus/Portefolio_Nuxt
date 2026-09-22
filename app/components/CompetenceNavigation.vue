<script setup lang="ts">
defineProps<{
  previousTo?: string
  previousLabel?: string
  nextTo?: string
  nextLabel?: string
}>()
</script>

<template>
  <div class="flex justify-between items-center mt-12 pt-6 border-t border-primaire/20">
    <UButton
      v-if="previousTo"
      :to="previousTo"
      icon="i-heroicons-arrow-left"
      variant="ghost"
      :label="previousLabel"
      class="text-texte hover:text-primaire"
    />
    <span v-else />

    <UButton
      v-if="nextTo"
      :to="nextTo"
      trailing-icon="i-heroicons-arrow-right"
      color="primary"
      variant="outline"
      :label="nextLabel"
    />
  </div>
</template>
