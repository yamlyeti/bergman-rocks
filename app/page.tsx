'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'
import IntroSplash from '@/components/IntroSplash'

const stats = [
  { value: '20+', label: 'Years experience' },
  { value: 'AWS', label: 'GovCloud & enterprise' },
  { value: 'IaC', label: 'Terraform & CFN' },
  { value: '24/7', label: 'Production mindset' },
]

const capabilities = [
  'Terraform & CloudFormation',
  'AWS & GovCloud',
  'CI/CD & Automation',
  'Kubernetes & ECS',
  'Security & Compliance',
  'Platform Engineering',
]

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('bergman-intro-seen')
    setShowIntro(!seen)
    setReady(true)
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('bergman-intro-seen', '1')
    setShowIntro(false)
  }

  if (!ready) return null

  return (
    <>
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}

      <SiteLayout>
        <div className="hero-block hero-block--flashy">
          <div className="hero-shimmer-line" aria-hidden />
          <p className="eyebrow eyebrow--pill">DevOps Engineer · Full Stack Orchestrator</p>
          <h1 className="gradient-heading gradient-heading--shimmer">Josh Bergman</h1>
          <p className="lead">
            Infrastructure automation, cloud architecture, full stack orchestration, and reliable delivery.
          </p>
          <div className="btn-row">
            <Link href="/resume" className="btn btn--primary">
              View Resume
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Contact
            </Link>
            <Link href="/projects" className="btn btn--ghost">
              Projects
            </Link>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="content-grid content-grid--2">
          <section className="glass-panel glass-panel--featured">
            <div className="glass-panel__body">
              <p className="section-label">About</p>
              <h2 className="section-title">Building systems that hold up</h2>
              <p className="prose-muted">
                Over twenty years across enterprise cloud, DevOps, and platform engineering. I automate
                infrastructure, harden pipelines, and keep production environments stable — from AWS GovCloud
                to global distribution networks.
              </p>
              <Link href="/resume" className="link-back">
                Full resume →
              </Link>
            </div>
          </section>

          <section className="glass-panel glass-panel--featured">
            <div className="glass-panel__body">
              <p className="section-label">Focus</p>
              <h2 className="section-title">Core capabilities</h2>
              <div className="skill-grid">
                {capabilities.map((skill) => (
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
          <div className="link-cards">
            <a
              href="https://github.com/yamlyeti"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <span className="link-card__label">GitHub</span>
              <span className="link-card__value">@yamlyeti</span>
            </a>
            <a
              href="https://joshbergman.io"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <span className="link-card__label">Website</span>
              <span className="link-card__value">joshbergman.io</span>
            </a>
            <Link href="/contact" className="link-card">
              <span className="link-card__label">Email</span>
              <span className="link-card__value">Contact form →</span>
            </Link>
          </div>
        </section>
      </SiteLayout>
    </>
  )
}
