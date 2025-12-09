'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from './ThemeProvider'

export default function CommandMode() {
  const [commandMode, setCommandMode] = useState(false)
  const [command, setCommand] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const router = useRouter()
  const { setTheme } = useTheme()
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-help timer logic
  useEffect(() => {
    if (commandMode && !showHelp) {
      // Clear existing timer
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)

      // Set new timer
      idleTimerRef.current = setTimeout(() => {
        if (command.length === 0) { // Only show if user hasn't typed anything
          setShowHelp(true)
          setCommandMode(false)
        }
      }, 3000)
    }

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [commandMode, showHelp, command])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ':' && !commandMode && !showHelp) {
        e.preventDefault()
        setCommandMode(true)
      } else if (e.key === 'Escape') {
        if (showHelp) {
          setShowHelp(false)
        } else if (commandMode) {
          setCommandMode(false)
          setCommand('')
        }
      } else if (e.key === 'Enter' && commandMode) {
        // Handle command execution
        if (command === 'help' || command === 'h') {
          setShowHelp(true)
          setCommandMode(false)
          setCommand('')
          return
        } else if (command === 'github') {
          window.open('https://github.com/yamlyeti', '_blank')
        } else if (command === 'email') {
          // TODO: Add mailto link
          alert('Email functionality coming soon!')
        } else if (command === 'home') {
          router.push('/')
        } else if (command === 'boot') {
          window.location.href = '/'
        } else if (command === 'resume') {
          router.push('/resume')
        } else if (command === 'skills') {
          router.push('/skills')
        } else if (command === 'projects') {
          router.push('/projects')
        } else if (command === 'dark') {
          setTheme('dark')
        } else if (command === 'light') {
          setTheme('light')
        } else if (command === 'q!') {
          // Close command mode
        }
        setCommandMode(false)
        setCommand('')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [commandMode, command, showHelp, router, setTheme])

  return (
    <>
      {/* Help Window - Vim style */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="w-full max-w-3xl bg-[#1e1e1e] border-2 border-[#3a3a3a] rounded-lg shadow-2xl overflow-hidden">
            {/* Help Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 border-b border-[#3a3a3a] flex items-center justify-between">
              <span className="text-[#c0c0c0] text-sm font-mono">:help</span>
              <span className="text-[#808080] text-xs">Press ESC to close</span>
            </div>

            {/* Help Content */}
            <div className="p-6 font-mono text-sm text-[#c0c0c0] max-h-[70vh] overflow-y-auto">
              <div className="mb-4">
                <h2 className="text-terminal-cyan text-lg mb-2">BERGMAN.ROCKS - COMMAND REFERENCE</h2>
                <div className="text-[#808080] text-xs mb-4">Type : followed by a command and press Enter</div>
              </div>

              <div className="space-y-3">
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:help</span>
                  <span className="text-[#c0c0c0]">Show this help window</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:home</span>
                  <span className="text-[#c0c0c0]">Navigate to home page</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:boot</span>
                  <span className="text-[#c0c0c0]">Reload with boot sequence</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:resume</span>
                  <span className="text-[#c0c0c0]">View resume page</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:skills</span>
                  <span className="text-[#c0c0c0]">View skills page</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:projects</span>
                  <span className="text-[#c0c0c0]">View projects page</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:dark</span>
                  <span className="text-[#c0c0c0]">Switch to Dark Mode</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:light</span>
                  <span className="text-[#c0c0c0]">Switch to Light Mode</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:github</span>
                  <span className="text-[#c0c0c0]">Open GitHub profile</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:email</span>
                  <span className="text-[#c0c0c0]">Send email (coming soon)</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:q!</span>
                  <span className="text-[#c0c0c0]">Close command mode</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3a3a3a]">
                <div className="text-[#808080] text-xs">
                  <p className="mb-2">TIP: Press : anywhere to enter command mode</p>
                  <p>Press ESC to exit command mode or close this help window</p>
                </div>
              </div>
            </div>

            {/* Help Footer - Vim style */}
            <div className="bg-[#1e1e1e] px-4 py-2 border-t border-[#3a3a3a] text-xs text-[#808080]">
              :help - Press ESC to close
            </div>
          </div>
        </div>
      )}

      {/* Command Line */}
      {commandMode && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-50">
          <div className="bg-[#1e1e1e] border border-[#3a3a3a] rounded px-4 py-2 text-sm font-mono shadow-lg mx-4">
            <span className="text-terminal-cyan">:</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              autoFocus
              className="bg-transparent text-terminal-green outline-none ml-1 flex-1 w-[calc(100%-20px)]"
              placeholder="help"
            />
          </div>
        </div>
      )}
    </>
  )
}
