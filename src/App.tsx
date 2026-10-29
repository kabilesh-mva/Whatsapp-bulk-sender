import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootSequence from './components/BootSequence'
import CustomCursor from './components/CustomCursor'
import MissionControlHero from './components/MissionControlHero'
import EnhancedTerminal from './components/EnhancedTerminal'
import ConsciousnessSection from './components/ConsciousnessSection'
import NeuralPathwaysSection from './components/NeuralPathwaysSection'
import MemoryBanksSection from './components/MemoryBanksSection'
import CreatedSystemsSection from './components/CreatedSystemsSection'
import ImpactZonesSection from './components/ImpactZonesSection'
import TransmitSection from './components/TransmitSection'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import DataRain from './components/DataRain'
import SideNav from './components/SideNav'
import MobileNav from './components/MobileNav'
import NowViewing from './components/NowViewing'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <div className="relative min-h-screen bg-void text-bone overflow-x-hidden">
      {/* Boot Sequence */}
      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <SideNav />
      <MobileNav />
      <NowViewing />

      {/* CRT Effects */}
      <DataRain />
      <div className="scanline-overlay" />
      <div className="noise-overlay" />
      <div className="crt-lines" />

      {/* Main Content */}
      {booted && (
        <>
          {/* Mission Control Hero */}
          <MissionControlHero />

          {/* Content Sections */}
          <ConsciousnessSection />
          <SectionDivider label="PROCESSING NEURAL PATHWAYS" />
          <NeuralPathwaysSection />
          <SectionDivider label="ACCESSING MEMORY BANKS" />
          <MemoryBanksSection />
          <SectionDivider label="DISPLAYING CREATED SYSTEMS" />
          <CreatedSystemsSection />
          <SectionDivider label="MAPPING IMPACT ZONES" />
          <ImpactZonesSection />
          <SectionDivider label="OPENING TRANSMISSION CHANNEL" />
          <TransmitSection />
          <Footer />

          {/* Enhanced Terminal */}
          <EnhancedTerminal />
        </>
      )}
    </div>
  )
}
