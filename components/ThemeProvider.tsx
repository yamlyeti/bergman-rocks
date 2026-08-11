'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'
type SnowMode = 'off' | 'normal' | 'blizzard'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
    snowMode: SnowMode
    setSnowMode: (v: SnowMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function readInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark'
    const savedTheme = localStorage.getItem('theme')
    // Default to dark for this persona even if the system prefers light.
    return savedTheme === 'light' ? 'light' : 'dark'
}

function readInitialSnowMode(): SnowMode {
    if (typeof window === 'undefined') return 'normal'
    const savedMode = localStorage.getItem('snowMode')
    if (savedMode === 'off' || savedMode === 'normal' || savedMode === 'blizzard') {
        return savedMode
    }
    // backward compatibility: support old boolean 'snow'
    const savedSnow = localStorage.getItem('snow')
    if (savedSnow === 'false') return 'off'
    return 'normal'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(readInitialTheme)
    const [snowMode, setSnowModeState] = useState<SnowMode>(readInitialSnowMode)

    useEffect(() => {
        // Apply theme class to html element
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem('snowMode', snowMode)
    }, [snowMode])

    const toggleTheme = () => {
        setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, snowMode, setSnowMode: setSnowModeState }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
