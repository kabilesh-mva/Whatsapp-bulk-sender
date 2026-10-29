import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Section from './Section'

const systemModules = [
  {
    id: 'agentic-platform',
    name: 'AGENTIC AI PLATFORM',
    type: 'CORE INFRASTRUCTURE',
    description: 'State-machine workflows, dual-layer memory architecture, DAG-based planning, agent registry with manifests and schema validation',
    metrics: [
      { label: 'CLIENTS', value: '6' },
      { label: 'ACCURACY', value: '99%' },
      { label: 'DOC TYPES', value: '15+' }
    ],
    technologies: ['LANGCHAIN', 'STATE MACHINE', 'DAG', 'MEMORY ARCH'],
    status: 'PRODUCTION'
  },
  {
    id: 'rag-pipeline',
    name: 'RAG PIPELINE SYSTEM',
    type: 'RETRIEVAL ENGINE',
    description: 'Offline RAG over 10K+ documents with sub-second retrieval, 75% GPU memory reduction through quantization, streaming Flask API',
    metrics: [
      { label: 'DOCUMENTS', value: '10K+' },
      { label: 'GPU SAVED', value: '75%' },
      { label: 'LATENCY', value: '<1s' }
    ],
    technologies: ['FAISS', 'EMBEDDINGS', 'QUANTIZATION', 'FLASK'],
    status: 'DEPLOYED'
  },
  {
    id: 'doc-intelligence',
    name: 'DOCUMENT INTELLIGENCE',
    type: 'IDP SYSTEM',
    description: 'Extraction, classification, validation for 15+ document types with 92-99% accuracy, local GLM-OCR for privacy-conscious processing',
    metrics: [
      { label: 'ACCURACY', value: '92-99%' },
      { label: 'DOC TYPES', value: '15+' },
      { label: 'ENGAGEMENTS', value: '6' }
    ],
    technologies: ['GLM-OCR', 'PP-DOCLAYOUT', 'LLM VALIDATION', 'AZURE CV'],
    status: 'PRODUCTION'
  },
  {
    id: 'drone-detection',
    name: 'DRONE MOSQUITO DETECTION',
    type: 'EDGE AI SYSTEM',
    description: 'Real-time object detection for mosquito/drone identification at 15-20 FPS, 30% latency reduction through browser optimization',
    metrics: [
      { label: 'mAP@50', value: '85-90%' },
      { label: 'FPS', value: '15-20' },
      { label: 'LATENCY', value: '-30%' }
    ],
    technologies: ['YOLOv8', 'ROBOFLOW', 'OPENCV', 'ESP32-CAM'],
    status: 'PROTOTYPE'
  },
  {
    id: 'accident-detection',
    name: 'ACCIDENT DETECTION SYSTEM',
    type: 'SAFETY AI',
    description: 'Ensemble-based detection achieving 88-92% mAP@50, 15% improvement with Weighted Boxes Fusion, CCTV processing at 20 FPS',
    metrics: [
      { label: 'mAP@50', value: '88-92%' },
      { label: 'FPS', value: '20' },
      { label: 'WBF IMPROVEMENT', value: '15%' }
    ],
    technologies: ['PYTORCH', 'YOLOv8', 'WBF', 'OPENCV'],
    status: 'COMPLETED'
  },
  {
    id: 'academic-analyzer',
    name: 'MVA ACADEMIC ANALYZER',
    type: 'ANALYTICS ENGINE',
    description: 'Processed 1000+ student records to identify at-risk students with 93% accuracy, 80%+ reduction in manual review effort',
    metrics: [
      { label: 'RECORDS', value: '1K+' },
      { label: 'ACCURACY', value: '93%' },
      { label: 'EFFORT SAVED', value: '80%+' }
    ],
    technologies: ['ML', 'PANDAS', 'CLASSIFICATION', 'AUTOMATION'],
    status: 'DEPLOYED'
  }
]

export default function CreatedSystemsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <Section id="projects" title="CREATED SYSTEMS" subtitle="Project Modules">
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systemModules.map((module, i) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            onMouseEnter={() => setHoveredModule(module.id)}
            onMouseLeave={() => setHoveredModule(null)}
            className="data-card p-6 cursor-pointer group relative overflow-hidden"
            data-hover
          >
            {/* Status badge - Enhanced */}
            <div className="absolute top-4 right-4 z-10">
              <motion.span
                animate={{
                  scale: hoveredModule === module.id ? 1.1 : 1,
                }}
                className={`terminal-text text-[10px] px-2 py-1 border font-bold tracking-wider ${
                  module.status === 'PRODUCTION' 
                    ? 'border-lime text-lime bg-lime/10' 
                    : module.status === 'DEPLOYED'
                    ? 'border-amber text-amber bg-amber/10'
                    : module.status === 'PROTOTYPE'
                    ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                    : 'border-ghost text-ash bg-ghost/50'
                }`}
              >
                {module.status}
              </motion.span>
            </div>

            {/* Module ID - Enhanced */}
            <div className="terminal-text text-[10px] text-ash mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime/50" />
              MODULE_{String(i + 1).padStart(3, '0')}
            </div>

            {/* Name - Enhanced */}
            <h3 className="text-lg font-bold terminal-text mb-2 group-hover:text-lime transition-colors duration-300 leading-tight">
              {module.name}
            </h3>

            {/* Type - Enhanced */}
            <p className="terminal-text text-xs text-amber mb-5 pb-4 border-b border-ghost/50">
              {module.type}
            </p>

            {/* Description */}
            <p className="text-bone/60 text-sm leading-relaxed mb-6 group-hover:text-bone/80 transition-colors">
              {module.description}
            </p>

            {/* Metrics - Enhanced Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {module.metrics.map((metric, j) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                  className="text-center p-2 bg-ghost/30 rounded border border-ghost/50"
                >
                  <div className="terminal-text text-xl font-bold text-lime mb-1">
                    {metric.value}
                  </div>
                  <div className="terminal-text text-[8px] text-ash tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies - Enhanced */}
            <div className="flex flex-wrap gap-2">
              {module.technologies.map((tech, j) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 + j * 0.03 }}
                  className="px-2 py-1 border border-ghost text-ash text-[10px] terminal-text group-hover:border-lime/30 group-hover:text-lime/70 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Hover effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Animated border */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime to-amber group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
