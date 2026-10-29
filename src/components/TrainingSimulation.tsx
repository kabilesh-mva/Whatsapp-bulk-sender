import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrainingMetrics {
  epoch: number
  loss: number
  accuracy: number
  learningRate: number
}

export default function TrainingSimulation() {
  const [isTraining, setIsTraining] = useState(false)
  const [metrics, setMetrics] = useState<TrainingMetrics>({
    epoch: 0,
    loss: 2.5,
    accuracy: 0,
    learningRate: 0.001
  })
  const [currentLayer, setCurrentLayer] = useState(0)
  const [revealedSections, setRevealedSections] = useState<string[]>([])
  const [showIntro, setShowIntro] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const layers = [
    { name: 'INPUT', data: 'CONSCIOUSNESS', section: 'about', color: '#c4ff00' },
    { name: 'HIDDEN_1', data: 'NEURAL_PATHWAYS', section: 'skills', color: '#ff9500' },
    { name: 'HIDDEN_2', data: 'MEMORY_BANKS', section: 'experience', color: '#c4ff00' },
    { name: 'HIDDEN_3', data: 'CREATED_SYSTEMS', section: 'projects', color: '#ff9500' },
    { name: 'HIDDEN_4', data: 'IMPACT_ZONES', section: 'leadership', color: '#c4ff00' },
    { name: 'OUTPUT', data: 'TRANSMIT', section: 'contact', color: '#ff9500' },
  ]

  // Neural network visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes: { x: number; y: number; layer: number }[] = []
    const connections: { from: number; to: number; active: boolean }[] = []

    // Create network nodes
    layers.forEach((layer, layerIndex) => {
      const nodeCount = layerIndex === 0 || layerIndex === layers.length - 1 ? 3 : 5
      const x = (layerIndex + 1) / (layers.length + 1)
      
      for (let i = 0; i < nodeCount; i++) {
        const y = (i + 1) / (nodeCount + 1)
        nodes.push({ x, y, layer: layerIndex })
      }
    })

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j].layer === nodes[i].layer + 1) {
          connections.push({ from: i, to: j, active: false })
        }
      }
    }

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Draw connections
      connections.forEach((conn, idx) => {
        const from = nodes[conn.from]
        const to = nodes[conn.to]
        const isActive = isTraining && currentLayer >= from.layer
        
        ctx.beginPath()
        ctx.moveTo(from.x * canvas.offsetWidth, from.y * canvas.offsetHeight)
        ctx.lineTo(to.x * canvas.offsetWidth, to.y * canvas.offsetHeight)
        
        if (isActive) {
          const gradient = ctx.createLinearGradient(
            from.x * canvas.offsetWidth, from.y * canvas.offsetHeight,
            to.x * canvas.offsetWidth, to.y * canvas.offsetHeight
          )
          gradient.addColorStop(0, layers[from.layer].color + '60')
          gradient.addColorStop(1, layers[to.layer].color + '60')
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          
          // Animated data flow
          const progress = (time * 2 + idx * 0.1) % 1
          const x = from.x + (to.x - from.x) * progress
          const y = from.y + (to.y - from.y) * progress
          
          ctx.save()
          ctx.beginPath()
          ctx.arc(x * canvas.offsetWidth, y * canvas.offsetHeight, 3, 0, Math.PI * 2)
          ctx.fillStyle = layers[from.layer].color
          ctx.fill()
          ctx.restore()
        } else {
          ctx.strokeStyle = 'rgba(196, 255, 0, 0.05)'
          ctx.lineWidth = 0.5
        }
        
        ctx.stroke()
      })

      // Draw nodes
      nodes.forEach((node) => {
        const isActive = isTraining && currentLayer >= node.layer
        const x = node.x * canvas.offsetWidth
        const y = node.y * canvas.offsetHeight
        
        ctx.beginPath()
        ctx.arc(x, y, isActive ? 6 : 4, 0, Math.PI * 2)
        
        if (isActive) {
          ctx.fillStyle = layers[node.layer].color
          ctx.shadowBlur = 15
          ctx.shadowColor = layers[node.layer].color
        } else {
          ctx.fillStyle = 'rgba(196, 255, 0, 0.2)'
          ctx.shadowBlur = 0
        }
        
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [isTraining, currentLayer])

  // Training simulation
  useEffect(() => {
    if (!isTraining) return

    const interval = setInterval(() => {
      setMetrics(prev => {
        const newEpoch = prev.epoch + 1
        const newLoss = Math.max(0.1, prev.loss * 0.92)
        const newAccuracy = Math.min(0.99, prev.accuracy + 0.08)
        
        return {
          epoch: newEpoch,
          loss: newLoss,
          accuracy: newAccuracy,
          learningRate: prev.learningRate * 0.98
        }
      })

      setCurrentLayer(prev => {
        const next = prev + 1
        if (next < layers.length) {
          setRevealedSections(prevSections => [...prevSections, layers[next].section])
        }
        return next >= layers.length ? prev : next
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isTraining])

  const handleStartTraining = () => {
    setIsTraining(true)
    setShowIntro(false)
  }

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="home" className="relative w-full min-h-screen bg-void overflow-hidden">
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        
        {/* Intro screen */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="terminal-text text-xs text-amber mb-6 tracking-widest"
              >
                {'// NEURAL NETWORK INITIALIZATION'}
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold serif-display mb-4">
                <span className="glitch-text lime-glow" data-text="KABILESH">KABILESH</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold serif-display text-bone/90 mb-8">
                NAVEENKUMAR
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="terminal-text text-sm text-lime/70 mb-12 leading-relaxed"
              >
                <p className="mb-2">AI/ML ENGINEER // COIMBATORE, IN</p>
                <p className="text-xs text-ash/60">
                  Initialize training sequence to explore the neural architecture
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={handleStartTraining}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 border-2 border-lime bg-lime/10 text-lime terminal-text text-sm tracking-wider hover:bg-lime hover:text-void transition-all duration-300 shadow-lg shadow-lime/20"
                data-hover
              >
                [ INITIALIZE TRAINING ]
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Training interface */}
        <AnimatePresence>
          {!showIntro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-6xl"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-6xl font-bold serif-display lime-glow mb-2">
                  KABILESH NAVEENKUMAR
                </h1>
                <p className="terminal-text text-xs text-ash tracking-widest">
                  AI TRAINING SIMULATION // EPOCH {metrics.epoch}
                </p>
              </motion.div>

              {/* Metrics dashboard */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="data-card p-4"
                >
                  <div className="terminal-text text-[10px] text-ash mb-2">EPOCH</div>
                  <div className="text-2xl font-bold text-lime terminal-text">
                    {metrics.epoch}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="data-card p-4"
                >
                  <div className="terminal-text text-[10px] text-ash mb-2">LOSS</div>
                  <div className="text-2xl font-bold text-amber terminal-text">
                    {metrics.loss.toFixed(4)}
                  </div>
                  <div className="mt-2 h-1 bg-ghost rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber to-lime"
                      style={{ width: `${(1 - metrics.loss / 2.5) * 100}%` }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="data-card p-4"
                >
                  <div className="terminal-text text-[10px] text-ash mb-2">ACCURACY</div>
                  <div className="text-2xl font-bold text-lime terminal-text">
                    {(metrics.accuracy * 100).toFixed(1)}%
                  </div>
                  <div className="mt-2 h-1 bg-ghost rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-lime to-amber"
                      style={{ width: `${metrics.accuracy * 100}%` }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="data-card p-4"
                >
                  <div className="terminal-text text-[10px] text-ash mb-2">LEARNING RATE</div>
                  <div className="text-2xl font-bold text-amber terminal-text">
                    {metrics.learningRate.toExponential(2)}
                  </div>
                </motion.div>
              </div>

              {/* Layer progression */}
              <div className="space-y-3">
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`data-card p-5 cursor-pointer transition-all duration-300 ${
                      currentLayer >= i ? 'border-lime/50' : 'opacity-40'
                    }`}
                    onClick={() => handleSectionClick(layer.section)}
                    data-hover
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: currentLayer >= i ? layer.color : '#2a2a2a',
                            boxShadow: currentLayer >= i ? `0 0 10px ${layer.color}` : 'none'
                          }}
                        />
                        <div>
                          <div className="terminal-text text-xs font-bold tracking-wider" style={{ color: currentLayer >= i ? layer.color : '#666' }}>
                            {layer.name}
                          </div>
                          <div className="terminal-text text-[10px] text-ash mt-1">
                            {layer.data}
                          </div>
                        </div>
                      </div>
                      
                      {currentLayer >= i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="terminal-text text-xs text-lime"
                        >
                          ✓ ACTIVATED
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Training status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 text-center"
              >
                <div className="terminal-text text-xs text-ash tracking-widest">
                  {currentLayer < layers.length ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                      TRAINING IN PROGRESS...
                    </span>
                  ) : (
                    <span className="text-lime">✓ TRAINING COMPLETE // SCROLL TO EXPLORE</span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-lime/30" />
      <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-lime/30" />
      <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-lime/30" />
      <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-lime/30" />
    </div>
  )
}
