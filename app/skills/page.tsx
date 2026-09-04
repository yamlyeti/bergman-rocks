import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

type Proficiency = 'expert' | 'advanced' | 'proficient' | 'familiar'

interface Skill {
  name: string
  level: Proficiency
}

interface SkillSection {
  title: string
  id?: string
  items: Skill[]
}

const levelLabels: Record<Proficiency, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  proficient: 'Proficient',
  familiar: 'Familiar',
}

const skillSections: SkillSection[] = [
  {
    title: 'Version Control',
    items: [
      { name: 'GitHub', level: 'expert' },
      { name: 'BitBucket', level: 'expert' },
    ],
  },
  {
    title: 'Languages & IaC',
    items: [
      { name: 'YAML', level: 'expert' },
      { name: 'HCL', level: 'expert' },
      { name: 'Bash', level: 'expert' },
      { name: 'CloudFormation', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'JavaScript', level: 'familiar' },
      { name: 'Go', level: 'familiar' },
      { name: 'TypeScript', level: 'familiar' },
    ],
  },
  {
    title: 'Security',
    id: 'security',
    items: [
      { name: 'AWS GovCloud', level: 'expert' },
      { name: 'FedRAMP & NIST', level: 'advanced' },
      { name: 'Qualys', level: 'advanced' },
      { name: 'Vulnerability Remediation', level: 'advanced' },
      { name: 'CIS Benchmarks', level: 'proficient' },
      { name: 'Security Hub', level: 'advanced' },
      { name: 'Kali Linux', level: 'familiar' },
    ],
  },
  {
    title: 'Automation',
    items: [
      { name: 'Ansible', level: 'expert' },
      { name: 'Terraform', level: 'expert' },
      { name: 'StackStorm', level: 'expert' },
      { name: 'Jenkins', level: 'advanced' },
      { name: 'GitHub Actions', level: 'expert' },
      { name: 'Salt', level: 'proficient' },
    ],
  },
  {
    title: 'Monitoring',
    items: [
      { name: 'Grafana', level: 'proficient' },
      { name: 'New Relic', level: 'proficient' },
      { name: 'DataDog', level: 'advanced' },
    ],
  },
  {
    title: 'Operating Systems',
    items: [
      { name: 'Linux', level: 'expert' },
      { name: 'macOS', level: 'expert' },
      { name: 'Windows', level: 'expert' },
    ],
  },
  {
    title: 'AWS',
    items: [
      { name: 'EC2', level: 'expert' },
      { name: 'S3', level: 'expert' },
      { name: 'Lambda', level: 'advanced' },
      { name: 'Route 53', level: 'expert' },
      { name: 'ECS / EKS', level: 'advanced' },
      { name: 'RDS', level: 'advanced' },
      { name: 'Secrets Manager', level: 'expert' },
      { name: 'VPC', level: 'expert' },
    ],
  },
]

export default function SkillsPage() {
  return (
    <SiteLayout>
      <div className="glass-panel glass-panel--featured">
        <div className="glass-panel__body">
          <p className="eyebrow eyebrow--pill">Expertise</p>
          <h1 className="gradient-heading gradient-heading--shimmer">Technical Skills</h1>
          <p className="lead">
            Core competencies across platform engineering, cloud infrastructure, and automation.
          </p>

          <div className="content-grid skills-page">
            {skillSections.map((section) => (
              <section key={section.title} id={section.id} className="skill-section">
                <h2 className="section-title">{section.title}</h2>
                <ul className="skill-list">
                  {section.items.map((item) => (
                    <li key={item.name} className="skill-row">
                      <span className="skill-row__name">{item.name}</span>
                      <span className={`skill-row__level skill-row__level--${item.level}`}>
                        {levelLabels[item.level]}
                      </span>
                    </li>
                  ))}
                </ul>
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
