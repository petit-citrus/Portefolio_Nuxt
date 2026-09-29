import { Resend } from 'resend'

interface ContactBody {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ContactBody>(event)

  const name = body.name?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Les champs nom, e-mail et message sont obligatoires.'
    })
  }

  if (!emailPattern.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Veuillez fournir une adresse e-mail valide.'
    })
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'La longueur d’un ou plusieurs champs est excessive.'
    })
  }

  if (!config.resendApiKey || !config.resendFromEmail || !config.contactEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Le service e-mail est temporairement indisponible.'
    })
  }

  const resend = new Resend(config.resendApiKey)
  const { error } = await resend.emails.send({
    from: config.resendFromEmail,
    to: config.contactEmail,
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`
  })

  if (error) {
    throw createError({
      statusCode: 502,
      statusMessage: 'L’envoi de l’e-mail a échoué.'
    })
  }

  return { success: true }
})
