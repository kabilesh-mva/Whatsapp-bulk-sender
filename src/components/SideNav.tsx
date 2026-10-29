import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'CONSCIOUSNESS' },
  { id: 'skills', label: 'NEURAL PATHWAYS' },
  { id: 'experience', label: 'MEMORY BANKS' },
  { id: 'projects', label: 'CREATED SYSTEMS' },
  { id: 'leadership', label: 'IMPACT ZONES' },
  { id: 'contact', label: 'TRANSMIT' },
]

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)

      const scrollPos = window.scrollY + window.innerHeight / 2
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {sections.map((section, i) => (
        <motion.button
          key={section.id}
          onClick={() => handleClick(section.id)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.2, x: -4 }}
          whileTap={{ scale: 0.9 }}
          className="group relative flex items-center justify-end"
          data-hover
        >
          {/* Label */}
          <span className={`terminal-text text-[10px] tracking-wider mr-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
            activeSection === section.id ? 'text-lime' : 'text-ash'
          }`}>
            {section.label}
          </span>

          {/* Dot */}
          <div className="relative">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-lime shadow-[0_0_10px_rgba(196,255,0,0.6)]'
                : 'bg-ash/30 group-hover:bg-ash/60'
            }`} />
            
            {/* Active ring */}
            {activeSection === section.id && (
              <motion.div
                layoutId="activeNavRing"
                className="absolute inset-0 -m-1 border border-lime/40 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </div>
        </motion.button>
      ))}
    </motion.nav>
  )
}
