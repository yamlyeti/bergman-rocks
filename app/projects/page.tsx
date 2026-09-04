import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

const projects = [
  {
    name: 'aurum.bergman.rocks',
    url: 'https://aurum.bergman.rocks',
    desc: 'Task management — refined daily driver with the Aurum design system.',
    tags: ['React', 'TypeScript', 'Vite', 'Supabase'],
  },
  {
    name: 'log.bergman.rocks',
    url: 'https://log.bergman.rocks',
    desc: 'Personal custody and incident logging with court-ready export.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind'],
  },
  {
    name: 'pos.bergman.rocks',
    url: 'https://pos.bergman.rocks',
    desc: 'Point-of-sale for pop-ups and events — tap-to-sell items, tender tracking, and end-of-day reporting.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
  },
  {
    name: 'smartagent.rocks',
    url: 'https://smartagent.rocks',
    desc: 'AI agent platform for real estate — 24/7 call and SMS handling, lead qualification, and showing bookings.',
    tags: ['React', 'Vite', 'Supabase', 'n8n'],
  },
  {
    name: 'crm.smartagent.rocks',
    url: 'https://crm.smartagent.rocks',
    desc: 'CRM for leads, pipeline, deals, and automations — synced with Smart Agent.',
    tags: ['React', 'Vite', 'Supabase', 'MUI'],
  },
  {
    name: 'bergman.rocks',
    url: 'https://www.bergman.rocks',
    desc: 'Professional portfolio — resume, skills, projects, and contact. Aurum black-and-gold design on Vercel.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    name: 'dev.bergman.rocks',
    url: 'https://dev.bergman.rocks',
    desc: 'The playground build — Catppuccin terminal vibes, BIOS boot sequence, falling snow, and vim-style command mode.',
    tags: ['Next.js', 'TypeScript', 'Netlify'],
  },
  {
    name: 'aries-dev.oddball.io',
    url: 'https://aries-dev.oddball.io',
    desc: 'Tech challenge simulator — Automated Routines for Intelligent Engineering Scenarios. 2025 Oddcore Hackathon winner.',
    tags: ['React', 'Vite', 'Netlify'],
  },
  {
    name: 'ppoker.bergman.rocks',
    url: 'https://ppoker.bergman.rocks',
    desc: 'Planning poker for agile teams.',
    tags: ['Node.js', 'Express', 'Socket.io'],
  },
  {
    name: 'tk-dev.bergman.rocks',
    url: 'https://tk-dev.bergman.rocks',
    desc: 'Time keeping and tracking system.',
    tags: ['React', 'TypeScript', 'Vite', 'Supabase'],
  },
]

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <div className="glass-panel">
        <div className="glass-panel__body">
          <p className="eyebrow">Portfolio</p>
          <h1 className="gradient-heading">Projects</h1>
          <p className="lead">Applications and tools across the bergman.rocks domain.</p>

          <div className="content-grid" style={{ marginTop: '2rem' }}>
            {projects.map((project) => (
              <article key={project.url} className="card">
                <h3 className="card__title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p className="card__desc">{project.desc}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
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
