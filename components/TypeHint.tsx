"use client"

import { useEffect, useState } from 'react'

export default function TypeHint() {
  const [visible, setVisible] = useState(true)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Auto-hide after 6 seconds
    const t = setTimeout(() => setVisible(false), 6000)
    return () => clearTimeout(t)
  }, [])

  if (dismissed) return null

  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 z-[60]`}> 
      {/* single centered floating hint positioned above the command line / visual */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 pointer-events-auto">
        <CenteredHint visible={visible} onClose={() => setDismissed(true)} />
      </div>
    </div>
  )
}

function CenteredHint({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <div
      className={`flex items-center gap-3 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-md border border-[#0b1220] shadow-md transition-all duration-400 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      style={{ pointerEvents: 'auto' }}
      role="note"
    >
      <span className="animate-pulse text-[#39ff14] text-lg">█</span>
      <span className="text-[#39ff14] font-mono text-sm">Type <span className="text-[#39ff14]">:</span> for options</span>
      <button
        aria-label="dismiss hint"
        onClick={onClose}
        className="ml-3 text-[#94a3b8] hover:text-[#cbd5e1] bg-transparent"
      >
        ✕
      </button>
    </div>
  )
}
