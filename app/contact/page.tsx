import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="glass-panel glass-panel--featured">
        <div className="glass-panel__body">
          <p className="eyebrow eyebrow--pill">Contact</p>
          <h1 className="gradient-heading gradient-heading--shimmer">Get in touch</h1>
          <p className="lead">
            Have a project, opportunity, or question? Send a message and it goes straight to my inbox.
          </p>

          <div className="contact-layout">
            <ContactForm />

            <aside className="contact-aside">
              <p className="section-label">Explore</p>
              <p className="prose-muted" style={{ marginBottom: '1.25rem' }}>
                US-based · DevOps, platform engineering, and cloud infrastructure.
              </p>
              <div className="contact-aside__tiles">
                <Link href="/resume" className="contact-tile">
                  <span className="contact-tile__label">Resume</span>
                  <span className="contact-tile__value">20+ years · full timeline</span>
                </Link>
                <Link href="/skills#security" className="contact-tile contact-tile--accent">
                  <span className="contact-tile__label">Security &amp; Compliance</span>
                  <span className="contact-tile__value">FedRAMP · GovCloud · CIS</span>
                </Link>
                <Link href="/projects" className="contact-tile">
                  <span className="contact-tile__label">Projects</span>
                  <span className="contact-tile__value">Aurum, log &amp; more</span>
                </Link>
                <Link href="/skills" className="contact-tile">
                  <span className="contact-tile__label">Skills</span>
                  <span className="contact-tile__value">AWS · Terraform · CI/CD</span>
                </Link>
                <a
                  href="https://github.com/yamlyeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-tile"
                >
                  <span className="contact-tile__label">GitHub</span>
                  <span className="contact-tile__value">@yamlyeti</span>
                </a>
              </div>
            </aside>
          </div>

          <Link href="/" className="link-back">
            ← Back to home
          </Link>
        </div>
      </div>
    </SiteLayout>
  )
}
