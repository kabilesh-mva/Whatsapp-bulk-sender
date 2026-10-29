import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface NavNode {
  id: string
  label: string
  sublabel: string
  x: number
  y: number
  icon: string
  description: string
}

const nodes: NavNode[] = [
  { id: 'about', label: 'CONSCIOUSNESS', sublabel: 'About', x: 50, y: 8, icon: '◉', description: 'System identity & diagnostics' },
  { id: 'skills', label: 'NEURAL PATHWAYS', sublabel: 'Skills', x: 85, y: 28, icon: '⬡', description: 'Technical architecture' },
  { id: 'experience', label: 'MEMORY BANKS', sublabel: 'Experience', x: 85, y: 72, icon: '◈', description: 'Professional timeline' },
  { id: 'projects', label: 'CREATED SYSTEMS', sublabel: 'Projects', x: 50, y: 92, icon: '⬢', description: 'Built solutions' },
  { id: 'leadership', label: 'IMPACT ZONES', sublabel: 'Leadership', x: 15, y: 72, icon: '◇', description: 'Recognition & impact' },
  { id: 'contact', label: 'TRANSMIT', sublabel: 'Contact', x: 15, y: 28, icon: '◎', description: 'Open communication' },
]

const ringConnections: [string, string][] = [
  ['about', 'skills'], ['skills', 'experience'], ['experience', 'projects'],
  ['projects', 'leadership'], ['leadership', 'contact'], ['contact', 'about'],
]

const crossConnections: [string, string][] = [
  ['about', 'projects'], ['skills', 'leadership'], ['experience', 'contact'],
]

const specializations = [
  'GENERATIVE AI',
  'AGENTIC AI',
  'COMPUTER VISION',
  'RAG SYSTEMS',
  'LLM ENGINEER',
  'DOCUMENT INTELLIGENCE',
]

// Animated counter component
function Counter({ target, duration = 2, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const startTime = Date.now()
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    const timeout = setTimeout(() => requestAnimationFrame(animate), 1500)
    return () => clearTimeout(timeout)
  }, [target, duration])
  
  return <span>{count}{suffix}</span>
}

