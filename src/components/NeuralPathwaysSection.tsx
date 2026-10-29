import { motion, useInView, useScroll } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Section from './Section'

const skillClusters = [
  {
    id: 'ai-ml',
    name: 'AI / ML CORE',
    code: '0x01',
    color: '#c4ff00',
    description: 'Foundation models, retrieval systems, and learning architectures',
    skills: [
      { name: 'Large Language Models', level: 95, tag: 'LLM' },
      { name: 'RAG Systems', level: 92, tag: 'RAG' },
      { name: 'Deep Learning', level: 88, tag: 'DL' },
      { name: 'Machine Learning', level: 90, tag: 'ML' },
      { name: 'Prompt Engineering', level: 93, tag: 'PE' },
      { name: 'PEFT/LoRA Fine-Tuning', level: 80, tag: 'PEFT' },
    ]
  },
  {
    id: 'agentic',
    name: 'AGENTIC SYSTEMS',
    code: '0x02',
    color: '#ff9500',
    description: 'Autonomous agents, orchestration, and cognitive architectures',
    skills: [
      { name: 'LangChain', level: 92, tag: 'LC' },
      { name: 'OpenAI API', level: 95, tag: 'OAI' },
      { name: 'Workflow Orchestration', level: 90, tag: 'WO' },
      { name: 'State Management', level: 88, tag: 'SM' },
      { name: 'Tool Calling', level: 87, tag: 'TC' },
      { name: 'Semantic Routing', level: 85, tag: 'SR' },
    ]
  },
  {
    id: 'vision',
    name: 'COMPUTER VISION',
    code: '0x03',
    color: '#c4ff00',
    description: 'Object detection, OCR, and real-time visual processing',
    skills: [
      { name: 'YOLOv8', level: 90, tag: 'YOLO' },
      { name: 'OpenCV', level: 88, tag: 'CV' },
      { name: 'GLM-OCR', level: 92, tag: 'OCR' },
      { name: 'PP-DocLayoutV3', level: 85, tag: 'DOC' },
      { name: 'Azure Computer Vision', level: 82, tag: 'AZ' },
      { name: 'CNNs', level: 80, tag: 'CNN' },
    ]
  },
  {
    id: 'infra',
    name: 'INFRASTRUCTURE',
    code: '0x04',
    color: '#ff9500',
    description: 'Vector stores, cloud deployment, and production systems',
    skills: [
      { name: 'Python', level: 95, tag: 'PY' },
      { name: 'FAISS', level: 88, tag: 'FX' },
      { name: 'Vector Databases', level: 85, tag: 'VDB' },
      { name: 'Flask / REST APIs', level: 90, tag: 'API' },
      { name: 'Azure / AWS', level: 82, tag: 'CLD' },
      { name: 'Git / CI/CD', level: 85, tag: 'DEV' },
    ]
  }
]

function AnimatedCounter({ value, isActive, delay = 0 }: { value: number; isActive: boolean; delay?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setCount(0)
      return
    }
    
    const timeout = setTimeout(() => {
      const duration = 1000
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * value))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isActive, value, delay])

  return <span>{count}</span>
}

