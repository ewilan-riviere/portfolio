import { ofetch } from 'ofetch'
import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as {
    name: string
    email: string
    message: string
    conditions: boolean
    project: boolean
    honeypot: boolean
  }

  if (body.honeypot || !body.conditions) {
    return {
      status: 200,
      ok: true,
      body: 'success',
    }
  }

  const { discordWebhook } = useRuntimeConfig()
  const name = `${body.name} (${body.email})`
  const res = await ofetch.raw(discordWebhook, {
    method: 'POST',
    body: JSON.stringify({
      username: body.project ? `[PROJECT] ${name}` : name,
      content: `- *Name*: ${body.name}
- *Email*: ${body.email}
- *Project*: ${body.project ? 'Yes' : 'No'}
- *Message*:
${body.message}`,
    }),
  })

  if (res.status !== 204) {
    return {
      status: 500,
      ok: false,
      body: 'error',
    }
  }

  return {
    status: 200,
    ok: true,
    body: 'success',
  }
})
