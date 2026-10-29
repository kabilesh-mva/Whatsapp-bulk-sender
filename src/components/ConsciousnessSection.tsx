import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'

const consciousnessData = [
  { label: 'IDENTIFIER', value: 'KABILESH NAVEENKUMAR' },
  { label: 'PRIMARY FUNCTION', value: 'AI/ML ENGINEER' },
  { label: 'SPECIALIZATION', value: 'GENERATIVE AI | AGENTIC AI | COMPUTER VISION' },
  { label: 'LOCATION', value: 'COIMBATORE, TAMIL NADU, INDIA' },
  { label: 'STATUS', value: 'ACTIVE // AVAILABLE FOR OPPORTUNITIES' },
]

const coreDirectives = [
  {
    title: 'AGENTIC ARCHITECTURE',
    description: 'State-machine workflows, dual-layer memory, DAG-based planning, agent registries',
    metric: '6 CONCURRENT ENGAGEMENTS',
    icon: '⬡'
  },
  {
    title: 'DOCUMENT INTELLIGENCE',
    description: 'Extraction, classification, validation across 15+ document types',
    metric: '92-99% ACCURACY',
    icon: '◈'
  },
  {
    title: 'RAG SYSTEMS',
    description: '10,000+ documents with sub-second retrieval, 75% GPU memory optimization',
    metric: 'SUB-SECOND LATENCY',
    icon: '◉'
  },
  {
    title: 'COMPUTER VISION',
    description: 'YOLOv8, OCR, object detection, real-time processing at 15-20 FPS',
    metric: '85-92% mAP@50',
    icon: '◎'
  }
]

export default function ConsciousnessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="about" title="CONSCIOUSNESS" subtitle="System Diagnostics">
      <div ref={ref} className="grid md:grid-cols-2 gap-8">
        {/* System Info - Enhanced Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="data-card p-8 space-y-5 relative"
        >
          {/* Card header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ghost">
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <div className="terminal-text text-sm text-lime font-bold tracking-wider">
              SYSTEM DIAGNOSTICS
            </div>
          </div>
          
          {consciousnessData.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4 pb-4 border-b border-ghost/50 last:border-0">
                <span className="terminal-text text-xs text-amber min-w-[140px] pt-0.5">
                  {item.label}:
                </span>
                <span className="text-bone text-sm flex-1 group-hover:text-lime transition-colors duration-300">
                  {item.value}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="pt-4 flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span className="terminal-text text-xs text-lime/70">
              All systems operational
            </span>
          </motion.div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-lime/20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-lime/20" />
        </motion.div>

        {/* Core Directives - Enhanced Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4"
        >
          {coreDirectives.map((directive, i) => (
            <motion.div
              key={directive.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className="data-card p-6 group relative overflow-hidden"
              data-hover
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime/0 via-lime/5 to-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-lime/70 group-hover:text-lime transition-colors">
                      {directive.icon}
                    </span>
                    <h3 className="terminal-text text-sm text-lime font-bold tracking-wider">
                      {directive.title}
                    </h3>
                  </div>
                  <span className="terminal-text text-xs text-amber px-2 py-1 border border-amber/30 bg-amber/5">
                    {directive.metric}
                  </span>
                </div>
                <p className="text-bone/70 text-sm leading-relaxed group-hover:text-bone/90 transition-colors">
                  {directive.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime to-amber group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Philosophy Statement - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="mt-20 text-center relative"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-lime/30 to-transparent" />
        <p className="text-bone/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed serif-display italic pt-16">
          "Building production-oriented AI systems that bridge the gap between 
          research breakthroughs and real-world impact."
        </p>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-transparent via-lime/30 to-transparent" />
      </motion.div>
    </Section>
  )
}
