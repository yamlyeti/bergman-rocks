import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="hero-block">
        <p className="eyebrow">DevOps Engineer</p>
        <h1 className="gradient-heading">Josh Bergman</h1>
        <p className="lead">
          Infrastructure automation, cloud architecture, and reliable delivery — built with the same
          black-and-gold precision as the rest of the bergman.rocks ecosystem.
        </p>
        <div className="btn-row">
          <Link href="/resume" className="btn btn--primary">
            View Resume
          </Link>
          <Link href="/projects" className="btn btn--ghost">
            Projects
          </Link>
          <a
            href="https://n8n.bergman.rocks/form/20e51a6a-4034-4aa3-af61-fcf0200fd404"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="content-grid content-grid--2">
        <section className="glass-panel">
          <div className="glass-panel__body">
            <p className="section-label">About</p>
            <h2 className="section-title">Building systems that hold up</h2>
            <p className="prose-muted">
              Over twenty years across enterprise cloud, DevOps, and platform engineering. I automate
              infrastructure, harden pipelines, and keep production environments stable — from AWS GovCloud
              to global distribution networks.
            </p>
          </div>
        </section>

        <section className="glass-panel">
          <div className="glass-panel__body">
            <p className="section-label">Focus</p>
            <h2 className="section-title">Core capabilities</h2>
            <div className="skill-grid">
              {[
                'Terraform & CloudFormation',
                'AWS & GovCloud',
                'CI/CD & Automation',
                'Kubernetes & ECS',
                'Security & Compliance',
                'Platform Engineering',
              ].map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
            <Link href="/skills" className="link-back">
              Full skills profile →
            </Link>
          </div>
        </section>
      </div>

      <section style={{ marginTop: '2.5rem' }}>
        <p className="section-label">Connect</p>
        <h2 className="section-title">Links</h2>
        <div className="skill-grid">
          <a href="https://github.com/yamlyeti" target="_blank" rel="noopener noreferrer" className="card contact-link" style={{ textDecoration: 'none' }}>
            GitHub · @yamlyeti
          </a>
          <a href="https://github.com/b3rgman" target="_blank" rel="noopener noreferrer" className="card contact-link" style={{ textDecoration: 'none' }}>
            GitHub · @b3rgman
          </a>
          <a href="https://github.com/jbergman-oddball" target="_blank" rel="noopener noreferrer" className="card contact-link" style={{ textDecoration: 'none' }}>
            GitHub · @jbergman-oddball
          </a>
          <a href="https://joshbergman.io" target="_blank" rel="noopener noreferrer" className="card contact-link" style={{ textDecoration: 'none' }}>
            joshbergman.io
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
