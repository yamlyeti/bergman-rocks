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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('dark')
    const [snowMode, setSnowModeState] = useState<SnowMode>('normal')

    useEffect(() => {
        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') as Theme
        if (savedTheme) {
            setThemeState(savedTheme)
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            // Optional: respect system preference, but default to dark for this persona
            // setThemeState('light') 
        }
        // Load saved snow mode (default 'normal')
        const savedMode = localStorage.getItem('snowMode')
        if (savedMode === 'off' || savedMode === 'normal' || savedMode === 'blizzard') {
            setSnowModeState(savedMode)
        } else {
            // backward compatibility: support old boolean 'snow'
            const savedSnow = localStorage.getItem('snow')
            if (savedSnow === 'false') setSnowModeState('off')
            else if (savedSnow === 'true') setSnowModeState('normal')
        }
    }, [])

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
