import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: number
  type: 'user' | 'ai'
  content: string
  followUps?: string[]
  timestamp: Date
}

const suggestedPrompts = [
  'What are your core skills?',
  'Tell me about your experience',
  'Show me your projects',
  'What makes you unique?',
]

interface AIResponse {
  content: string
  followUps: string[]
}

const responses: Record<string, AIResponse> = {
  'skills': {
    content: `My technical arsenal includes:\n\n🧠 **AI/ML Core**: Large Language Models (95%), RAG Systems (92%), Deep Learning (88%)\n\n🤖 **Agentic AI**: LangChain (92%), OpenAI API (95%), Workflow Orchestration (90%)\n\n👁️ **Computer Vision**: YOLOv8 (90%), OpenCV (88%), GLM-OCR (92%)\n\n⚡ **Infrastructure**: Python (95%), FAISS (88%), Azure/AWS (82%)\n\nWant to dive deeper into any area?`,
    followUps: ['Tell me about your experience', 'Show me your projects', 'What makes you unique?']
  },
  
  'experience': {
    content: `I'm currently a **Jr. AI Engineer** at Erdster Information Systems, where I:\n\n• Architected Agentic AI platforms with state-machine workflows\n• Built RAG pipelines processing 10K+ documents with 75% GPU optimization\n• Delivered document intelligence systems with 92-99% accuracy\n• Mentored 50+ students as a Data Science Mentor\n\nPreviously coached basketball, leading teams to state-level tournaments!\n\nInterested in specific projects?`,
    followUps: ['Show me your projects', 'What are your core skills?', 'How can I contact you?']
  },
  
  'projects': {
    content: `Here are some highlights:\n\n🚀 **Agentic AI Platform**: State machines, dual-layer memory, DAG planning for 6 clients\n\n📚 **RAG Pipeline**: 10K+ documents, sub-second retrieval, 75% GPU savings\n\n📄 **Document Intelligence**: 15+ doc types, 92-99% accuracy, GLM-OCR\n\n🎯 **Drone Detection**: Real-time YOLOv8 at 15-20 FPS, 85-90% mAP\n\n🔍 **Accident Detection**: Ensemble system, 88-92% mAP, WBF optimization\n\nWhich project interests you most?`,
    followUps: ['Tell me about your experience', 'What are your skills?', 'What makes you unique?']
  },
  
  'unique': {
    content: `What sets me apart:\n\n🎯 **Production Focus**: I build systems that work in the real world, not just demos\n\n🧠 **Full-Stack AI**: From model training to deployment and monitoring\n\n⚡ **Performance Obsessed**: 75% GPU optimization, sub-second latency\n\n📊 **Business Impact**: 92-99% accuracy translating to real value\n\n🎓 **Teaching Mindset**: Mentored 50+ students, love sharing knowledge\n\n🏀 **Leadership**: Coached teams to state tournaments, organized world records\n\nWant to see my contact info or explore a specific area?`,
    followUps: ['Show me your projects', 'How can I contact you?', 'Tell me about your skills']
  },
  
  'contact': {
    content: `Let's connect!\n\n📧 **Email**: nk.kabilesh@gmail.com\n📱 **Phone**: +91 93855 85574\n🔗 **LinkedIn**: linkedin.com/in/kabileshnaveenkumar\n💻 **GitHub**: github.com/thekabi-4\n🌐 **Portfolio**: kabilesh-profile.vercel.app\n📍 **Location**: Coimbatore, Tamil Nadu, India\n\nI'm open to opportunities and collaborations! Scroll down to explore more sections.`,
    followUps: ['Show me your projects', 'What are your skills?', 'Tell me about your experience']
  },
  
  'default': {
    content: `I'm Kabilesh Naveenkumar, an AI/ML Engineer specializing in:\n\n• Generative AI & LLMs\n• Agentic AI Systems\n• Computer Vision\n• RAG & Document Intelligence\n\nI build production-ready AI systems with real business impact. Try asking about my skills, experience, projects, or what makes me unique!`,
    followUps: ['What are your core skills?', 'Tell me about your experience', 'Show me your projects', 'What makes you unique?']
  }
}

