'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BootScreen from '@/components/BootScreen'
import Terminal from '@/components/Terminal'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function Home() {
  const [booting, setBooting] = useState(true)

  // Boot logic moved to BootScreen component
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setBooting(false)
  //   }, 5500)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <AnimatePresence mode="wait">
          {booting ? (
            <BootScreen key="boot" onComplete={() => setBooting(false)} />
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
