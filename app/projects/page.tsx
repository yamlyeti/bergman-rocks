'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TerminalWrapper from '@/components/TerminalWrapper'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <TerminalWrapper>
          {/* Content */}
          <div className="p-8">
            <div className="text-[#a6e3a1] mb-6">
              <span className="text-[#89b4fa]">$</span> ls -la projects/
            </div>

            <div className="text-[#cdd6f4] space-y-6">
              <h1 className="text-3xl text-[#fab387] mb-4">Projects</h1>

              <div className="space-y-4">
                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h3 className="text-[#89b4fa] text-lg mb-2">bergman.rocks</h3>
                  <p className="text-sm mb-2">Personal portfolio site with terminal-inspired design</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-[#313244] px-2 py-1 rounded">Next.js</span>
                    <span className="bg-[#313244] px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-[#313244] px-2 py-1 rounded">Tailwind</span>
                  </div>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h3 className="text-[#89b4fa] text-lg mb-2">More projects coming soon...</h3>
                  <p className="text-sm">Check back later or visit my GitHub</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </TerminalWrapper>
      </main>
      <StatusBar />
      <CommandMode />
    </>
  )
}
