import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const rotatingStats = [
  { label: 'MODELS DEPLOYED', value: '15+', icon: '◆' },
  { label: 'DOCUMENTS PROCESSED', value: '10K+', icon: '◈' },
  { label: 'ACCURACY RATE', value: '99%', icon: '◉' },
  { label: 'GPU OPTIMIZATION', value: '75%', icon: '⬡' },
]

export default function MissionControlHero() {
  const [activeStat, setActiveStat] = useState(0)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat(prev => (prev + 1) % rotatingStats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleScroll = (section: string) => {
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 0, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,255,0,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Scan line effect */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-lime/[0.02] to-transparent pointer-events-none z-10"
      />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-20 flex items-center justify-between px-6 md:px-12 py-4 border-b border-ghost/50"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="terminal-text text-xs text-ash tracking-wider">SYSTEM ONLINE</span>
        </div>
        <div className="terminal-text text-xs text-ash tracking-wider hidden md:block">
          {time.toLocaleTimeString('en-US', { hour12: false })} UTC
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScroll('contact')}
            className="terminal-text text-xs text-lime border border-lime/30 px-3 py-1.5 hover:bg-lime/10 transition-all"
            data-hover
          >
            [HIRE ME]
          </button>
        </div>
      </motion.div>

      {/* Main hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 pt-16 md:pt-24 pb-12">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 px-4 py-2 border border-lime/20 bg-void/60 backdrop-blur-sm rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span className="terminal-text text-[10px] text-lime/80 tracking-widest">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold serif-display leading-[0.85] tracking-tight">
            <span className="block lime-glow">
              <span className="glitch-text" data-text="KABILESH">KABILESH</span>
            </span>
            <span className="block text-bone/90 mt-2 text-4xl sm:text-5xl md:text-7xl tracking-wide">
              NAVEENKUMAR
            </span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-3 justify-center mb-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-lime/50" />
            <span className="terminal-text text-xs md:text-sm text-amber tracking-[0.3em]">AI / ML ENGINEER</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-lime/50" />
          </div>
          <p className="terminal-text text-xs text-ash/70 tracking-wider max-w-md mx-auto">
            Generative AI • Agentic AI • Computer Vision • RAG Systems
          </p>
        </motion.div>

        {/* Stats ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl mb-12"
        >
          {rotatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className={`data-card p-4 text-center transition-all duration-500 ${
                activeStat === i ? 'border-lime/50 bg-lime/[0.03]' : ''
              }`}
            >
              <div className="terminal-text text-lg md:text-2xl font-bold text-lime mb-1">
                {stat.value}
              </div>
              <div className="terminal-text text-[9px] md:text-[10px] text-ash tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { label: 'ABOUT', id: 'about', icon: '◉' },
            { label: 'SKILLS', id: 'skills', icon: '⬡' },
            { label: 'EXPERIENCE', id: 'experience', icon: '◈' },
            { label: 'PROJECTS', id: 'projects', icon: '⬢' },
            { label: 'CONTACT', id: 'contact', icon: '◎' },
          ].map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.08 }}
              onClick={() => handleScroll(item.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-3 border border-ghost hover:border-lime/50 bg-void/60 hover:bg-lime/5 text-bone/80 hover:text-lime terminal-text text-xs tracking-wider transition-all duration-300"
              data-hover
            >
              <span className="text-amber">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Terminal hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex items-center gap-3 terminal-text text-[10px] text-ash/60"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-amber">{'>'}</span>
            <span>Use terminal</span>
            <span className="text-lime/50 px-1.5 py-0.5 border border-ghost rounded text-[9px]">⌘</span>
            <span>or click below</span>
          </div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lime/40"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-16 h-16 border-l border-t border-lime/10 hidden md:block" />
      <div className="absolute top-20 right-6 w-16 h-16 border-r border-t border-lime/10 hidden md:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-lime/10 hidden md:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-lime/10 hidden md:block" />

      {/* Side labels */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="terminal-text text-[9px] text-ash/40 tracking-widest writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
          COIMBATORE • TAMIL NADU • INDIA
        </div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="terminal-text text-[9px] text-ash/40 tracking-widest writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
          BUILDING PRODUCTION AI SYSTEMS
        </div>
      </div>
    </div>
  )
}
