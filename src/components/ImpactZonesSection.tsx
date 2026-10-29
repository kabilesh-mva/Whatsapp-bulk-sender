import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'

const impactZones = [
  {
    title: 'WORLD RECORD COORDINATION',
    organization: 'MACRO VISION ACADEMY',
    year: '2024',
    impact: '750+ STUDENTS',
    description: 'Event Lead & POC for two large-scale coding world-record attempts. Managed logistics, documentation, and certification with World Book of Records, London.',
    type: 'SCALE'
  },
  {
    title: '24-HOUR CODEATHON',
    organization: 'KALAM\'S WORLD RECORDS',
    year: '2024',
    impact: 'NON-STOP',
    description: 'Organizer & participant in group world-record attempt for non-stop programming. Demonstrated endurance and collaborative coding under extreme conditions.',
    type: 'ENDURANCE'
  },
  {
    title: 'TREASURER & AWS INSTRUCTOR',
    organization: 'SUGUNA COLLEGE',
    year: '2023-2025',
    impact: '2X TERM',
    description: 'Two-time Treasurer managing student organization finances. AWS Student Instructor conducting technical sessions to upskill peers in cloud computing.',
    type: 'LEADERSHIP'
  },
  {
    title: 'BASKETBALL COACH',
    organization: 'TAMIL NADU CBSE',
    year: '2023-2024',
    impact: '3RD PLACE',
    description: 'Coached U16 and U18 girls\' basketball teams. Led team to 3rd place at Tamil Nadu CBSE Clusters Tournament through strategic training and game planning.',
    type: 'COACHING'
  }
]

const certifications = [
  'Machine Learning Foundations — AWS Academy',
  'Prompt Engineering — AWS',
  'Introduction to Large Language Models — Google Cloud',
  'Introduction to Generative AI — Google Cloud',
  'Improving Real-World RAG Systems — Analytics Vidhya',
  'AI for All: From Basics to GenAI Practice — NVIDIA',
  'Machine Learning with TensorFlow — Infosys Springboard'
]

export default function ImpactZonesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="leadership" title="IMPACT ZONES" subtitle="Leadership & Recognition">
      <div ref={ref}>
        {/* Impact Zones Grid - Enhanced */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {impactZones.map((zone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="data-card p-7 relative overflow-hidden group"
              data-hover
            >
              {/* Impact badge - Enhanced */}
              <div className="absolute top-5 right-5">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="terminal-text text-xs text-amber border-2 border-amber/40 px-3 py-1.5 bg-amber/10 font-bold tracking-wider"
                >
                  {zone.impact}
                </motion.span>
              </div>

              {/* Type indicator - Enhanced */}
              <div className="terminal-text text-[10px] text-ash mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime/50" />
                TYPE: {zone.type}
              </div>

              {/* Title - Enhanced */}
              <h3 className="text-2xl font-bold text-bone mb-3 serif-display group-hover:text-lime transition-colors duration-300 leading-tight pr-24">
                {zone.title}
              </h3>

              {/* Organization & Year - Enhanced */}
              <div className="terminal-text text-xs text-lime/80 mb-5 pb-4 border-b border-ghost/50 tracking-wider">
                {zone.organization} • {zone.year}
              </div>

              {/* Description */}
              <p className="text-bone/70 text-sm leading-relaxed group-hover:text-bone/90 transition-colors">
                {zone.description}
              </p>

              {/* Hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime/0 via-lime/3 to-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Animated border */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime to-amber group-hover:w-full transition-all duration-500" />
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-lime/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Certifications - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="data-card p-8 relative overflow-hidden"
        >
          {/* Header */}
          <div className="terminal-text text-xs text-amber mb-8 flex items-center gap-3 pb-4 border-b border-ghost/50">
            <span className="w-2 h-2 rounded-full bg-amber" />
            CERTIFICATION LOGS
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.06 }}
                className="flex items-start gap-3 text-sm group p-3 hover:bg-ghost/30 rounded transition-colors"
              >
                <span className="terminal-text text-lime text-xs mt-0.5 group-hover:scale-110 transition-transform">
                  ◆
                </span>
                <span className="text-bone/70 group-hover:text-bone transition-colors leading-relaxed">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-lime/20" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-lime/20" />
        </motion.div>
      </div>
    </Section>
  )
}
