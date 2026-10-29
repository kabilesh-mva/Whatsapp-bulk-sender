import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Section from './Section'

export default function TransmitSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [message, setMessage] = useState('')
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [transmitted, setTransmitted] = useState(false)

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTransmitting(true)
    
    setTimeout(() => {
      window.open(`mailto:nk.kabilesh@gmail.com?subject=Transmission from Mind Interface&body=${encodeURIComponent(message)}`)
      setIsTransmitting(false)
      setTransmitted(true)
      setTimeout(() => setTransmitted(false), 3000)
    }, 1500)
  }

  return (
    <Section id="contact" title="TRANSMIT" subtitle="Communication Protocol">
      <div ref={ref} className="grid md:grid-cols-2 gap-12">
        {/* Transmission Terminal - Enhanced */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="terminal-text text-xs text-amber mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            INITIATE TRANSMISSION PROTOCOL
          </div>
          
          <form onSubmit={handleTransmit} className="space-y-6">
            <div>
              <label className="terminal-text text-xs text-ash block mb-3 tracking-wider">
                IDENTIFIER (NAME)
              </label>
              <input
                type="text"
                required
                className="w-full bg-ghost/30 border-2 border-ghost px-5 py-4 text-bone terminal-text text-sm focus:border-lime focus:outline-none focus:bg-ghost/50 transition-all rounded"
                placeholder="Enter your identifier..."
              />
            </div>

            <div>
              <label className="terminal-text text-xs text-ash block mb-3 tracking-wider">
                FREQUENCY (EMAIL)
              </label>
              <input
                type="email"
                required
                className="w-full bg-ghost/30 border-2 border-ghost px-5 py-4 text-bone terminal-text text-sm focus:border-lime focus:outline-none focus:bg-ghost/50 transition-all rounded"
                placeholder="your@frequency.com"
              />
            </div>

            <div>
              <label className="terminal-text text-xs text-ash block mb-3 tracking-wider">
                MESSAGE PAYLOAD
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full bg-ghost/30 border-2 border-ghost px-5 py-4 text-bone terminal-text text-sm focus:border-lime focus:outline-none focus:bg-ghost/50 transition-all resize-none rounded"
                placeholder="Encode your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isTransmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 border-2 border-lime text-lime terminal-text text-sm tracking-wider hover:bg-lime hover:text-void transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold shadow-lg shadow-lime/10 hover:shadow-lime/20 rounded"
              data-hover
            >
              {isTransmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="inline-block"
                  >
                    ◉
                  </motion.span>
                  TRANSMITTING...
                </span>
              ) : transmitted ? (
                <span className="flex items-center justify-center gap-2">
                  ✓ TRANSMISSION COMPLETE
                </span>
              ) : (
                '[ INITIATE TRANSMISSION ]'
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Direct Channels - Enhanced */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-5"
        >
          <div className="terminal-text text-xs text-amber mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber" />
            DIRECT CHANNELS
          </div>

          {/* Contact Cards - Enhanced */}
          <a
            href="mailto:nk.kabilesh@gmail.com"
            className="data-card p-6 flex items-center gap-5 group block"
            data-hover
          >
            <div className="w-14 h-14 border-2 border-lime/30 flex items-center justify-center terminal-text text-lime text-xl group-hover:bg-lime group-hover:text-void transition-all font-bold rounded-lg">
              @
            </div>
            <div className="flex-1">
              <div className="terminal-text text-xs text-ash mb-1 tracking-wider">EMAIL</div>
              <div className="text-bone text-sm group-hover:text-lime transition-colors font-medium">
                nk.kabilesh@gmail.com
              </div>
            </div>
            <div className="text-lime/30 group-hover:text-lime transition-colors text-2xl">→</div>
          </a>

          <a
            href="tel:+919385585574"
            className="data-card p-6 flex items-center gap-5 group block"
            data-hover
          >
            <div className="w-14 h-14 border-2 border-amber/30 flex items-center justify-center terminal-text text-amber text-xl group-hover:bg-amber group-hover:text-void transition-all font-bold rounded-lg">
              #
            </div>
            <div className="flex-1">
              <div className="terminal-text text-xs text-ash mb-1 tracking-wider">PHONE</div>
              <div className="text-bone text-sm group-hover:text-amber transition-colors font-medium">
                +91 93855 85574
              </div>
            </div>
            <div className="text-amber/30 group-hover:text-amber transition-colors text-2xl">→</div>
          </a>

          <a
            href="https://linkedin.com/in/kabileshnaveenkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="data-card p-6 flex items-center gap-5 group block"
            data-hover
          >
            <div className="w-14 h-14 border-2 border-lime/30 flex items-center justify-center terminal-text text-lime text-xl group-hover:bg-lime group-hover:text-void transition-all font-bold rounded-lg">
              in
            </div>
            <div className="flex-1">
              <div className="terminal-text text-xs text-ash mb-1 tracking-wider">LINKEDIN</div>
              <div className="text-bone text-sm group-hover:text-lime transition-colors font-medium">
                kabileshnaveenkumar
              </div>
            </div>
            <div className="text-lime/30 group-hover:text-lime transition-colors text-2xl">→</div>
          </a>

          <a
            href="https://github.com/thekabi-4"
            target="_blank"
            rel="noopener noreferrer"
            className="data-card p-6 flex items-center gap-5 group block"
            data-hover
          >
            <div className="w-14 h-14 border-2 border-amber/30 flex items-center justify-center terminal-text text-amber text-xl group-hover:bg-amber group-hover:text-void transition-all font-bold rounded-lg">
              {'>'}_
            </div>
            <div className="flex-1">
              <div className="terminal-text text-xs text-ash mb-1 tracking-wider">GITHUB</div>
              <div className="text-bone text-sm group-hover:text-amber transition-colors font-medium">
                @thekabi-4
              </div>
            </div>
            <div className="text-amber/30 group-hover:text-amber transition-colors text-2xl">→</div>
          </a>

          {/* Location - Enhanced */}
          <div className="data-card p-6">
            <div className="terminal-text text-xs text-ash mb-2 tracking-wider">LOCATION</div>
            <div className="text-bone text-sm font-medium mb-3">Coimbatore, Tamil Nadu, India</div>
            <div className="terminal-text text-xs text-lime/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime/50" />
              11.0168° N, 76.9558° E
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
