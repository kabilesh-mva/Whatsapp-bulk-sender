import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionDivider({ label }: { label?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="relative py-12 flex items-center justify-center overflow-hidden">
      {/* Left line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-px flex-1 bg-gradient-to-r from-transparent via-lime/20 to-lime/40 origin-right"
      />
      
      {/* Center label */}
      {label && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-8 terminal-text text-xs text-ash tracking-[0.3em] whitespace-nowrap flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime/30" />
          {label}
          <span className="w-1.5 h-1.5 rounded-full bg-lime/30" />
        </motion.div>
      )}

      {/* Right line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-px flex-1 bg-gradient-to-l from-transparent via-lime/20 to-lime/40 origin-left"
      />
    </div>
  )
}
