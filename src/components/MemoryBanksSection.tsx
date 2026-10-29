import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'

const memoryLogs = [
  {
    timestamp: '2026.04 - PRESENT',
    title: 'Jr. AI Engineer',
    organization: 'ERDSTER INFORMATION SYSTEMS',
    status: 'ACTIVE',
    logs: [
      'Deployed AI document intelligence across 6 concurrent client engagements',
      'Architected Agentic AI platform: State Machine, Dual-Layer Memory, DAG Planner',
      'Built AI Agent Registry with manifests and schema validation',
      'Achieved 96% accuracy in logo-based document classification',
      'Implemented local GLM-OCR for privacy-conscious processing'
    ],
    tags: ['AGENTIC AI', 'RAG', 'LLMS', 'DOCUMENT INTELLIGENCE']
  },
  {
    timestamp: '2025.07 - 2025.12',
    title: 'Data Science Mentor',
    organization: 'CHRONOSPHERE ROBOGEN',
    status: 'COMPLETED',
    logs: [
      'Mentored 50+ students on ML systems and LLMs',
      'Built offline RAG pipeline: 10K+ documents, sub-second retrieval',
      'Reduced GPU memory by 75% through model quantization',
      'Developed MVA Academic Analyzer: 1000+ records, 93% accuracy',
      'Built attendance & payroll automation: 90% effort reduction'
    ],
    tags: ['MENTORING', 'RAG', 'FLASK', 'ML']
  },
  {
    timestamp: '2023.04 - 2024.12',
    title: 'Basketball Coach',
    organization: 'SUGUNA PIP SCHOOL',
    status: 'COMPLETED',
    logs: [
      'Coached U16 and U18 girls\' basketball teams',
      'Led team to 3rd place at Tamil Nadu CBSE Clusters Tournament',
      'Developed training programs and game strategies'
    ],
    tags: ['LEADERSHIP', 'TEAM BUILDING', 'STRATEGY']
  }
]

const educationLogs = [
  {
    timestamp: '2022 - 2026',
    title: 'B.Tech in AI & Data Science',
    organization: 'SUGUNA COLLEGE OF ENGINEERING',
    status: 'COMPLETED'
  },
  {
    timestamp: '2020 - 2022',
    title: 'Senior Secondary, Computer Science',
    organization: 'SUGUNA PIP SCHOOL (CBSE)',
    status: 'COMPLETED'
  }
]

export default function MemoryBanksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="experience" title="MEMORY BANKS" subtitle="Experience Timeline">
      <div ref={ref} className="space-y-8">
        {/* Memory Logs - Enhanced Timeline */}
        {memoryLogs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            className="data-card p-8 relative overflow-hidden group"
          >
            {/* Timeline connector */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime via-amber to-lime/20" />
            
            {/* Status indicator - Enhanced */}
            <div className="absolute top-6 right-6">
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`terminal-text text-xs px-3 py-1.5 border font-bold tracking-wider flex items-center gap-2 ${
                  log.status === 'ACTIVE' 
                    ? 'border-lime text-lime bg-lime/10' 
                    : 'border-ghost text-ash bg-ghost/30'
                }`}
              >
                {log.status === 'ACTIVE' && (
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                )}
                {log.status}
              </motion.span>
            </div>

            {/* Header - Enhanced */}
            <div className="mb-6 pb-5 border-b border-ghost/50">
              <div className="terminal-text text-xs text-amber mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                TIMESTAMP: {log.timestamp}
              </div>
              <h3 className="text-3xl font-bold text-bone mb-2 serif-display group-hover:text-lime transition-colors duration-300">
                {log.title}
              </h3>
              <p className="terminal-text text-sm text-lime/80 tracking-wider">
                {log.organization}
              </p>
            </div>

            {/* Logs - Enhanced */}
            <div className="space-y-3 mb-6">
              {log.logs.map((logItem, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 + j * 0.05 }}
                  className="flex items-start gap-3 text-sm group/item"
                >
                  <span className="terminal-text text-amber text-xs mt-1 group-hover/item:text-lime transition-colors">
                    ▸
                  </span>
                  <span className="text-bone/70 group-hover/item:text-bone/90 transition-colors leading-relaxed">
                    {logItem}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tags - Enhanced */}
            <div className="flex flex-wrap gap-2">
              {log.tags.map((tag, j) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 + j * 0.03 }}
                  className="px-3 py-1.5 border border-ghost text-ash text-xs terminal-text hover:border-lime/50 hover:text-lime transition-all duration-300"
                  data-hover
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime/0 via-lime/3 to-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}

        {/* Education - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20"
        >
          <div className="terminal-text text-xs text-amber mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber" />
            EDUCATION LOGS
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educationLogs.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                className="data-card p-6 group relative overflow-hidden"
              >
                <div className="terminal-text text-xs text-amber mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber" />
                  {edu.timestamp}
                </div>
                <h4 className="text-xl text-bone font-semibold mb-2 group-hover:text-lime transition-colors">
                  {edu.title}
                </h4>
                <p className="text-bone/60 text-sm">{edu.organization}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-lime/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
