import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

export default function PoliciesPage() {
  return (
    <SiteLayout>
      <div className="glass-panel">
        <div className="glass-panel__body">
          <p className="eyebrow">Legal</p>
          <h1 className="gradient-heading">Privacy Policy</h1>
          <p className="lead">Privacy Policy for Joshua Bergman Real Estate AI</p>

          <div className="content-grid" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h2 className="card__title">1. Information We Collect</h2>
              <p className="card__desc">
                We collect information you provide directly, including your phone number when you opt in
                to SMS communications, and any messages you send to us.
              </p>
            </div>
            <div className="card">
              <h2 className="card__title">2. No Sale of Data</h2>
              <p className="card__desc">
                We do not sell, trade, or otherwise transfer your personal information to outside parties.
              </p>
            </div>
            <div className="card">
              <h2 className="card__title">3. Data Security</h2>
              <p className="card__desc">
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            <div className="card">
              <h2 className="card__title">4. Your Choices</h2>
              <p className="card__desc">
                You may opt out of SMS communications at any time by replying{' '}
                <strong style={{ color: 'var(--gold-bright)' }}>STOP</strong> to any message.
              </p>
            </div>
          </div>

          <div className="btn-row">
            <Link href="/" className="link-back">← Home</Link>
            <Link href="/terms" className="link-back">Terms & Conditions →</Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
