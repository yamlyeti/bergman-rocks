'use client'

import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import NextImage from 'next/image'

export default function MountainHero() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const { snowMode } = useTheme()

  return (
    <div className="text-center mb-10">
      <div
        className="relative h-[450px] mb-8 rounded-xl overflow-hidden bg-[#bae6fd] shadow-2xl group"
      >
        {/* Particles Snowfall */}
        {init && snowMode !== 'off' && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-10 pointer-events-none"
            options={{
              fpsLimit: 120,
              interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
              particles: {
                color: { value: "#ffffff" },
                move: { enable: true, speed: snowMode === 'blizzard' ? 5 : 2, direction: "bottom", straight: false },
                number: { value: snowMode === 'blizzard' ? 250 : 100 },
                opacity: { value: snowMode === 'blizzard' ? 0.9 : 0.6 },
                size: { value: { min: snowMode === 'blizzard' ? 1.5 : 1, max: snowMode === 'blizzard' ? 4 : 3 } },
                wobble: { enable: snowMode === 'blizzard', distance: snowMode === 'blizzard' ? 30 : 10, speed: snowMode === 'blizzard' ? 20 : 10 }
              },
            }}
          />
        )}

        {/* Mountains Container */}
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">

          {/* Background Layer - Static & Solid */}
          <div className="absolute inset-0 z-0">
            {/* Sky Background */}
            <div className="absolute inset-0 bg-[#bae6fd]" />

            {/* Mountains Image - Restored */}
            <NextImage
              src="/mountains-back.png"
              alt="Background Mountains"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Embossed Text "bergman.rocks" */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div
              className="flex space-x-2 mt-32"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {"bergman.rocks".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.5 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } }
                  }}
                  className="text-5xl md:text-7xl font-black text-[#bae6fd] uppercase tracking-widest select-none"
                  style={{
                    textShadow: '-3px -3px 2px rgba(255,255,255,0.9), 3px 3px 2px rgba(0,0,0,0.4), 0px 0px 15px rgba(255,255,255,0.6)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Snowbank Foreground - Gradients to blend Yeti */}
          <div className="absolute bottom-0 left-0 w-full h-[150px] z-20 pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
      </div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-4xl mb-4 text-terminal-green">
          <span className="text-terminal-cyan">$</span> whoami
        </h1>
        <p className="text-xl text-terminal-yellow">
          Josh Bergman | DevOps Engineer | Terminal Dweller | Neovim Enthusiast
        </p>
      </motion.div>
    </div >
  )
}
