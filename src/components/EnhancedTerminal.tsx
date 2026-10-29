import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TerminalMessage {
  id: number
  type: 'input' | 'output' | 'error' | 'system'
  content: string
  suggestions?: string[]
}

const commandResponses: Record<string, { content: string; suggestions: string[] }> = {
  'help': {
    content: `Available commands:
  about       - Learn about Kabilesh
  skills      - View technical skills
  experience  - Work history
  projects    - Featured projects
  contact     - Get in touch
  clear       - Clear terminal
  help        - Show this message`,
    suggestions: ['about', 'skills', 'projects']
  },
  'about': {
    content: `╔══════════════════════════════════════════════════════════╗
║                    KABILESH NAVEENKUMAR                 ║
║                   AI/ML Engineer                        ║
╚══════════════════════════════════════════════════════════╝

🎯 Mission: Building production-oriented AI systems

📍 Location: Coimbatore, Tamil Nadu, India
💼 Current: Jr. AI Engineer @ Erdster Information Systems

🧠 Core Focus:
  • Generative AI & LLMs
  • Agentic AI Systems
  • Computer Vision
  • RAG & Document Intelligence

📊 Impact Metrics:
  • 15+ document types processed
  • 92-99% accuracy achieved
  • 10K+ documents in RAG systems
  • 75% GPU memory optimization`,
    suggestions: ['skills', 'experience', 'projects']
  },
  'skills': {
    content: `┌─────────────────────────────────────────────────────────┐
│                    TECHNICAL ARSENAL                     │
└─────────────────────────────────────────────────────────┘

🧠 AI/ML CORE
  Large Language Models      ████████████████████ 95%
  RAG Systems                ███████████████████░ 92%
  Deep Learning              █████████████████░░░ 88%
  Machine Learning           ██████████████████░░ 90%

🤖 AGENTIC AI
  LangChain                  ████████████████████ 92%
  OpenAI API                 █████████████████████ 95%
  Workflow Orchestration     ██████████████████░░ 90%
  State Management           █████████████████░░░ 88%

👁️ COMPUTER VISION
  YOLOv8                     ██████████████████░░ 90%
  OpenCV                     █████████████████░░░ 88%
  GLM-OCR                    ████████████████████ 92%
  Azure Computer Vision      ████████████████░░░░ 82%

⚡ INFRASTRUCTURE
  Python                     █████████████████████ 95%
  FAISS                      █████████████████░░░ 88%
  Vector Databases           █████████████████░░░ 85%
  Azure/AWS                  ████████████████░░░░ 82%`,
    suggestions: ['experience', 'projects', 'contact']
  },
  'experience': {
    content: `┌─────────────────────────────────────────────────────────┐
│                   PROFESSIONAL JOURNEY                   │
└─────────────────────────────────────────────────────────┘

🚀 Jr. AI Engineer | Erdster Information Systems
   Apr 2026 – Present | Coimbatore, India
   
   • Architected Agentic AI platform with state-machine workflows
   • Built RAG pipelines: 10K+ docs, sub-second retrieval
   • Document intelligence: 15+ types, 92-99% accuracy
   • 75% GPU memory optimization through quantization

🎓 Data Science Mentor | Chronosphere Robogen
   Jul 2025 – Dec 2025 | Remote
   
   • Mentored 50+ students on ML systems & LLMs
   • Built offline RAG pipeline with 10K+ documents
   • MVA Academic Analyzer: 1K+ records, 93% accuracy
   • Attendance automation: 90% effort reduction

🏀 Basketball Coach | Suguna PIP School
   Apr 2023 – Dec 2024 | Coimbatore
   
   • Coached U16 & U18 girls' teams
   • Led team to 3rd place at Tamil Nadu CBSE Clusters`,
    suggestions: ['projects', 'skills', 'contact']
  },
  'projects': {
    content: `┌─────────────────────────────────────────────────────────┐
│                    FEATURED PROJECTS                     │
└─────────────────────────────────────────────────────────┘

🤖 AGENTIC AI PLATFORM
   Status: PRODUCTION | Clients: 6 | Accuracy: 99%
   State machines, dual-layer memory, DAG planning
   Tech: LangChain, State Machine, DAG, Memory Architecture

📚 RAG PIPELINE SYSTEM
   Status: DEPLOYED | Docs: 10K+ | GPU Saved: 75%
   Sub-second retrieval, streaming Flask API
   Tech: FAISS, Embeddings, Quantization, Flask

📄 DOCUMENT INTELLIGENCE
   Status: PRODUCTION | Accuracy: 92-99% | Types: 15+
   GLM-OCR, privacy-conscious processing
   Tech: GLM-OCR, PP-DocLayout, LLM Validation, Azure CV

🎯 DRONE MOSQUITO DETECTION
   Status: PROTOTYPE | mAP: 85-90% | FPS: 15-20
   Real-time edge AI, 30% latency reduction
   Tech: YOLOv8, Roboflow, OpenCV, ESP32-CAM

🔍 ACCIDENT DETECTION SYSTEM
   Status: COMPLETED | mAP: 88-92% | FPS: 20
   Ensemble-based, Weighted Boxes Fusion
   Tech: PyTorch, YOLOv8, WBF, OpenCV

📊 MVA ACADEMIC ANALYZER
   Status: DEPLOYED | Records: 1K+ | Accuracy: 93%
   At-risk student identification, 80%+ effort saved
   Tech: ML, Pandas, Classification, Automation`,
    suggestions: ['skills', 'experience', 'contact']
  },
  'contact': {
    content: `┌─────────────────────────────────────────────────────────┐
│                    LET'S CONNECT                         │
└─────────────────────────────────────────────────────────┘

📧 Email:     nk.kabilesh@gmail.com
📱 Phone:     +91 93855 85574
🔗 LinkedIn:  linkedin.com/in/kabileshnaveenkumar
💻 GitHub:    github.com/thekabi-4
🌐 Portfolio: kabilesh-profile.vercel.app
📍 Location:  Coimbatore, Tamil Nadu, India

✨ Status: Available for opportunities & collaborations

Type 'about' to learn more or scroll down to explore sections!`,
    suggestions: ['about', 'skills', 'projects']
  }
}

