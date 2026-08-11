'use client'

import { useState, useEffect } from 'react'

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      setCurrentTime(`${date} ${time}`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const fullHint = 'Type : for options'
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const speed = 60 // ms per char
    const timer = setInterval(() => {
      setTyped((prev) => {
        // If already complete, stop the timer
        if (prev.length >= fullHint.length) {
          clearInterval(timer)
          return prev
        }

        // Safely compute the next slice (avoids indexing undefined)
        return fullHint.slice(0, prev.length + 1)
      })
    }, speed)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <div className="bg-[#1e1e1e] border-t border-[#3a3a3a] px-4 py-2 flex items-center justify-between text-xs font-mono text-[#c0c0c0]">
          {/* Left: Mode */}
          <div className="flex items-center gap-3 min-w-[180px]">
            <span className="bg-[#00ff00] text-black px-2 py-0.5 font-bold uppercase">VISUAL</span>
            <div className="ml-3 flex items-center gap-2">
              <span className="text-[#39ff14] font-mono text-xs whitespace-pre">{typed}</span>
              <span className="animate-pulse text-[#39ff14] text-lg" aria-hidden>
                █
              </span>
            </div>
          </div>

          {/* Center: Domain */}
          <div className="flex-1 text-center">
            bergman.rocks
          </div>

          {/* Right: Date & Time */}
          <div className="min-w-[150px] text-right">
            {currentTime || 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
