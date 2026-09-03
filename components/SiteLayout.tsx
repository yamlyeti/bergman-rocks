'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from './ThemeProvider'

interface SiteLayoutProps {
  children: React.ReactNode
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Skills', path: '/skills' },
]

export default function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="site">
      <div className="site-glow site-glow--left" aria-hidden />
      <div className="site-glow site-glow--right" aria-hidden />

      <header className="site-header">
        <Link href="/" className="site-header__brand">
          bergman.rocks
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`site-nav__link${pathname === item.path ? ' site-nav__link--active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </button>
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <span>Josh Bergman · DevOps Engineer</span>
        <span>© {new Date().getFullYear()} bergman.rocks</span>
      </footer>
    </div>
  )
}
