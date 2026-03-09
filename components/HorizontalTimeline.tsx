'use client'

import { motion } from 'framer-motion'
import { Shield, Microscope, Dna, Atom, Target } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TimelineNode {
  id: string
  era: string
  eraEn: string
  period: string
  year: string
  icon: any
  color: string
  description: string
}

const timelineNodes: TimelineNode[] = [
  {
    id: 'era1',
    era: '经验免疫',
    eraEn: 'Empirical',
    period: '10世纪-1796',
    year: '10th C',
    icon: Shield,
    color: 'from-amber-500 to-orange-500',
    description: '人痘接种术开创免疫学先河',
  },
  {
    id: 'era2',
    era: '经典免疫',
    eraEn: 'Classical',
    period: '1880-1950',
    year: '1880',
    icon: Microscope,
    color: 'from-blue-500 to-indigo-500',
    description: '疫苗学与抗体理论建立',
  },
  {
    id: 'era3',
    era: '现代免疫',
    eraEn: 'Modern',
    period: '1950-1970',
    year: '1950',
    icon: Dna,
    color: 'from-violet-500 to-purple-500',
    description: '克隆选择与免疫耐受理论',
  },
  {
    id: 'era4',
    era: '分子免疫',
    eraEn: 'Molecular',
    period: '1970-2000',
    year: '1970',
    icon: Atom,
    color: 'from-rose-500 to-red-500',
    description: '单克隆抗体与TCR发现',
  },
  {
    id: 'era5',
    era: '免疫治疗',
    eraEn: 'Therapy',
    period: '2000-至今',
    year: '2000+',
    icon: Target,
    color: 'from-emerald-500 to-teal-500',
    description: '免疫检查点与CAR-T革命',
  },
]

interface HorizontalTimelineProps {
  onNodeClick?: (eraId: string) => void
}

export default function HorizontalTimeline({ onNodeClick }: HorizontalTimelineProps) {
  const [activeNode, setActiveNode] = useState<string>('era1')
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  // 监听滚动，自动更新激活状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = timelineNodes.map(node => {
        const element = document.getElementById(node.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: node.id,
            top: rect.top,
            bottom: rect.bottom,
          }
        }
        return null
      }).filter(Boolean)

      // 找到当前视口中的section
      const current = sections.find(section => 
        section && section.top <= window.innerHeight / 2 && section.bottom >= window.innerHeight / 2
      )

      if (current) {
        setActiveNode(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNodeClick = (eraId: string) => {
    const element = document.getElementById(eraId)
    if (element) {
      const offset = 200 // 导航栏 + 时间轴的高度
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    if (onNodeClick) {
      onNodeClick(eraId)
    }
  }

  return (
    <div className="sticky top-20 z-40 bg-gradient-to-b from-white via-white to-transparent backdrop-blur-sm border-b border-gray-100 shadow-sm pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Timeline Container */}
        <div className="relative">
          {/* Background Wave Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <motion.path
                d="M0,50 Q250,20 500,50 T1000,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Main Timeline Line */}
          <div className="relative h-2 mb-12">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute inset-0 bg-gradient-to-r from-amber-500 via-blue-500 via-violet-500 via-rose-500 to-emerald-500 rounded-full origin-left"
            />
            
            {/* Progress Indicator */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-white/50 rounded-full"
              style={{
                width: `${((timelineNodes.findIndex(n => n.id === activeNode) + 1) / timelineNodes.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="relative flex justify-between items-start">
            {timelineNodes.map((node, index) => {
              const IconComponent = node.icon
              const isActive = activeNode === node.id
              const isHovered = hoveredNode === node.id

              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center cursor-pointer group"
                  style={{ width: `${100 / timelineNodes.length}%` }}
                  onClick={() => handleNodeClick(node.id)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Era Name (Top) */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-12 text-center"
                  >
                    <div className={`text-base font-bold transition-all duration-300 ${
                      isActive ? 'text-gray-800 scale-110' : 'text-gray-500'
                    }`}>
                      {node.era}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{node.eraEn}</div>
                  </motion.div>

                  {/* Icon Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative -mt-10 mb-12"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive ? 'ring-4 ring-offset-2 ring-gray-300' : ''
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Active Pulse */}
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${node.color} opacity-30`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Year (Bottom) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`text-sm font-semibold transition-all duration-300 ${
                      isActive ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {node.year}
                  </motion.div>

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-4 w-48 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl z-50"
                    >
                      <div className="font-semibold mb-1">{node.period}</div>
                      <div className="text-gray-300">{node.description}</div>
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900" />
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden text-center mt-4 text-xs text-gray-400">
            ← 左右滑动查看完整时间轴 →
          </div>
        </div>
      </div>
    </div>
  )
}
