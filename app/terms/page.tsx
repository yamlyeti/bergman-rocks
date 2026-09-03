import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className="glass-panel">
        <div className="glass-panel__body">
          <p className="eyebrow">Legal</p>
          <h1 className="gradient-heading">Terms and Conditions</h1>
          <p className="lead">Terms and Conditions for SMS Services</p>

          <div className="content-grid" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h2 className="card__title">1. Program Description</h2>
              <p className="card__desc">
                By opting in, you agree to receive SMS messages from Joshua Bergman Real Estate AI
                regarding property inquiries, appointment reminders, and related real estate services.
              </p>
            </div>
            <div className="card">
              <h2 className="card__title">2. Message Frequency</h2>
              <p className="card__desc">
                Message frequency varies based on your interaction with our services. You may receive
                periodic updates related to your inquiries.
              </p>
            </div>
            <div className="card">
              <h2 className="card__title">3. Cost</h2>
              <p className="card__desc">
                Standard message and data rates may apply. Contact your carrier for details.
              </p>
            </div>
            <div className="card">
              <h2 className="card__title">4. Opt-Out &amp; Support</h2>
              <p className="card__desc">
                To stop: reply <strong style={{ color: 'var(--gold-bright)' }}>STOP</strong> to any message.
                For help: reply <strong style={{ color: 'var(--gold-bright)' }}>HELP</strong> or contact{' '}
                <a href="mailto:gokick@bergman.rocks" className="contact-link">gokick@bergman.rocks</a>.
              </p>
            </div>
            <div className="card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
              <h2 className="card__title">5. Disclaimer</h2>
              <p className="card__desc">
                Messages are sent on an as-needed basis. We are not responsible for delayed or undelivered
                messages due to carrier issues.
              </p>
            </div>
          </div>

          <div className="btn-row">
            <Link href="/" className="link-back">← Home</Link>
            <Link href="/policies" className="link-back">Privacy Policy →</Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