// Letter-by-letter animation
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function NeuralConstellation() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [rotatingIndex, setRotatingIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  // Parallax transforms
  const bgX = useTransform(smoothX, [-1, 1], [-20, 20])
  const bgY = useTransform(smoothY, [-1, 1], [-20, 20])
  const midX = useTransform(smoothX, [-1, 1], [-10, 10])
  const midY = useTransform(smoothY, [-1, 1], [-10, 10])
  const fgX = useTransform(smoothX, [-1, 1], [5, -5])
  const fgY = useTransform(smoothY, [-1, 1], [5, -5])

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setRotatingIndex(prev => (prev + 1) % specializations.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width * 2 - 1
      const y = (e.clientY - rect.top) / rect.height * 2 - 1
      mouseX.set(Math.max(-1, Math.min(1, x)))
      mouseY.set(Math.max(-1, Math.min(1, y)))
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const handleNodeClick = (nodeId: string) => {
    const element = document.getElementById(nodeId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getNode = (id: string) => nodes.find(n => n.id === id)!

  return (
    <div 
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Deep background grid with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.07]"
        style={{ x: bgX, y: bgY }}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 0, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 0, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </motion.div>

      {/* Layer 2: Radial glow */}
      <motion.div 
        className="absolute inset-0"
        style={{ x: midX, y: midY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,255,0,0.04)_0%,transparent_60%)]" />
      </motion.div>

      {/* Corner system stats - Left Top */}
      <div className="absolute top-6 left-6 terminal-text text-[10px] text-ash/60 space-y-1.5 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="w-1 h-1 rounded-full bg-lime animate-pulse" />
          <span>SYS.ID: <span className="text-lime/80">KN-2026</span></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          STATUS: <span className="text-lime">ONLINE</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2"
        >
          <span>FREQ:</span>
          <span className="text-amber/80">196.255.0 MHz</span>
        </motion.div>
      </div>

      {/* Corner system stats - Right Top */}
      <div className="absolute top-6 right-6 terminal-text text-[10px] text-ash/60 text-right space-y-1.5 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          LAT: <span className="text-lime/80">11.0168° N</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          LON: <span className="text-lime/80">76.9558° E</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          ALT: <span className="text-amber/80">COIMBATORE</span>
        </motion.div>
      </div>

      {/* Corner system stats - Left Bottom */}
      <div className="absolute bottom-6 left-6 terminal-text text-[10px] text-ash/60 space-y-1.5 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          v2.0.26 // MIND_INTERFACE
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-2"
        >
          <span className="text-ash/50">UPTIME:</span>
          <span className="text-lime/80"><Counter target={99} suffix=".9%" /></span>
        </motion.div>
      </div>

      {/* Corner system stats - Right Bottom */}
      <div className="absolute bottom-6 right-6 terminal-text text-[10px] text-ash/60 text-right space-y-1.5 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-end gap-2"
        >
          <span className="text-ash/50">NODES:</span>
          <span className="text-lime/80"><Counter target={6} /></span>
          <span className="text-ash/50">ACTIVE</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-end gap-2"
        >
          <span className="text-ash/50">LINKS:</span>
          <span className="text-lime/80"><Counter target={9} /></span>
          <span className="text-ash/50">ESTABLISHED</span>
        </motion.div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-lime/30 hidden md:block" />
      <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-lime/30 hidden md:block" />
      <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-lime/30 hidden md:block" />
      <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-lime/30 hidden md:block" />

      {/* Main constellation container */}
      <div className="relative w-full max-w-5xl mx-auto px-4" style={{ height: '90vh', minHeight: '650px', maxHeight: '950px' }}>
        
        {/* SVG Layer */}
        <motion.svg 
          className="absolute inset-0 w-full h-full"
          style={{ x: midX, y: midY }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Orbital rings */}
          <circle cx="50%" cy="50%" r="22%" fill="none" stroke="rgba(196, 255, 0, 0.06)" strokeWidth="1" className="pulse-orbit" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(196, 255, 0, 0.04)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(196, 255, 0, 0.03)" strokeWidth="1" className="pulse-orbit" style={{ animationDelay: '2s' }} />
          
          {/* Animated orbital ring */}
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(196, 255, 0, 0.12)" strokeWidth="1.5" strokeDasharray="25 200" className="orbital-spin" />
          <circle cx="50%" cy="50%" r="22%" fill="none" stroke="rgba(255, 149, 0, 0.08)" strokeWidth="1" strokeDasharray="10 150" className="orbital-spin" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

          {/* Ring connections */}
          {ringConnections.map(([fromId, toId]) => {
            const from = getNode(fromId)
            const to = getNode(toId)
            const isHighlighted = hoveredNode === fromId || hoveredNode === toId
            return (
              <line
                key={`ring-${fromId}-${toId}`}
                x1={`${from.x}%`} y1={`${from.y}%`}
                x2={`${to.x}%`} y2={`${to.y}%`}
                stroke={isHighlighted ? '#c4ff00' : 'rgba(196, 255, 0, 0.15)'}
                strokeWidth={isHighlighted ? 2 : 0.8}
                strokeDasharray={isHighlighted ? '0' : '8 4'}
                className="transition-all duration-500"
              />
            )
          })}

          {/* Cross connections */}
          {crossConnections.map(([fromId, toId]) => {
            const from = getNode(fromId)
            const to = getNode(toId)
            const isHighlighted = hoveredNode === fromId || hoveredNode === toId
            return (
              <line
                key={`cross-${fromId}-${toId}`}
                x1={`${from.x}%`} y1={`${from.y}%`}
                x2={`${to.x}%`} y2={`${to.y}%`}
                stroke={isHighlighted ? 'rgba(255, 149, 0, 0.7)' : 'rgba(255, 149, 0, 0.06)'}
                strokeWidth={isHighlighted ? 1.5 : 0.5}
                strokeDasharray="4 8"
                className="transition-all duration-500"
              />
            )
          })}

          {/* Center to node connections */}
          {nodes.map((node) => {
            const isHighlighted = hoveredNode === node.id
            return (
              <line
                key={`center-${node.id}`}
                x1="50%" y1="50%"
                x2={`${node.x}%`} y2={`${node.y}%`}
                stroke={isHighlighted ? 'rgba(196, 255, 0, 0.4)' : 'rgba(196, 255, 0, 0.04)'}
                strokeWidth={isHighlighted ? 1.5 : 0.5}
                strokeDasharray="3 10"
                className="transition-all duration-500"
              />
            )
          })}

          {/* Data particles */}
          {ringConnections.map(([fromId, toId], i) => {
            const from = getNode(fromId)
            const to = getNode(toId)
            return (
              <g key={`particle-${i}`}>
                <circle r="2.5" fill="#c4ff00" opacity="0.7">
                  <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={`M ${from.x * 10} ${from.y * 10} L ${to.x * 10} ${to.y * 10}`} />
                </circle>
                <circle r="1" fill="#ff9500" opacity="0.5">
                  <animateMotion dur={`${4 + i * 0.3}s`} repeatCount="indefinite" begin="1s" path={`M ${to.x * 10} ${to.y * 10} L ${from.x * 10} ${from.y * 10}`} />
                </circle>
              </g>
            )
          })}
        </motion.svg>

        {/* Center name - the core - with parallax */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-2xl"
          style={{ x: fgX, y: fgY }}
        >
          {/* Radar sweep */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none">
            <div
              className="w-full h-full rounded-full orbital-spin"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(196, 255, 0, 0.04) 40deg, transparent 80deg)',
                animationDuration: '10s',
              }}
            />
          </div>

          {/* Center glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 rounded-full bg-lime/10 blur-3xl pointer-events-none"
          />

          {/* Background blur panel */}
          <div className="absolute inset-0 -m-16 bg-void/60 backdrop-blur-xl rounded-3xl -z-10 border border-lime/[0.07]" />

          {/* System tag above name */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-amber/60" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
              <span className="terminal-text text-[10px] md:text-xs text-amber tracking-[0.3em] font-bold">
                CORE IDENTITY
              </span>
            </div>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-amber/60" />
          </motion.div>

          {/* Main name - Letter by letter */}
          <h1 className="relative px-6">
            <div className="block text-4xl sm:text-6xl md:text-8xl font-bold serif-display lime-glow tracking-tight leading-[0.9]">
              <AnimatedText text="KABILESH" delay={0.6} />
            </div>
            <div className="block text-2xl sm:text-3xl md:text-5xl font-bold serif-display text-bone/95 mt-3 tracking-wide leading-[0.95]">
              <AnimatedText text="NAVEENKUMAR" delay={1.0} className="text-bone/95" />
            </div>
          </h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent"
          />

          {/* Rotating specialization with typewriter feel */}
          <div className="mt-6 h-8 overflow-hidden flex items-center justify-center">
            <motion.div
              key={rotatingIndex}
              initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="terminal-text text-xs md:text-base text-lime/80 tracking-[0.2em] flex items-center gap-3 font-medium"
            >
              <span className="text-amber text-sm">▸</span>
              <span>{specializations[rotatingIndex]}</span>
              <span className="text-lime/40 animate-pulse">_</span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-5 terminal-text text-[10px] md:text-xs text-ash/80 tracking-[0.25em]"
          >
            AI/ML ENGINEER // COIMBATORE, IN
          </motion.p>

          {/* Navigation instruction */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-px bg-lime/40 origin-left"
              />
              <span className="terminal-text text-[10px] text-lime/70 tracking-[0.3em] font-bold">
                SELECT NODE TO EXPLORE
              </span>
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-8 h-px bg-lime/40 origin-right"
              />
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-px h-6 bg-gradient-to-b from-lime/50 to-transparent" />
              <div className="text-lime/60 text-base">⌄</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Rotating text ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="320" height="320" viewBox="0 0 320 320" className="orbital-spin opacity-20 hidden md:block" style={{ animationDuration: '45s' }}>
            <defs>
              <path id="textCircle" d="M 160, 160 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
            </defs>
            <text fill="#c4ff00" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="4">
              <textPath href="#textCircle">
                GENERATIVE AI • AGENTIC AI • COMPUTER VISION • RAG SYSTEMS • LLM ENGINEER • DOCUMENT INTELLIGENCE •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Navigation Nodes */}
        {nodes.map((node, i) => (
          <motion.button
            key={node.id}
            onClick={() => handleNodeClick(node.id)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 1 + i * 0.12 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30 group"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            data-hover
          >
            <div className="flex flex-col items-center gap-2.5">
              {/* Node circle */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  hoveredNode === node.id
                    ? 'border-lime bg-lime/20 shadow-[0_0_50px_rgba(196,255,0,0.4)]'
                    : 'border-lime/30 bg-void/90 hover:border-lime/70 hover:bg-lime/5'
                }`}
              >
                {/* Pulse ring on hover */}
                {hoveredNode === node.id && (
                  <>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-lime/40"
                    />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.4 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 rounded-full border border-lime/30"
                    />
                  </>
                )}
                
                <span className={`text-2xl md:text-3xl transition-all duration-300 ${
                  hoveredNode === node.id ? 'text-lime scale-110' : 'text-lime/60'
                }`}>
                  {node.icon}
                </span>
              </motion.div>

              {/* Label with tooltip on hover */}
              <div className="text-center whitespace-nowrap">
                <div className={`terminal-text text-[10px] md:text-xs font-bold tracking-wider transition-all duration-300 ${
                  hoveredNode === node.id ? 'text-lime' : 'text-lime/60 group-hover:text-lime'
                }`}>
                  {node.label}
                </div>
                <div className={`text-[9px] md:text-[10px] mt-0.5 transition-all duration-300 ${
                  hoveredNode === node.id ? 'text-amber' : 'text-amber/40 group-hover:text-amber/70'
                }`}>
                  [{node.sublabel}]
                </div>
                
                {/* Tooltip description on hover */}
                {hoveredNode === node.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-2 px-3 py-1.5 bg-void/95 border border-lime/30 rounded text-[9px] terminal-text text-lime/80 whitespace-nowrap"
                  >
                    {node.description}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
