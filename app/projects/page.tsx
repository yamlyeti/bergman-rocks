'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-terminal-bg rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[#c0c0c0] text-sm">yamlyeti@bergman.local:~/projects</div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-terminal-green mb-6">
            <span className="text-terminal-cyan">$</span> ls -la projects/
          </div>

          <div className="text-[#c0c0c0] space-y-6">
            <h1 className="text-3xl text-terminal-yellow mb-4">Projects</h1>
            
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] p-4 border-l-2 border-terminal-cyan">
                <h3 className="text-terminal-cyan text-lg mb-2">bergman.rocks</h3>
                <p className="text-sm mb-2">Personal portfolio site with terminal-inspired design</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-[#2d2d2d] px-2 py-1 rounded">Next.js</span>
                  <span className="bg-[#2d2d2d] px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-[#2d2d2d] px-2 py-1 rounded">Tailwind</span>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 border-l-2 border-terminal-cyan">
                <h3 className="text-terminal-cyan text-lg mb-2">More projects coming soon...</h3>
                <p className="text-sm">Check back later or visit my GitHub</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-terminal-cyan hover:text-terminal-green transition-colors">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
    <StatusBar />
    <CommandMode />
    </>
  )
}
