import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

const skillSections = [
  {
    title: 'Version Control',
    items: ['GitHub ⭐⭐⭐⭐⭐', 'BitBucket ⭐⭐⭐⭐⭐'],
  },
  {
    title: 'Languages & IaC',
    items: [
      'YAML ⭐⭐⭐⭐⭐',
      'HCL ⭐⭐⭐⭐⭐',
      'Bash ⭐⭐⭐⭐⭐',
      'CloudFormation ⭐⭐⭐⭐',
      'Python ⭐⭐⭐⭐',
      'Javascript ⭐⭐',
      'Golang ⭐',
      'Typescript ⭐',
    ],
  },
  {
    title: 'Security',
    id: 'security',
    items: [
      'AWS GovCloud ⭐⭐⭐⭐⭐',
      'FedRAMP & NIST ⭐⭐⭐⭐',
      'Qualys ⭐⭐⭐⭐',
      'Vulnerability Remediation ⭐⭐⭐⭐',
      'CIS Benchmarks ⭐⭐⭐',
      'Security Hub ⭐⭐⭐⭐',
      'Kali Linux ⭐⭐',
    ],
  },
  {
    title: 'Automation',
    items: [
      'Ansible ⭐⭐⭐⭐⭐',
      'Terraform ⭐⭐⭐⭐⭐',
      'StackStorm ⭐⭐⭐⭐⭐',
      'Jenkins ⭐⭐⭐⭐',
      'GitHub Actions ⭐⭐',
      'Salt ⭐⭐⭐',
    ],
  },
  {
    title: 'Monitoring',
    items: ['Grafana ⭐⭐⭐', 'New Relic ⭐⭐⭐', 'DataDog ⭐⭐'],
  },
  {
    title: 'Operating Systems',
    items: ['Linux ⭐⭐⭐⭐⭐', 'MacOS ⭐⭐⭐⭐⭐', 'Windows ⭐⭐⭐⭐⭐'],
  },
  {
    title: 'AWS',
    items: [
      'EC2 ⭐⭐⭐⭐⭐',
      'S3 ⭐⭐⭐⭐⭐',
      'Lambda ⭐⭐⭐⭐',
      'Route53 ⭐⭐⭐⭐⭐',
      'ECS / EKS ⭐⭐⭐⭐',
      'RDS ⭐⭐⭐⭐',
      'Secrets Manager ⭐⭐⭐⭐⭐',
      'VPC ⭐⭐⭐⭐⭐',
    ],
  },
]

export default function SkillsPage() {
  return (
    <SiteLayout>
      <div className="glass-panel">
        <div className="glass-panel__body">
          <p className="eyebrow">Expertise</p>
          <h1 className="gradient-heading">Technical Skills</h1>
          <p className="lead">Twenty years of hands-on platform, cloud, and automation experience.</p>

          <div className="content-grid" style={{ marginTop: '2rem' }}>
            {skillSections.map((section) => (
              <section key={section.title} id={section.id} className="skill-section">
                <h2 className="section-title">{section.title}</h2>
                <div className="skill-grid">
                  {section.items.map((item) => (
                    <div key={item} className="skill-item">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Link href="/" className="link-back">
            ← Back to home
          </Link>
        </div>
      </div>
    </SiteLayout>
  )
}
