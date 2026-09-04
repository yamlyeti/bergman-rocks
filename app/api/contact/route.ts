import { NextResponse } from 'next/server'
import { getMailConfig, sendContactEmail } from '@/lib/mail'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  if (!getMailConfig()) {
    return NextResponse.json(
      { error: 'Contact form is not configured.' },
      { status: 503 }
    )
  }

  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true })
  }

  const firstName = body.firstName?.trim() ?? ''
  const lastName = body.lastName?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message too long.' }, { status: 400 })
  }

  try {
    await sendContactEmail({
      firstName,
      lastName,
      email,
      message,
      sourceUrl: body.sourceUrl || 'https://bergman.rocks/contact',
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Delivery failed.' }, { status: 502 })
  }
}
