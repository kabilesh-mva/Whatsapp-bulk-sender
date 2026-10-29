import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', icon: '◉', label: 'HOME' },
  { id: 'about', icon: '◈', label: 'ABOUT' },
  { id: 'skills', icon: '⬡', label: 'SKILLS' },
  { id: 'projects', icon: '⬢', label: 'WORK' },
  { id: 'contact', icon: '◎', label: 'CONTACT' },
]

export default function MobileNav() {
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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden"
    >
      <div className="flex items-center gap-1 px-3 py-2 border border-lime/20 bg-void/90 backdrop-blur-md rounded-full shadow-lg shadow-lime/5">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full transition-all ${
              activeSection === section.id
                ? 'bg-lime/10'
                : 'hover:bg-ghost/50'
            }`}
          >
            <span className={`text-sm transition-colors ${
              activeSection === section.id ? 'text-lime' : 'text-ash/60'
            }`}>
              {section.icon}
            </span>
            <span className={`terminal-text text-[8px] tracking-wider transition-colors ${
              activeSection === section.id ? 'text-lime' : 'text-ash/40'
            }`}>
              {section.label}
            </span>
            
            {activeSection === section.id && (
              <motion.div
                layoutId="mobileNavActive"
                className="absolute inset-0 border border-lime/30 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
