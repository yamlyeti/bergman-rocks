'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, Engine } from '@tsparticles/engine'

// Simple pseudo-random number generator for consistent terrain
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

// Generate jagged mountain path
const generateMountainPath = (
  width: number,
  height: number,
  peakHeight: number,
  roughness: number,
  seed: number
) => {
  let points = []
  const segments = 100 // Number of points along the width
  const segmentWidth = width / segments

  // Start point
  points.push([0, height])

  for (let i = 0; i <= segments; i++) {
    const x = i * segmentWidth
    // Base shape: sine waves combined
    const baseNoise = Math.sin(i * 0.1 + seed) * 20 + Math.sin(i * 0.3 + seed) * 10

    // Detailed noise
    const detailNoise = (seededRandom(seed + i) - 0.5) * roughness

    // Taper edges to ground
    const centerDist = Math.abs(i - segments / 2) / (segments / 2) // 0 at center, 1 at edges
    const heightMod = Math.max(0, 1 - Math.pow(centerDist, 2)) // Parabolic shape

    const y = height - (heightMod * peakHeight + baseNoise + detailNoise)
    points.push([x, y])
  }

  // End point
  points.push([width, height])

  // Create path string
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

  // Eye tracking
  const eyeX = useTransform(smoothMouseX, [-1, 1], [-3, 3])
  const eyeY = useTransform(smoothMouseY, [-1, 1], [-3, 3])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })

    // Generate paths on mount
    setPaths({
      m1: generateMountainPath(1200, 300, 150, 30, 123),
      m2: generateMountainPath(1200, 350, 200, 40, 456),
      m3: generateMountainPath(800, 450, 350, 50, 789), // Main peak
      m4: generateMountainPath(600, 400, 250, 40, 321), // Cave mountain
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
        className="relative h-[450px] mb-8 rounded-xl overflow-hidden bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#475569] shadow-2xl group"
      >
        {/* SVG Filters for Texture and Chisel */}
        <svg className="hidden">
          <defs>
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feComposite operator="in" in2="SourceGraphic" result="noise" />
              <feBlend mode="multiply" in="noise" in2="SourceGraphic" />
            </filter>

            <filter id="rockTexture">
              <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
              <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
              <feDiffuseLighting in="turbulence" lightingColor="#fff" surfaceScale="2">
                <feDistantLight azimuth="45" elevation="60" />
              </feDiffuseLighting>
              <feComposite operator="in" in2="SourceGraphic" />
              <feBlend mode="multiply" in2="SourceGraphic" />
            </filter>

            <filter id="chiseled">
              {/* Create inner shadow */}
              <feOffset dx="2" dy="4" in="SourceAlpha" result="offset" />
              <feGaussianBlur stdDeviation="2" in="offset" result="blur" />
              <feComposite operator="out" in="blur" in2="SourceAlpha" result="inverse" />
              <feFlood floodColor="black" floodOpacity="0.7" result="color" />
              <feComposite operator="in" in="color" in2="inverse" result="shadow" />
              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
          </defs>
        </svg>

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
                number: { value: 150 },
                opacity: { value: 0.6 },
                size: { value: { min: 1, max: 3 } },
                wobble: { enable: true, distance: 10, speed: 10 }
              },
            }}
          />
        )}

        {/* Mountains Container */}
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">

          {/* Mountain 1 - Far back */}
          <motion.div
            style={{ x: mountain1X }}
            className="absolute bottom-0 left-[-10%] w-[120%] h-[300px] opacity-40 z-0"
          >
            {paths.m1 && (
              <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d={paths.m1}
                  fill="#334155"
                  stroke="#64748b"
                  strokeWidth="1"
                  filter="url(#noiseFilter)"
                />
              </svg>
            )}
          </motion.div>

          {/* Mountain 2 - Mid range */}
          <motion.div
            style={{ x: mountain2X }}
            className="absolute bottom-0 left-[-10%] w-[120%] h-[350px] opacity-70 z-10"
          >
            {paths.m2 && (
              <svg viewBox="0 0 1200 350" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d={paths.m2}
                  fill="#475569"
                  stroke="#94a3b8"
                  strokeWidth="1"
                  filter="url(#rockTexture)"
                />
              </svg>
            )}
          </motion.div>

          {/* Mountain 3 - Main Peak with B */}
          <motion.div
            style={{ x: mountain3X }}
            className="absolute bottom-0 left-[20%] w-[60%] h-[450px] z-20"
          >
            {paths.m3 && (
              <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mainMountainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="50%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                </defs>
                <path
                  d={paths.m3}
                  fill="url(#mainMountainGrad)"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  filter="url(#rockTexture)"
                />

                {/* The 'B' - Chiseled into the mountain */}
                <path
                  d="M380,200 L380,300 L410,300 C430,300 440,290 440,275 C440,260 430,250 410,250 L400,250 L410,250 C430,250 440,240 440,225 C440,210 430,200 410,200 Z M395,215 L410,215 C420,215 425,220 425,225 C425,230 420,235 410,235 L395,235 Z M395,265 L410,265 C420,265 425,270 425,275 C425,280 420,285 410,285 L395,285 Z"
                  fill="#475569"
                  filter="url(#chiseled)"
                  transform="translate(0, 50)"
                  opacity="0.8"
                />
              </svg>
            )}
          </motion.div>

          {/* Cave Mountain - Foreground */}
          <motion.div
            style={{ x: mountain4X }}
            className="absolute bottom-0 right-[-10%] w-[50%] h-[400px] z-30"
          >
            {paths.m4 && (
              <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="caveMountainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                </defs>
                <path
                  d={paths.m4}
                  fill="url(#caveMountainGrad)"
                  stroke="#94a3b8"
                  strokeWidth="1"
                  filter="url(#rockTexture)"
                />
              </svg>
            )}

            {/* Cave Entrance */}
            <div className="absolute bottom-[20px] left-[30%] w-[140px] h-[160px] bg-black rounded-t-full overflow-hidden shadow-inner border-2 border-[#1e293b]">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f172a] to-transparent opacity-80" />
            </div>

            {/* Yeti emerging from cave */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.75, scale: 1 }}
              transition={{ delay: 2, duration: 1.5, type: 'spring' }}
              className="absolute bottom-[10px] left-[30%] translate-x-[20px] z-40"
              style={{
                filter: 'brightness(0.7) contrast(1.2)',
              }}
            >
              <svg width="100" height="120" viewBox="0 0 85 105">
                <defs>
                  <linearGradient id="yetiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                <g>
                  {/* Body */}
                  <ellipse cx="42" cy="65" rx="24" ry="30" fill="url(#yetiGradient)" stroke="#94a3b8" strokeWidth="2" />

                  {/* Head */}
                  <circle cx="42" cy="30" r="20" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />

                  {/* Ears */}
                  <ellipse cx="27" cy="24" rx="5.5" ry="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
                  <ellipse cx="57" cy="24" rx="5.5" ry="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Eyes - Interactive */}
                  <motion.g style={{ x: eyeX, y: eyeY }}>
                    <circle cx="35" cy="28" r="3" fill="#1e293b" />
                    <circle cx="49" cy="28" r="3" fill="#1e293b" />
                  </motion.g>

                  {/* Mouth */}
                  <line x1="35" y1="38" x2="49" y2="38" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

                  {/* Nose */}
                  <ellipse cx="42" cy="33" rx="2" ry="3" fill="#94a3b8" />

                  {/* Arms */}
                  <ellipse cx="18" cy="60" rx="7" ry="18" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-15 18 60)" />
                  <ellipse cx="66" cy="60" rx="7" ry="18" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(15 66 60)" />
                </g>
              </svg>
            </motion.div>
          </motion.div>

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
    </div>
  )
}
