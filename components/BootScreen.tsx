'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const bootLines = [
  'BIOS v2.4.1 - bergman.rocks',
  'Initializing system...',
  'Loading kernel modules... [OK]',
  'Mounting filesystems... [OK]',
  'Starting network services... [OK]',
  'Loading yamlyeti profile... [OK]',
  'Initializing neovim... [OK]',
  'Starting DevOps toolkit... [OK]',
  'System ready. Welcome to bergman.rocks',
]

export default function BootScreen() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    // Trigger random intense glitches
    const triggerGlitch = () => {
      setGlitch(true)
      // Glitch lasts between 100ms and 400ms
      const duration = Math.random() * 300 + 100
      setTimeout(() => setGlitch(false), duration)

      // Schedule next glitch randomly between 2s and 5s
      const nextGlitch = Math.random() * 3000 + 2000
      setTimeout(triggerGlitch, nextGlitch)
    }

    // Initial glitch shortly after start
    const timer = setTimeout(triggerGlitch, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: '100% 2px, 3px 100%' }} />

      {/* Glitch Container */}
      <div className={`relative max-w-2xl px-5 ${glitch ? 'glitch-active' : ''}`}>

        {/* CSS for Glitch Animation */}
        <style jsx>{`
          .glitch-active {
            position: relative;
            animation: glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          }
          .glitch-active::before,
          .glitch-active::after {
            content: attr(data-text); /* This won't work on the container directly, using separate layers */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
          }
          .glitch-active::before {
            color: #ff00ff;
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
            clip-path: inset(0 0 0 0);
            transform: translate(-4px, -2px);
            z-index: -1;
          }
          .glitch-active::after {
            color: #00ffff;
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
            clip-path: inset(0 0 0 0);
            transform: translate(4px, 2px);
            z-index: -2;
          }

          @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); }
            20% { clip-path: inset(60% 0 10% 0); }
            40% { clip-path: inset(40% 0 50% 0); }
            60% { clip-path: inset(80% 0 5% 0); }
            80% { clip-path: inset(10% 0 60% 0); }
            100% { clip-path: inset(30% 0 30% 0); }
          }
          @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); }
            20% { clip-path: inset(30% 0 20% 0); }
            40% { clip-path: inset(70% 0 20% 0); }
            60% { clip-path: inset(20% 0 50% 0); }
            80% { clip-path: inset(50% 0 30% 0); }
            100% { clip-path: inset(5% 0 80% 0); }
          }
          @keyframes glitch-skew {
            0% { transform: skew(0deg); }
            20% { transform: skew(-2deg); }
            40% { transform: skew(2deg); }
            60% { transform: skew(-1deg); }
            80% { transform: skew(1deg); }
            100% { transform: skew(0deg); }
          }
        `}</style>

        {/* Glitch Layers - Duplicating content for the RGB split effect */}
        {glitch && (
          <>
            <div className="absolute inset-0 text-[#ff00ff] opacity-70 translate-x-[-4px] animate-[glitch-anim-1_0.3s_infinite_linear_alternate-reverse] pointer-events-none mix-blend-screen z-0">
              {bootLines.map((line, i) => (
                <div key={`g1-${i}`} className={`text-sm mb-2 ${i === bootLines.length - 1 ? 'text-base mt-5' : ''}`}>{line.replace('[OK]', '')}{line.includes('[OK]') && '[OK]'}</div>
              ))}
            </div>
            <div className="absolute inset-0 text-[#00ffff] opacity-70 translate-x-[4px] animate-[glitch-anim-2_0.3s_infinite_linear_alternate-reverse] pointer-events-none mix-blend-screen z-0">
              {bootLines.map((line, i) => (
                <div key={`g2-${i}`} className={`text-sm mb-2 ${i === bootLines.length - 1 ? 'text-base mt-5' : ''}`}>{line.replace('[OK]', '')}{line.includes('[OK]') && '[OK]'}</div>
              ))}
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="relative z-10">
          {bootLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.3 + 0.2, duration: 0.3 }}
              className={`text-sm mb-2 ${i === bootLines.length - 1 ? 'text-terminal-cyan text-base mt-5' : 'text-terminal-green'
                }`}
            >
              {line.includes('[OK]') ? (
                <>
                  {line.split('[OK]')[0]}
                  <span className="text-[#27c93f] font-bold">[OK]</span>
                </>
              ) : (
                <>
                  {line}
                  {i === bootLines.length - 1 && (
                    <>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.3 }}
                      >
                        .
                      </motion.span>
                    </>
                  )}
                </>
              )}
            </motion.div>
          ))}

          {/* Help prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="text-sm text-[#c0c0c0] mt-4"
          >
            Press <span className="text-terminal-cyan font-bold">:</span> for help
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
