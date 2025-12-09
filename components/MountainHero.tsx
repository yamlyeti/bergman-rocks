'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, Engine } from '@tsparticles/engine'
import NextImage from 'next/image'

// Simple pseudo-random number generator for consistent terrain
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

// Generate jagged mountain path
// Generate smoother mountain path for vector look
const generateMountainPath = (
  width: number,
  height: number,
  peakHeight: number,
  roughness: number,
  seed: number
) => {
  let points = []
  const segments = 50 // Fewer segments for smoother look
  const segmentWidth = width / segments

  // Start point
  points.push([0, height])

  for (let i = 0; i <= segments; i++) {
    const x = i * segmentWidth
    // Base shape: sine waves combined
    const baseNoise = Math.sin(i * 0.1 + seed) * 40 + Math.sin(i * 0.3 + seed) * 20

    // Reduced detail noise for cleaner lines
    const detailNoise = (seededRandom(seed + i) - 0.5) * (roughness * 0.5)

    // Taper edges to ground
    const centerDist = Math.abs(i - segments / 2) / (segments / 2)
    const heightMod = Math.max(0, 1 - Math.pow(centerDist, 2))

    const y = height - (heightMod * peakHeight + baseNoise + detailNoise)
    points.push([x, y])
  }

  // End point
  points.push([width, height])

  return `M${points.map(p => p.join(',')).join(' L')} Z`
}

export default function MountainHero() {
  const [init, setInit] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<{ [key: string]: string }>({})

  // Mouse position for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth mouse values
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Parallax transforms
  const mountain1X = useTransform(smoothMouseX, [-1, 1], [-15, 15])
  const mountain2X = useTransform(smoothMouseX, [-1, 1], [-25, 25])
  const mountain3X = useTransform(smoothMouseX, [-1, 1], [-40, 40])
  const mountain4X = useTransform(smoothMouseX, [-1, 1], [-60, 60])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="text-center mb-10">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[450px] mb-8 rounded-xl overflow-hidden bg-[#bae6fd] shadow-2xl group"
      >
        {/* Particles Snowfall */}
        {init && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-10 pointer-events-none"
            options={{
              fpsLimit: 120,
              interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
              particles: {
                color: { value: "#ffffff" },
                move: { enable: true, speed: 2, direction: "bottom" },
                number: { value: 100 },
                opacity: { value: 0.6 },
                size: { value: { min: 1, max: 3 } },
                wobble: { enable: true, distance: 10, speed: 10 }
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
              className="flex space-x-2"
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
                    textShadow: '-2px -2px 2px rgba(255,255,255,0.9), 2px 2px 4px rgba(0,0,0,0.3), 0px 0px 10px rgba(255,255,255,0.5)'
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
