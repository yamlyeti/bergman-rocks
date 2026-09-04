'use client'

import { useEffect, useRef, useState } from 'react'

interface IntroSplashProps {
  onComplete: () => void
}

const WORDMARK = 'bergman.rocks'

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [exiting, setExiting] = useState(false)
  const doneRef = useRef(false)

  const finish = () => {
    if (doneRef.current) return
    doneRef.current = true
    setExiting(true)
    setTimeout(onComplete, 650)
  }

  useEffect(() => {
    const timer = setTimeout(finish, 4500)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') finish()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [onComplete])

  return (
    <div
      className={`intro-splash${exiting ? ' intro-splash--exit' : ''}`}
      onClick={finish}
      role="presentation"
    >
      <div className="intro-splash__glow intro-splash__glow--left" aria-hidden />
      <div className="intro-splash__glow intro-splash__glow--right" aria-hidden />

      <div className="intro-splash__content">
        <p className="intro-splash__eyebrow">Welcome</p>

        <h1 className="intro-splash__wordmark" aria-label="bergman.rocks">
          {WORDMARK.split('').map((char, i) => (
            <span
              key={i}
              className="intro-splash__char"
              style={{ animationDelay: `${0.35 + i * 0.055}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="intro-splash__name">Josh Bergman</p>
        <p className="intro-splash__tag">DevOps Engineer · Full Stack Orchestrator</p>
      </div>

      <div className="intro-splash__progress" aria-hidden>
        <div className="intro-splash__progress-bar" />
      </div>

      <p className="intro-splash__skip">Click or press any key to continue</p>
    </div>
  )
}
