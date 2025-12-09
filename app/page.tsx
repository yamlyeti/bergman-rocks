'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BootScreen from '@/components/BootScreen'
import Terminal from '@/components/Terminal'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function Home() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false)
    }, 5500) // Extended to 5.5 seconds - boot completes at ~3s, then holds for 2.5s
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <AnimatePresence mode="wait">
          {booting ? (
            <BootScreen key="boot" />
          ) : (
            <Terminal key="terminal" />
          )}
        </AnimatePresence>
      </main>
      {!booting && (
        <>
          <StatusBar />
          <CommandMode />
        </>
      )}
    </>
  )
}
