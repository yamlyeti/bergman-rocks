'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from './ThemeProvider'

export default function CommandMode() {
  const [commandMode, setCommandMode] = useState(false)
  const [command, setCommand] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const router = useRouter()
  const { setTheme, setSnowMode } = useTheme()
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [invalidCommand, setInvalidCommand] = useState<string | null>(null)

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
        let handled = false
        if (command === 'help' || command === 'h') {
          setShowHelp(true)
          handled = true
        } else if (command === 'github') {
          window.open('https://github.com/yamlyeti', '_blank')
          handled = true
        } else if (command === 'contact' || command === 'contactme') {
          window.open('https://n8n.srv1123629.hstgr.cloud/form/20e51a6a-4034-4aa3-af61-fcf0200fd404', '_blank')
          handled = true
        } else if (command === 'snow-on') {
          setSnowMode('normal')
          handled = true
        } else if (command === 'snow-off') {
          setSnowMode('off')
          handled = true
        } else if (command === 'blizzard') {
          setSnowMode('blizzard')
          handled = true
        } else if (command === 'email') {
          // TODO: Add mailto link
          alert('Email functionality coming soon!')
          handled = true
        } else if (command === 'home') {
          router.push('/')
          handled = true
        } else if (command === 'boot') {
          window.location.href = '/'
          handled = true
        } else if (command === 'resume') {
          router.push('/resume')
          handled = true
        } else if (command === 'skills') {
          router.push('/skills')
          handled = true
        } else if (command === 'projects') {
          router.push('/projects')
          handled = true
        } else if (command === 'dark') {
          setTheme('dark')
          handled = true
        } else if (command === 'light') {
          setTheme('light')
          handled = true
        } else if (command === 'q!') {
          // Close command mode
          handled = true
        }

        if (!handled && command.trim().length > 0) {
          // Unknown command: show error, vibrate, and play bell but keep command mode open
          const bad = command
          setInvalidCommand(bad)
          // play terminal bell sound
          try {
            const Ctx = (window.AudioContext || (window as any).webkitAudioContext)
            const ctx = new Ctx()
            const o = ctx.createOscillator()
            const g = ctx.createGain()
            o.type = 'sine'
            o.frequency.value = 800
            o.connect(g)
            g.connect(ctx.destination)
            g.gain.value = 0.00001
            o.start()
            g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.01)
            g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.25)
            setTimeout(() => {
              try { o.stop(); ctx.close() } catch (_) {}
            }, 300)
          } catch (e) {
            // ignore audio errors
          }
          // clear after a short animation
          setTimeout(() => setInvalidCommand(null), 900)
        }

        if (handled) {
          setCommandMode(false)
          setCommand('')
        }
        if (command === 'help' || command === 'h') {
          // help handled earlier; make sure input cleared
          setCommand('')
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [commandMode, command, showHelp, router, setTheme, setSnowMode])

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
                  <span className="text-terminal-yellow w-32">:contact</span>
                  <span className="text-[#c0c0c0]">Open contact form</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:snow-on</span>
                  <span className="text-[#c0c0c0]">Enable normal snow</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:snow-off</span>
                  <span className="text-[#c0c0c0]">Disable snow particles</span>
                </div>
                <div className="flex">
                  <span className="text-terminal-yellow w-32">:blizzard</span>
                  <span className="text-[#c0c0c0]">Enable fast blizzard snowfall</span>
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
          <div className={`bg-[#1e1e1e] border border-[#3a3a3a] rounded px-4 py-2 text-sm font-mono shadow-lg mx-4 ${invalidCommand ? 'shake border-red-600' : ''}`}>
            <span className="text-terminal-cyan">:</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              autoFocus
              className={`bg-transparent outline-none ml-1 flex-1 w-[calc(100%-20px)] ${invalidCommand ? 'text-red-400' : 'text-terminal-green'}`}
              placeholder="help"
            />
            {invalidCommand && (
              <span className="ml-2 text-red-400 font-mono text-xs">🔔 {invalidCommand}</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
