import nodemailer from 'nodemailer'

export function getMailConfig() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SENDER_EMAIL || user
  const to = process.env.NOTIFY_EMAIL || user

  if (!user || !pass || !from || !to) {
    return null
  }

  return {
    from,
    to,
    transport: nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass },
    }),
  }
}

export interface ContactEmailPayload {
  firstName: string
  lastName: string
  email: string
  message: string
  sourceUrl: string
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const config = getMailConfig()
  if (!config) {
    throw new Error('SMTP not configured')
  }

  const fullName = `${payload.firstName} ${payload.lastName}`.trim()
  const text = [
    `New contact from bergman.rocks`,
    '',
    `Name: ${fullName}`,
    `Email: ${payload.email}`,
    `Message: ${payload.message || '(none)'}`,
    '',
    `Source: ${payload.sourceUrl}`,
    `Submitted: ${new Date().toISOString()}`,
  ].join('\n')

  await config.transport.sendMail({
    from: `"bergman.rocks" <${config.from}>`,
    to: config.to,
    replyTo: `"${fullName}" <${payload.email}>`,
    subject: `New contact from ${fullName}`,
    text,
  })
}
