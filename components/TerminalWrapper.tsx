'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

interface TerminalWrapperProps {
    children: React.ReactNode
}

export default function TerminalWrapper({ children }: TerminalWrapperProps) {
    const pathname = usePathname()
    const { theme, toggleTheme } = useTheme()

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Resume', path: '/resume' },
        { name: 'Skills', path: '/skills' },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden relative border transition-colors duration-500"
            style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border)'
            }}
        >
            {/* Terminal Header / Tmux Status Bar */}
            <div
                className="flex items-center justify-between border-b transition-colors duration-500"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border)'
                }}
            >

                {/* Left: Window Controls + Session Name */}
                <div
                    className="flex items-center px-4 py-3 gap-4 h-full transition-colors duration-500"
                    style={{ backgroundColor: 'var(--bg-primary)' }}
                >
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#f38ba8]" /> {/* Red */}
                        <div className="w-3 h-3 rounded-full bg-[#fab387]" /> {/* Yellow/Orange */}
                        <div className="w-3 h-3 rounded-full bg-[#a6e3a1]" /> {/* Green */}
                    </div>
                    <div className="text-sm font-mono hidden sm:block" style={{ color: 'var(--text-primary)' }}>
                        <span style={{ color: 'var(--session-text)' }}>tmux</span>
                        <span style={{ color: 'var(--at-text)' }}>@</span>
                        <span style={{ color: 'var(--domain-text)' }}>bergman.rocks</span>
                    </div>
                </div>

                {/* Right: Navigation Tabs + Theme Toggle */}
                <div className="flex items-center h-full gap-2 pr-2">
                    <nav className="flex h-full items-center px-2 overflow-x-auto no-scrollbar gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`
                    flex items-center px-4 py-1 text-sm font-mono transition-all duration-500 relative group rounded-md
                  `}
                                    style={{
                                        backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-tertiary)',
                                        color: isActive ? (theme === 'dark' ? '#1e1e2e' : '#eff1f5') : 'var(--text-primary)',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        opacity: isActive ? 1 : 0.8,
                                        boxShadow: isActive ? `0 0 10px var(--accent)` : 'none'
                                    }}
                                >
                                    {/* Separator / Arrow effect (pseudo-element simulation) */}
                                    <span className="mr-2 opacity-70">{isActive ? '●' : '○'}</span>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-1.5 rounded-md transition-all duration-500 hover:bg-opacity-20 hover:scale-110 active:scale-95"
                        style={{
                            color: 'var(--text-primary)',
                            backgroundColor: 'var(--bg-tertiary)'
                        }}
                        aria-label="Toggle Theme"
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {theme === 'dark' ? (
                                <SunIcon className="w-4 h-4" />
                            ) : (
                                <MoonIcon className="w-4 h-4" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Terminal Body */}
            <div
                className="min-h-[600px] transition-colors duration-500"
                style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)'
                }}
            >
                {children}
            </div>
        </motion.div>
    )
}
