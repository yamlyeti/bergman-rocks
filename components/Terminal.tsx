'use client'

import { motion } from 'framer-motion'
import MountainHero from './MountainHero'
import Link from 'next/link'

export default function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl bg-terminal-bg rounded-lg shadow-2xl overflow-hidden relative"
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[#c0c0c0] text-sm hidden sm:block">yamlyeti@bergman.local:~</div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-[#c0c0c0] hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="text-[#c0c0c0] hover:text-white transition-colors">Projects</Link>
          <Link href="/resume" className="text-[#c0c0c0] hover:text-white transition-colors">Resume</Link>
          <Link href="/skills" className="text-[#c0c0c0] hover:text-white transition-colors">Skills</Link>
        </nav>
      </div>

      {/* Terminal Body */}
      <div className="p-8 pb-0">
        <MountainHero />

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8 pb-8"
        >
          {/* About */}
          <div>
            <p className="text-terminal-green mb-2">
              <span className="text-terminal-cyan">$</span>{' '}
              <Link href="/resume" className="text-terminal-cyan hover:text-terminal-green transition-colors">
                cat about.txt
              </Link>
            </p>
            <div className="ml-5 text-[#c0c0c0] space-y-2">
              <p>Hey, I'm Bergman (yamlyeti). I live in the terminal and neovim, automating infrastructure and making deployments rock solid.</p>
              <p>When I'm not wrangling Kubernetes clusters or writing YAML, you'll find me scaling mountains—both literal and metaphorical.</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-terminal-green mb-2">
              <span className="text-terminal-cyan">$</span>{' '}
              <Link href="/skills" className="text-terminal-cyan hover:text-terminal-green transition-colors">
                ls -la skills/
              </Link>
            </p>
            <div className="ml-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                '✅✅✅✅✅ GitHub',
                '✅✅✅✅✅ BitBucket',
                '✅✅✅✅✅ YAML',
                '✅✅✅✅✅ HCL',
                '✅✅✅✅✅ Bash',
                '✅✅✅✅ CloudFormation',
                '✅✅✅✅ Python',
                '✅✅ Javascript',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-cyan text-[#c0c0c0]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-terminal-green mb-2">
              <span className="text-terminal-cyan">$</span> cat contact.sh
            </p>
            <div className="ml-5 text-[#c0c0c0] space-y-1">
              <p>#!/bin/bash</p>
              <p>
                echo "Find me on GitHub:{' '}
                <a
                  href="https://github.com/yamlyeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-cyan border-b border-dotted border-terminal-cyan hover:text-terminal-green hover:border-terminal-green transition-colors"
                >
                  @yamlyeti
                </a>
                "
              </p>
              <p>echo "This domain: bergman.rocks"</p>
            </div>
          </div>

          {/* Cursor */}
          <div>
            <p className="text-terminal-green">
              <span className="text-terminal-cyan">$</span>{' '}
              <span className="animate-pulse">█</span>
            </p>
          </div>
        </motion.div>
      </div>


    </motion.div>
  )
}
