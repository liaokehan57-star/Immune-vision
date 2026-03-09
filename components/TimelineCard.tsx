'use client'

import { motion } from 'framer-motion'
import { TimelineEvent } from '@/data/timelineData'
import { Calendar, ChevronRight } from 'lucide-react'

interface TimelineCardProps {
  event: TimelineEvent
  eraId: string
  index: number
  onClick: () => void
}

// 预定义的完整类名（确保 Tailwind 编译）
const cardBackgrounds = {
  'era1': 'bg-gradient-to-br from-amber-100/60 to-orange-100/60',
  'era2': 'bg-gradient-to-br from-blue-100/60 to-indigo-100/60',
  'era3': 'bg-gradient-to-br from-violet-100/60 to-purple-100/60',
  'era4': 'bg-gradient-to-br from-rose-100/60 to-red-100/60',
  'era5': 'bg-gradient-to-br from-emerald-100/60 to-teal-100/60',
}

const gradients = {
  'era1': 'from-amber-600 to-orange-700',
  'era2': 'from-blue-600 to-indigo-700',
  'era3': 'from-violet-600 to-purple-700',
  'era4': 'from-rose-600 to-red-700',
  'era5': 'from-emerald-600 to-teal-700',
}

const borders = {
  'era1': 'border-amber-200 hover:border-amber-300',
  'era2': 'border-blue-200 hover:border-blue-300',
  'era3': 'border-violet-200 hover:border-violet-300',
  'era4': 'border-rose-200 hover:border-rose-300',
  'era5': 'border-emerald-200 hover:border-emerald-300',
}

const textColors = {
  'era1': 'text-amber-700',
  'era2': 'text-blue-700',
  'era3': 'text-violet-700',
  'era4': 'text-rose-700',
  'era5': 'text-emerald-700',
}

const lightGradients = {
  'era1': 'from-amber-100 to-orange-100',
  'era2': 'from-blue-100 to-indigo-100',
  'era3': 'from-violet-100 to-purple-100',
  'era4': 'from-rose-100 to-red-100',
  'era5': 'from-emerald-100 to-teal-100',
}

export default function TimelineCard({ event, eraId, index, onClick }: TimelineCardProps) {
  const isEven = index % 2 === 0
  const cardBg = cardBackgrounds[eraId as keyof typeof cardBackgrounds] || cardBackgrounds['era2']
  const gradient = gradients[eraId as keyof typeof gradients] || gradients['era2']
  const border = borders[eraId as keyof typeof borders] || borders['era2']
  const textColor = textColors[eraId as keyof typeof textColors] || textColors['era2']
  const lightGradient = lightGradients[eraId as keyof typeof lightGradients] || lightGradients['era2']

  return (
    <motion.div
      layoutId={`timeline-card-${event.id}`}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative cursor-pointer group"
    >
      {/* Card with Theme Color */}
      <div className={`${cardBg} backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl border ${border} transition-all duration-500 overflow-hidden`}>
        {/* Gradient Accent */}
        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${gradient}`} />
        
        {/* Inner Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

        <div className="relative z-10 flex items-start space-x-4">
          {/* Year Badge */}
          <motion.div
            layoutId={`year-${event.id}`}
            className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex flex-col items-center justify-center shadow-lg`}
          >
            <Calendar className="w-5 h-5 text-white mb-1" />
            <span className="text-lg font-bold text-white">{event.year}</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.h3
              layoutId={`title-${event.id}`}
              className={`text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:${textColor} transition-colors duration-300`}
            >
              {event.title}
            </motion.h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.subtitle}</p>
            
            {/* Key Figures Preview */}
            <div className="flex flex-wrap gap-2 mb-3">
              {event.keyFigures.slice(0, 2).map((figure, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${lightGradient} ${textColor} font-medium`}
                >
                  {figure.name}
                </span>
              ))}
              {event.keyFigures.length > 2 && (
                <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${lightGradient} ${textColor} font-medium`}>
                  +{event.keyFigures.length - 2}
                </span>
              )}
            </div>

            {/* Read More */}
            <div className={`flex items-center ${textColor} text-sm font-medium group-hover:translate-x-2 transition-transform duration-300`}>
              <span>了解详情</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Hover Gradient Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      </div>
    </motion.div>
  )
}
