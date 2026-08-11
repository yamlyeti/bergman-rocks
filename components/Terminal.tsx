'use client'

import { motion } from 'framer-motion'
import MountainHero from './MountainHero'
import Link from 'next/link'
import TerminalWrapper from './TerminalWrapper'

export default function Terminal() {
  return (
    <TerminalWrapper>
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
            <p className="text-[#a6e3a1] mb-2">
              <span className="text-[#89b4fa]">$</span>{' '}
              <Link href="/resume" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                cat about.txt
              </Link>
            </p>
            <div className="ml-5 text-[#cdd6f4] space-y-2">
              <p>Hey, I&rsquo;m Josh. I live in the terminal and neovim, automating infrastructure and making deployments rock solid.</p>
              <p>When I&rsquo;m not working on automating all the things, full stack orchestrating at its highest or writing YAML, you&rsquo;ll find me scaling mountains—both literal and metaphorical.</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-[#a6e3a1] mb-2">
              <span className="text-[#89b4fa]">$</span>{' '}
              <Link href="/skills" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
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
                  className="bg-[#181825] p-3 border-l-2 border-[#89b4fa] text-[#cdd6f4]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#a6e3a1] mb-2">
              <span className="text-[#89b4fa]">$</span> cat contact.sh
            </p>
            <div className="ml-5 text-[#cdd6f4] space-y-1">
              <p>#!/bin/bash</p>
              <p>
                echo &ldquo;Personal GitHubs:{' '}
                <a
                  href="https://github.com/yamlyeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89b4fa] border-b border-dotted border-[#89b4fa] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors"
                >
                  @yamlyeti
                </a>
                &rdquo; and &ldquo;
                <a
                  href="https://github.com/b3rgman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89b4fa] border-b border-dotted border-[#89b4fa] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors"
                >
                  @b3rgman
                </a>
                &rdquo;
              </p>
              <p>
                echo &ldquo;Professional GitHub:{' '}
                <a
                  href="https://github.com/jbergman-oddball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89b4fa] border-b border-dotted border-[#89b4fa] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors"
                >
                  @jbergman-oddball
                </a>
                &rdquo;
              </p>
              <p>
                echo &ldquo;This domain:{' '}
                <a
                  href="https://bergman.rocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89b4fa] border-b border-dotted border-[#89b4fa] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors"
                >
                  bergman.rocks
                </a>
                &rdquo;
              </p>
              <p>
                echo &ldquo;Also this domain:{' '}
                <a
                  href="https://joshbergman.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89b4fa] border-b border-dotted border-[#89b4fa] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors"
                >
                  joshbergman.io
                </a>
                &rdquo;
              </p>
              <p>
                echo &ldquo;Contact me:{' '}
                <a
                  href="https://n8n.bergman.rocks/form/20e51a6a-4034-4aa3-af61-fcf0200fd404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89b4fa] border-b border-dotted border-[#89b4fa] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors"
                >
                  Contact me
                </a>
                &rdquo;
              </p>
            </div>
          </div>

          {/* Cursor */}
          <div>
            <p className="text-[#a6e3a1]">
              <span className="text-[#89b4fa]">$</span>{' '}
              <span className="animate-pulse">█</span>
            </p>
          </div>
        </motion.div>
      </div>
    </TerminalWrapper>
  )
}
