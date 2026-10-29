import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 border-t-2 border-ghost">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand - Enhanced */}
          <div>
            <h3 className="text-3xl font-bold serif-display lime-glow mb-3">
              KABILESH
            </h3>
            <p className="terminal-text text-xs text-ash tracking-wider">
              AI ENGINEER // MIND INTERFACE
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="terminal-text text-xs text-lime/70">SYSTEM ONLINE</span>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <div className="terminal-text text-xs text-amber mb-6 tracking-wider font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              NAVIGATION
            </div>
            <div className="space-y-3">
              {['about', 'skills', 'experience', 'projects', 'leadership', 'contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block text-bone/60 text-sm hover:text-lime transition-colors terminal-text group"
                  data-hover
                >
                  <span className="text-lime/30 group-hover:text-lime transition-colors mr-2">{'>'}</span>
                  {link.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Status - Enhanced */}
          <div>
            <div className="terminal-text text-xs text-amber mb-6 tracking-wider font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              SYSTEM STATUS
            </div>
            <div className="space-y-3 terminal-text text-xs">
              <div className="flex items-center gap-3 p-3 bg-ghost/30 rounded">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-bone/80">ALL SYSTEMS OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-ghost/30 rounded">
                <span className="text-ash">UPTIME:</span>
                <span className="text-lime font-bold">99.9%</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-ghost/30 rounded">
                <span className="text-ash">LAST UPDATE:</span>
                <span className="text-bone/70">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar - Enhanced */}
        <div className="pt-8 border-t border-ghost flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="terminal-text text-xs text-ash text-center md:text-left">
            © {new Date().getFullYear()} KABILESH NAVEENKUMAR // ALL RIGHTS RESERVED
          </div>
          <div className="terminal-text text-xs text-ash text-center md:text-right flex items-center gap-2">
            <span>DESIGNED & BUILT WITH</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              {'<'}3
            </motion.span>
            <span>AND CAFFEINE</span>
          </div>
        </div>

        {/* ASCII art signature - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 text-center terminal-text text-[10px] text-ash/30"
        >
          <pre className="inline-block">
{`
    ╔═══════════════════════════════════════╗
    ║  END OF TRANSMISSION // SYSTEM IDLE  ║
    ╚═══════════════════════════════════════╝
`}
          </pre>
        </motion.div>
      </div>
    </footer>
  )
}