export default function NeuralPathwaysSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  const [activeCluster, setActiveCluster] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [transitionKey, setTransitionKey] = useState(0)
  const scrollProgressValue = useRef(0)
  const lastScrollTime = useRef(Date.now())

  // Auto-rotate clusters
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return
    
    const interval = setInterval(() => {
      setActiveCluster(prev => {
        const next = (prev + 1) % skillClusters.length
        setTransitionKey(k => k + 1)
        return next
      })
    }, 3500)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, isInView])

  // Scroll-driven cluster switching - only when user has settled
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      scrollProgressValue.current = v
      const now = Date.now()
      
      // Only switch if user has been scrolling for at least 500ms (settled)
      // and is in the middle portion of the section
      const timeSinceLastScroll = now - lastScrollTime.current
      lastScrollTime.current = now
      
      // Define thresholds: 0-25% = cluster 0, 25-50% = cluster 1, 50-75% = cluster 2, 75-100% = cluster 3
      // But only activate when v > 0.3 (user has scrolled past the header)
      if (v < 0.3 || v > 0.95) {
        // At edges, resume auto-play
        if (timeSinceLastScroll > 300) {
          setIsAutoPlaying(true)
        }
        return
      }
      
      // Map scroll progress to cluster index with clear thresholds
      let clusterIndex = 0
      if (v >= 0.3 && v < 0.45) clusterIndex = 0
      else if (v >= 0.45 && v < 0.6) clusterIndex = 1
      else if (v >= 0.6 && v < 0.75) clusterIndex = 2
      else if (v >= 0.75) clusterIndex = 3
      
      // Only switch if enough time has passed (user has settled)
      if (clusterIndex !== activeCluster && timeSinceLastScroll > 500) {
        setIsAutoPlaying(false)
        setActiveCluster(clusterIndex)
        setTransitionKey(k => k + 1)
      }
    })
    
    return () => unsubscribe()
  }, [activeCluster])

  const handleManualSelect = (index: number) => {
    setIsAutoPlaying(false)
    setActiveCluster(index)
    setTransitionKey(k => k + 1)
    
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const currentCluster = skillClusters[activeCluster]

  return (
    <Section id="skills" title="NEURAL PATHWAYS" subtitle="Technical Architecture">
      <div ref={ref} className="space-y-12">
        {/* Scroll progress indicator */}
        <motion.div
          className="h-px bg-ghost relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-lime to-amber"
            style={{ width: scrollYProgress }}
          />
        </motion.div>

        {/* Cluster Selector - Transforming Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skillClusters.map((cluster, i) => (
            <motion.button
              key={cluster.id}
              onClick={() => handleManualSelect(i)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 border terminal-text text-xs tracking-wider transition-all duration-500 overflow-hidden ${
                activeCluster === i
                  ? 'border-lime text-lime'
                  : 'border-ghost text-ash hover:border-lime/50 hover:text-lime/80'
              }`}
              data-hover
            >
              {/* Active indicator fill */}
              {activeCluster === i && (
                <motion.div
                  layoutId="activeClusterBg"
                  className="absolute inset-0 bg-lime/10"
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                />
              )}
              
              {/* Code prefix */}
              <span className={`relative z-10 mr-2 ${activeCluster === i ? 'text-amber' : ''}`}>
                {cluster.code}
              </span>
              <span className="relative z-10">{cluster.name}</span>
              
              {/* Active dot */}
              {activeCluster === i && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-lime"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <motion.div 
          className="text-center terminal-text text-[10px] text-ash/50"
          animate={{ opacity: isAutoPlaying ? 1 : 0.3 }}
        >
          {isAutoPlaying ? '◉ AUTO-CYCLING' : '○ MANUAL MODE'}
        </motion.div>

        {/* Main Skills Display - Transforming Container */}
        <div ref={sectionRef} className="relative">
          {/* Background morph shape */}
          <motion.div
            key={`bg-${transitionKey}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -inset-8 bg-gradient-to-br from-lime/[0.02] to-transparent rounded-3xl border border-ghost/50 -z-10"
          />

          {/* Cluster Header - Morphing */}
          <motion.div
            key={`header-${transitionKey}`}
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-start justify-between"
          >
            <div>
              <div className="terminal-text text-xs text-amber mb-2">
                {'>'} LOADING MODULE {currentCluster.code}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold terminal-text" style={{ color: currentCluster.color }}>
                {currentCluster.name}
              </h3>
              <p className="text-bone/50 text-sm mt-2 max-w-md">
                {currentCluster.description}
              </p>
            </div>
            
            {/* Cluster progress ring */}
            <div className="hidden md:flex items-center gap-3">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                <motion.circle
                  cx="30" cy="30" r="25"
                  fill="none"
                  stroke={currentCluster.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="157"
                  initial={{ strokeDashoffset: 157 }}
                  animate={{ strokeDashoffset: 157 - (157 * ((activeCluster + 1) / skillClusters.length)) }}
                  transition={{ duration: 0.8 }}
                />
                <text x="30" y="34" textAnchor="middle" fill={currentCluster.color} fontSize="12" fontFamily="JetBrains Mono">
                  {activeCluster + 1}/{skillClusters.length}
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Skills Grid - Transforming Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentCluster.skills.map((skill, i) => (
              <motion.div
                key={`${currentCluster.id}-${skill.name}-${transitionKey}`}
                initial={{ 
                  opacity: 0, 
                  x: i % 2 === 0 ? -40 : 40,
                  y: 20,
                  rotateX: -15,
                  scale: 0.9
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="data-card p-5 group relative overflow-hidden"
                style={{ perspective: '1000px' }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${currentCluster.color}08, transparent 70%)`
                  }}
                />

                {/* Top row: name + tag + level */}
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <span 
                      className="terminal-text text-[10px] px-2 py-0.5 border"
                      style={{ 
                        borderColor: `${currentCluster.color}40`,
                        color: currentCluster.color
                      }}
                    >
                      {skill.tag}
                    </span>
                    <span className="text-bone text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="terminal-text text-lg font-bold" style={{ color: currentCluster.color }}>
                    <AnimatedCounter 
                      value={skill.level} 
                      isActive={isInView} 
                      delay={i * 100 + 300}
                    />
                    <span className="text-xs opacity-50">%</span>
                  </span>
                </div>

                {/* Progress bar - morphing */}
                <div className="relative h-1.5 bg-ghost rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0, scaleX: 0 }}
                    animate={{ 
                      width: `${skill.level}%`,
                      scaleX: 1
                    }}
                    transition={{ 
                      duration: 1.2,
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${currentCluster.color}, ${currentCluster.color}88)`,
                      boxShadow: `0 0 12px ${currentCluster.color}40`
                    }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ 
                      duration: 2,
                      delay: 0.5 + i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </div>

                {/* Data dots visualization */}
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0, y: 5 }}
                      animate={{ 
                        opacity: j < Math.floor(skill.level / 10) ? 1 : 0.15,
                        scale: 1,
                        y: 0
                      }}
                      transition={{ 
                        delay: 0.6 + i * 0.1 + j * 0.03,
                        type: 'spring',
                        stiffness: 200
                      }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: j < Math.floor(skill.level / 10) 
                          ? currentCluster.color 
                          : '#2a2a2a',
                        boxShadow: j < Math.floor(skill.level / 10)
                          ? `0 0 4px ${currentCluster.color}60`
                          : 'none'
                      }}
                    />
                  ))}
                </div>

                {/* Corner decoration */}
                <div 
                  className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${currentCluster.color}10 50%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Technologies - Scroll-revealed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="terminal-text text-xs text-ash mb-6 text-center">
            {'>'} EXTENDED PROTOCOLS
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Hugging Face', 'Knowledge Graphs', 'Model Quantization', 'Docker', 'Linux', 'PostgreSQL'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10, rotateX: -45 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  borderColor: 'rgba(196, 255, 0, 0.5)'
                }}
                transition={{ duration: 0.4, delay: 1 + i * 0.05 }}
                className="px-4 py-2 border border-ghost text-ash text-xs terminal-text transition-colors duration-300"
                data-hover
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
