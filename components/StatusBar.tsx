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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <div className="bg-[#1e1e1e] border-t border-[#3a3a3a] px-4 py-2 flex items-center justify-between text-xs font-mono text-[#c0c0c0]">
          {/* Left: Mode */}
          <div className="flex items-center gap-3 min-w-[100px]">
            <span className="bg-[#00ff00] text-black px-2 py-0.5 font-bold uppercase">Visual</span>
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
