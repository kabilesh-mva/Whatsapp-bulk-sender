import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const sectionLabels: Record<string, string> = {
  home: 'HOME',
  about: 'CONSCIOUSNESS',
  skills: 'NEURAL PATHWAYS',
  experience: 'MEMORY BANKS',
  projects: 'CREATED SYSTEMS',
  leadership: 'IMPACT ZONES',
  contact: 'TRANSMIT',
}

export default function NowViewing() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
      const scrollPos = window.scrollY + window.innerHeight / 3
      const sections = Object.keys(sectionLabels)
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPos) {
          setCurrentSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
    >
      <div className="flex items-center gap-3 px-5 py-2.5 border border-lime/20 bg-void/80 backdrop-blur-md rounded-full">
        <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
        <span className="terminal-text text-[10px] text-ash tracking-wider">NOW VIEWING:</span>
        <motion.span
          key={currentSection}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="terminal-text text-[10px] text-lime font-bold tracking-wider"
        >
          {sectionLabels[currentSection]}
        </motion.span>
      </div>
    </motion.div>
  )
}