export default function EnhancedTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalMessage[]>([
    {
      id: 1,
      type: 'system',
      content: `╔══════════════════════════════════════════════════════════╗
║          KABILESH NAVEENKUMAR - TERMINAL v2.0           ║
║              AI/ML Engineer Portfolio                    ║
╚══════════════════════════════════════════════════════════╝

Welcome to the interactive terminal!
Type 'help' to see available commands.`,
      suggestions: ['help', 'about', 'skills']
    }
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const processCommand = (cmd: string) => {
    const lower = cmd.toLowerCase().trim()
    
    if (lower === 'clear') {
      setHistory([{
        id: Date.now(),
        type: 'system',
        content: 'Terminal cleared.',
        suggestions: ['help', 'about', 'skills']
      }])
      return
    }

    if (commandResponses[lower]) {
      const response = commandResponses[lower]
      setHistory(prev => [...prev, {
        id: Date.now(),
        type: 'output',
        content: response.content,
        suggestions: response.suggestions
      }])
    } else {
      setHistory(prev => [...prev, {
        id: Date.now(),
        type: 'error',
        content: `Command not found: ${cmd}\nType 'help' for available commands.`,
        suggestions: ['help']
      }])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim()
    
    // Add to command history
    setCommandHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)

    // Add input to history
    setHistory(prev => [...prev, {
      id: Date.now(),
      type: 'input',
      content: cmd
    }])

    // Process command
    processCommand(cmd)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setTimeout(() => {
      setHistory(prev => [...prev, {
        id: Date.now(),
        type: 'input',
        content: suggestion
      }])
      processCommand(suggestion)
      setInput('')
    }, 100)
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 border-2 border-lime/50 bg-void/95 backdrop-blur-md flex items-center justify-center terminal-text text-lime text-xl hover:border-lime hover:bg-lime/10 transition-all shadow-lg shadow-lime/10"
        data-hover
      >
        {isOpen ? '×' : '>_'}
      </motion.button>

      {/* Terminal panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-2xl h-[70vh] max-h-[600px]"
          >
            <div className="h-full flex flex-col border-2 border-lime/30 bg-void/98 backdrop-blur-md shadow-2xl shadow-lime/5">
              {/* Header */}
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
                  onClick={() => {
                    setHistory([{
                      id: Date.now(),
                      type: 'system',
                      content: 'Terminal cleared.',
                      suggestions: ['help', 'about', 'skills']
                    }])
                  }}
                  className="terminal-text text-xs text-ash hover:text-lime transition-colors px-2 py-1 hover:bg-lime/10 rounded"
                  data-hover
                >
                  [CLEAR]
                </button>
              </div>

              {/* Content */}
              <div
                ref={terminalRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 terminal-text text-xs"
              >
                {history.map((msg) => (
                  <div key={msg.id}>
                    {msg.type === 'input' && (
                      <div className="flex items-start gap-2">
                        <span className="text-amber font-bold">{'>'}</span>
                        <span className="text-lime">{msg.content}</span>
                      </div>
                    )}
                    
                    {msg.type === 'output' && (
                      <div className="ml-4">
                        <pre className="text-bone/90 whitespace-pre-wrap font-mono leading-relaxed">
                          {msg.content}
                        </pre>
                        {msg.suggestions && msg.suggestions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {msg.suggestions.map((suggestion, i) => (
                              <motion.button
                                key={suggestion}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => handleSuggestionClick(suggestion)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 py-1 border border-lime/30 bg-lime/5 text-lime text-xs hover:bg-lime/10 hover:border-lime/50 transition-all rounded"
                                data-hover
                              >
                                {suggestion}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {msg.type === 'error' && (
                      <div className="ml-4">
                        <span className="text-red-400">Error: </span>
                        <span className="text-bone/70">{msg.content}</span>
                        {msg.suggestions && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {msg.suggestions.map((suggestion, i) => (
                              <motion.button
                                key={suggestion}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => handleSuggestionClick(suggestion)}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 border border-lime/30 bg-lime/5 text-lime text-xs hover:bg-lime/10 transition-all rounded"
                                data-hover
                              >
                                {suggestion}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {msg.type === 'system' && (
                      <div>
                        <pre className="text-lime/80 whitespace-pre-wrap font-mono leading-relaxed">
                          {msg.content}
                        </pre>
                        {msg.suggestions && msg.suggestions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {msg.suggestions.map((suggestion, i) => (
                              <motion.button
                                key={suggestion}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => handleSuggestionClick(suggestion)}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 border border-lime/30 bg-lime/5 text-lime text-xs hover:bg-lime/10 transition-all rounded"
                                data-hover
                              >
                                {suggestion}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="border-t-2 border-lime/20 p-4 bg-gradient-to-r from-ghost/30 to-transparent">
                <div className="flex items-center gap-3">
                  <span className="terminal-text text-amber font-bold">{'>'}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent terminal-text text-xs outline-none placeholder-ash/50 text-lime"
                    placeholder="Type a command..."
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
                <div className="mt-2 terminal-text text-[10px] text-ash/50">
                  Use ↑↓ for history • Tab for autocomplete
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
