import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const bootSequence = [
  { text: '> INITIALIZING NEURAL INTERFACE...', delay: 0 },
  { text: '> LOADING CONSCIOUSNESS MATRIX...', delay: 400 },
  { text: '> CALIBRATING COGNITIVE PATHWAYS...', delay: 800 },
  { text: '> ESTABLISHING SYNAPTIC CONNECTIONS...', delay: 1200 },
  { text: '> MOUNTING MEMORY ARCHITECTURE...', delay: 1600 },
  { text: '> ACCESSING KNOWLEDGE BASE...', delay: 2000 },
  { text: '> SYSTEM READY.', delay: 2400 },
  { text: '> WELCOME TO THE MIND INTERFACE.', delay: 2800 },
]

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [showEnter, setShowEnter] = useState(false)

  useEffect(() => {
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
      }, line.delay)
    })

    setTimeout(() => {
      setShowEnter(true)
    }, 3200)
  }, [])

  const handleEnter = () => {
    onComplete()
  }

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[100] bg-void flex items-center justify-center"
      >
        <div className="max-w-2xl w-full px-8">
          <div className="terminal-text text-sm space-y-3">
            {bootSequence.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={visibleLines.includes(index) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3"
              >
                <span className="text-amber font-bold">{'>'}</span>
                <span className={index === bootSequence.length - 1 ? 'lime-glow font-bold' : ''}>
                  {line.text.replace('> ', '')}
                </span>
                {visibleLines.includes(index) && index < bootSequence.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-lime/50"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>

          {showEnter && (
            <motion.button
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleEnter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-4 border-2 border-lime bg-transparent text-lime font-mono text-sm hover:bg-lime hover:text-void transition-all duration-300 cursor-none shadow-lg shadow-lime/20 hover:shadow-lime/40 tracking-wider font-bold"
              data-hover
            >
              [ ENTER THE MIND ]
            </motion.button>
          )}
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="scanline-overlay" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-lime/30" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-lime/30" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-lime/30" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-lime/30" />
      </motion.div>
    </AnimatePresence>
  )
}
