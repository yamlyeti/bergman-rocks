import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

export default function ResumePage() {
  return (
    <SiteLayout>
      <div className="glass-panel">
        <div className="glass-panel__body">
          <p className="eyebrow">Resume</p>
          <h1 className="gradient-heading">Josh Bergman</h1>
          <p className="lead">
            Highly motivated professional with over 20 years of experience in diverse and dynamic
            environments. Proven ability to deliver high-quality results, meet deadlines, and exceed
            expectations. Skilled in advanced technology and application development with a strong
            record of cross-functional collaboration.
          </p>

          <section style={{ marginTop: '2.5rem' }}>
            <p className="section-label">Career</p>
            <h2 className="section-title">Experience</h2>

            <div className="timeline-item">
              <div className="timeline-item__header">
                <strong style={{ color: 'var(--text)' }}>Oddball</strong>
                <span className="prose-muted" style={{ fontSize: '0.88rem' }}>Feb 2025 – Present</span>
              </div>
              <div className="timeline-item__role">DevOps Engineer II</div>
              <ul>
                <li>Maintaining and creating automation for VA Flagship Mobile Application</li>
                <li>Maintaining iOS and Android builds for Mobile Application</li>
                <li>Tracking and monitoring alerts using DataDog</li>
                <li>Building AWS infrastructure in GovCloud</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-item__header">
                <strong style={{ color: 'var(--text)' }}>Apiture</strong>
                <span className="prose-muted" style={{ fontSize: '0.88rem' }}>Jul 2019 – Nov 2024</span>
              </div>
              <div className="timeline-item__role">Platform Engineer III</div>
              <ul>
                <li>Creating automation workflows with Terraform, CloudFormation, Jenkins, and Bitbucket</li>
                <li>AWS: EC2, Lambda, S3, Route53, CloudFormation, ECS, EKS, Secrets Manager, Parameter Store, Backup Service, RDS, Security Hub</li>
                <li>Managed EC2 fleet across Windows, Linux, and MacOS instances</li>
                <li>Managed security vulnerabilities and mitigated threats as necessary</li>
                <li>Led procurement and proof-of-concept for IDP solutions: JumpCloud, Fusion Auth, Ping, and Okta</li>
                <li>Deployed Okta tenant for Enterprise SSO and LDAP queries</li>
                <li>Designed New Relic Framework using IaC with automated pipeline webhook deployments</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-item__header">
                <strong style={{ color: 'var(--text)' }}>Schneider Electric</strong>
                <span className="prose-muted" style={{ fontSize: '0.88rem' }}>Sep 2008 – Jul 2019</span>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <div className="timeline-item__role">Enterprise DevOps Engineer <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Mar 2017 – Jul 2019)</span></div>
                <ul>
                  <li>Automating EC2 creation and working on CI/CD pipelines</li>
                  <li>Automation of end-to-end application setups</li>
                  <li>Managing and pushing automation code to GitHub</li>
                  <li>Created Jenkins pipelines to trigger builds on code commits</li>
                </ul>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <div className="timeline-item__role">Enterprise Cloud Engineer <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Mar 2014 – Mar 2017)</span></div>
                <ul>
                  <li>Setup Cloud Offer in AWS and provisioned infrastructure</li>
                  <li>One of four who created cloud provisioning for the Cloud Operations team</li>
                  <li>Provisioned EC2 servers and classic load balancers</li>
                  <li>Created and modified security groups</li>
                </ul>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <div className="timeline-item__role">Global Systems Administrator <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Sep 2008 – Mar 2014)</span></div>
                <ul>
                  <li>Technical support for distribution centers servicing RF units, printers, mobile carts, and computers</li>
                  <li>Traveled to new distribution center locations, setup equipment, and trained local users</li>
                  <li>Standardized warehouse equipment globally for the Oracle distribution center offering</li>
                  <li>Supported Oracle servers and shipping application</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginTop: '2.5rem' }}>
            <p className="section-label">Highlights</p>
            <h2 className="section-title">Accomplishments</h2>
            <ul className="prose-muted" style={{ paddingLeft: '1.1rem', lineHeight: 1.7 }}>
              <li>Created and maintained release process for product offering with automation and documentation</li>
              <li>Second place in company hackathon team project</li>
              <li>Provisioned event-driven runbook automation platform for EC2 fleet in IaC</li>
              <li>Migrated entire Amazon Linux 2 fleet to Amazon Linux 2023 in IaC</li>
              <li>Migrated Windows Server 2012 domain controllers to Windows Server 2022 in IaC</li>
              <li>Rebuilt entire Kerberos database and instances from scratch with synching in IaC</li>
            </ul>
          </section>

          <section style={{ marginTop: '2.5rem' }}>
            <p className="section-label">Background</p>
            <h2 className="section-title">Education</h2>
            <div className="content-grid content-grid--2">
              <div className="card">
                <h3 className="card__title" style={{ color: 'var(--text)' }}>Central Penn College</h3>
                <p className="card__desc">Network Management and Ethical Hacking · 2010 – 2012</p>
              </div>
              <div className="card">
                <h3 className="card__title" style={{ color: 'var(--text)' }}>Bolingbrook High School</h3>
                <p className="card__desc">1995 – 1999</p>
              </div>
            </div>
          </section>

          <Link href="/" className="link-back">
            ← Back to home
          </Link>
        </div>
      </div>
    </SiteLayout>
  )
}
