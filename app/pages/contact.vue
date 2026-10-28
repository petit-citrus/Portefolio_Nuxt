<script setup lang="ts">
useSeoMeta({
  title: 'Contact - Simon Saulnier',
  description: 'Contactez Simon Saulnier pour échanger au sujet d’un stage ou d’une opportunité en informatique.'
})

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const sendEmail = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    })

    successMessage.value = 'Votre message a bien été envoyé.'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch {
    errorMessage.value = 'Une erreur est survenue. Veuillez réessayer plus tard.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 text-texte">
    <section>
      <h1 class="text-5xl font-bold tracking-tight text-primaire mb-4">
        Me contacter
      </h1>
      <p class="text-lg text-texte/80 mb-8">
        Utilisez ce formulaire pour m’envoyer un message.
      </p>

      <form
        class="flex flex-col gap-4"
        @submit.prevent="sendEmail"
      >
        <p
          v-if="successMessage"
          role="status"
          class="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-300"
        >
          {{ successMessage }}
        </p>
        <p
          v-if="errorMessage"
          role="alert"
          class="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
        >
          {{ errorMessage }}
        </p>

        <UFormField
          label="Nom"
          name="name"
          required
        >
          <UInput
            v-model="name"
            type="text"
            placeholder="Votre nom"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Adresse e-mail"
          name="email"
          required
        >
          <UInput
            v-model="email"
            type="email"
            placeholder="vous@example.com"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Message"
          name="message"
          required
        >
          <UTextarea
            v-model="message"
            placeholder="Votre message"
            :rows="6"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          :label="isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'"
          :loading="isSubmitting"
          :disabled="isSubmitting"
          class="self-start"
        />
      </form>
    </section>
  </div>
</template>