export default function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: `Hello! I'm **AI Kabilesh** 👋\n\nI'm an interactive AI assistant that can tell you about Kabilesh's skills, experience, projects, and more.\n\nTry asking me something or click a suggestion below!`,
      followUps: ['What are your core skills?', 'Tell me about your experience', 'Show me your projects', 'What makes you unique?'],
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userMessage: string): AIResponse => {
    const lower = userMessage.toLowerCase()
    
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('know')) {
      return responses.skills
    }
    if (lower.includes('experience') || lower.includes('work') || lower.includes('job')) {
      return responses.experience
    }
    if (lower.includes('project') || lower.includes('built') || lower.includes('create')) {
      return responses.projects
    }
    if (lower.includes('unique') || lower.includes('special') || lower.includes('different')) {
      return responses.unique
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
      return responses.contact
    }
    
    return responses.default
  }

  const handleSend = async (messageText?: string) => {
    const text = messageText || input
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: text,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking
    setTimeout(() => {
      const response = getResponse(text)
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: response.content,
        followUps: response.followUps,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handlePromptClick = (prompt: string) => {
    handleSend(prompt)
  }

  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, i) => {
        // Bold
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-lime font-bold">$1</strong>')
        // Bullet points
        if (line.startsWith('•')) {
          return `<div key={${i}} class="flex gap-2 my-1"><span class="text-amber">•</span><span>${line.substring(2)}</span></div>`
        }
        // Emoji lines
        if (line.match(/^[🧠🤖👁️⚡🚀📚📄🎯🔍🎓🏀📧📱🔗💻🌐📍]/)) {
          return `<div key={${i}} class="my-1">${line}</div>`
        }
        return line ? `<div key={${i}} class="my-1">${line}</div>` : '<br />'
      })
      .join('')
  }

  return (
    <div id="home" className="relative w-full min-h-screen bg-void flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 border-b border-ghost/50 bg-void/80 backdrop-blur-md"
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime to-amber flex items-center justify-center">
              <span className="text-void font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-lg font-bold serif-display lime-glow">AI Kabilesh</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="terminal-text text-[10px] text-ash">Online • Ready to chat</span>
              </div>
            </div>
          </div>
          
          <div className="terminal-text text-[10px] text-ash text-right hidden md:block">
            <div>INTERACTIVE PORTFOLIO</div>
            <div className="text-lime/60">v2.0.26</div>
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-5 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-lime/20 to-amber/20 border border-lime/30 text-bone'
                        : 'bg-ghost/50 border border-ghost text-bone/90'
                    }`}
                  >
                    <div 
                      className="text-sm leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                    />
                  </div>
                  
                  {/* Follow-up suggestions for AI messages */}
                  {message.type === 'ai' && message.followUps && message.followUps.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 flex flex-wrap gap-2"
                    >
                      {message.followUps.map((suggestion, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          onClick={() => handleSend(suggestion)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 border border-lime/30 bg-lime/5 text-lime terminal-text text-xs hover:bg-lime/10 hover:border-lime/50 transition-all rounded-full"
                          data-hover
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                  
                  <div className={`terminal-text text-[10px] text-ash mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-ghost/50 border border-ghost rounded-2xl px-5 py-3">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-lime"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-lime"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-lime"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested prompts - only show before first user message */}
      {messages.length === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto px-4 pb-4"
        >
          <div className="terminal-text text-[10px] text-ash mb-3 tracking-wider">
            💡 QUICK START
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, i) => (
              <motion.button
                key={prompt}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                onClick={() => handlePromptClick(prompt)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-lime/30 bg-lime/5 text-lime terminal-text text-xs hover:bg-lime/10 hover:border-lime/50 transition-all rounded-full"
                data-hover
              >
                {prompt}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Input area */}
      <div className="relative z-10 border-t border-ghost/50 bg-void/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about skills, experience, projects..."
              className="flex-1 bg-ghost/30 border border-ghost px-4 py-3 text-bone terminal-text text-sm focus:border-lime focus:outline-none transition-all rounded-lg placeholder-ash/50"
              disabled={isTyping}
            />
            <motion.button
              onClick={() => handleSend()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!input.trim() || isTyping}
              className="px-6 py-3 bg-gradient-to-r from-lime to-amber text-void terminal-text text-sm font-bold hover:shadow-lg hover:shadow-lime/20 transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              data-hover
            >
              Send
            </motion.button>
          </div>
          <div className="terminal-text text-[10px] text-ash mt-2 text-center">
            Press Enter to send • Shift+Enter for new line
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-lime/20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-lime/20 pointer-events-none" />
    </div>
  )
}
