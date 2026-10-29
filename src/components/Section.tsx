import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id={id} className="relative py-24 md:py-32 px-4 md:px-8 min-h-screen">
      {/* Section header */}
      <div ref={ref} className="max-w-6xl mx-auto mb-16 md:mb-20">
        {/* Subtitle with animated line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-lime to-transparent"
          />
          <span className="terminal-text text-xs text-amber tracking-[0.3em] uppercase">
            {subtitle}
          </span>
        </motion.div>
        
        {/* Main title with glitch effect */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold serif-display mb-6 leading-tight"
        >
          <span className="glitch-text lime-glow" data-text={title}>
            {title}
          </span>
        </motion.h2>

        {/* Decorative bottom border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-gradient-to-r from-lime/40 via-amber/20 to-transparent origin-left"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {children}
      </div>

      {/* Decorative data stream on right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="terminal-text text-[10px] text-lime/20 space-y-1 font-mono">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.05 }}
            >
              {Math.random().toString(36).substring(2, 8)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
