import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const commands = {
  help: 'Available commands: about, skills, experience, projects, leadership, contact, clear, help',
  about: 'Scrolling to consciousness matrix...',
  skills: 'Accessing neural pathways...',
  experience: 'Loading memory banks...',
  projects: 'Displaying created systems...',
  leadership: 'Opening impact zones...',
  contact: 'Initializing transmission protocol...',
  clear: 'CLEAR',
}

export default function Terminal() {
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState<string[]>([
    '> MIND INTERFACE TERMINAL v2.0',
    '> Type "help" for available commands',
    ''
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    
    if (!cmd) return

    const newHistory = [...history, `> ${input}`]

    if (cmd === 'clear') {
      setHistory(['> Terminal cleared', ''])
    } else if (commands[cmd as keyof typeof commands]) {
      newHistory.push(commands[cmd as keyof typeof commands])
      
      if (cmd !== 'help' && cmd !== 'clear') {
        const element = document.getElementById(cmd)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 300)
        }
      }
      
      setHistory(newHistory)
    } else {
      newHistory.push(`Command not found: ${cmd}`)
      setHistory(newHistory)
    }

    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button - Enhanced */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: isOpen ? 90 : 0 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 border-2 border-lime/50 bg-void/95 backdrop-blur-md flex items-center justify-center terminal-text text-lime text-xl hover:border-lime hover:bg-lime/10 transition-all mb-3 ml-auto shadow-lg shadow-lime/10"
        data-hover
      >
        {isOpen ? '×' : '>_'}
      </motion.button>

      {/* Terminal Panel - Enhanced */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 sm:w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="border-2 border-lime/30 bg-void/95 backdrop-blur-md shadow-2xl shadow-lime/5">
              {/* Terminal header - Enhanced */}
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-lime/20 bg-gradient-to-r from-ghost/50 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-lime/70" />
                  </div>
                  <span className="terminal-text text-xs font-bold tracking-wider">TERMINAL</span>
                </div>
                <button
                  onClick={() => setHistory(['> Terminal cleared', ''])}
                  className="terminal-text text-xs text-ash hover:text-lime transition-colors px-2 py-1 hover:bg-lime/10 rounded"
                  data-hover
                >
                  [CLEAR]
                </button>
              </div>

              {/* Terminal content - Enhanced */}
              <div
                ref={terminalRef}
                className="p-4 h-48 overflow-y-auto terminal-text text-xs space-y-1.5 bg-gradient-to-b from-transparent to-ghost/20"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={line.startsWith('>') ? 'text-lime' : 'text-bone/70'}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>

              {/* Input - Enhanced */}
              <form onSubmit={handleSubmit} className="border-t-2 border-lime/20 p-4 bg-gradient-to-r from-ghost/30 to-transparent">
                <div className="flex items-center gap-3">
                  <span className="terminal-text text-amber font-bold">{'>'}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent terminal-text text-xs outline-none placeholder-ash/50"
                    placeholder="Enter command..."
                    autoFocus
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="terminal-text text-xs text-lime hover:text-amber transition-colors px-3 py-1 border border-lime/30 hover:border-amber/50 hover:bg-amber/10 rounded"
                    data-hover
                  >
                    [EXEC]
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
