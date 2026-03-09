'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Award, Lightbulb, TrendingUp } from 'lucide-react'
import { TimelineEvent } from '@/data/timelineData'
import Image from 'next/image'
import ImagePreview from './ImagePreview'

interface TimelineDetailProps {
  event: TimelineEvent
  eraId: string
  onClose: () => void
}

// 预定义的完整类名
const gradients = {
  'era1': 'from-amber-600 to-orange-700',
  'era2': 'from-blue-600 to-indigo-700',
  'era3': 'from-violet-600 to-purple-700',
  'era4': 'from-rose-600 to-red-700',
  'era5': 'from-emerald-600 to-teal-700',
}

const lightBackgrounds = {
  'era1': 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200',
  'era2': 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200',
  'era3': 'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200',
  'era4': 'bg-gradient-to-br from-rose-50 to-red-50 border-rose-200',
  'era5': 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200',
}

const accentColors = {
  'era1': 'bg-amber-500',
  'era2': 'bg-blue-500',
  'era3': 'bg-violet-500',
  'era4': 'bg-rose-500',
  'era5': 'bg-emerald-500',
}

const textColors = {
  'era1': 'text-amber-700',
  'era2': 'text-blue-700',
  'era3': 'text-violet-700',
  'era4': 'text-rose-700',
  'era5': 'text-emerald-700',
}

export default function TimelineDetail({ event, eraId, onClose }: TimelineDetailProps) {
  const gradient = gradients[eraId as keyof typeof gradients] || gradients['era2']
  const lightBg = lightBackgrounds[eraId as keyof typeof lightBackgrounds] || lightBackgrounds['era2']
  const accent = accentColors[eraId as keyof typeof accentColors] || accentColors['era2']
  const textColor = textColors[eraId as keyof typeof textColors] || textColors['era2']

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(10px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          className="absolute inset-0 bg-black/40"
        />

        {/* Detail Card */}
        <motion.div
          layoutId={`timeline-card-${event.id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 rounded-full glass-effect bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 z-20"
            >
              <X className="w-6 h-6 text-gray-700" />
            </motion.button>

            {/* Hero Image with Skeleton */}
            <ImagePreview
              src={event.imageUrl}
              alt={event.title}
              caption={event.imageCaption}
              className="relative h-80 overflow-hidden bg-gray-200"
            >
              <div className="relative h-80 overflow-hidden bg-gray-200">
                {/* Skeleton Animation */}
                <motion.div
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"
                />
                
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />
                
                {/* Year Badge with Theme Color */}
                <motion.div
                  layoutId={`year-${event.id}`}
                  className={`absolute top-6 left-6 px-6 py-3 rounded-2xl bg-gradient-to-r ${gradient} shadow-xl z-20 pointer-events-none`}
                >
                  <span className="text-3xl font-bold text-white">{event.year}</span>
                </motion.div>

                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="glass-effect bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
                    <p className="text-xs text-gray-600 font-medium">
                      📸 {event.imageCaption}
                    </p>
                  </div>
                </div>
              </div>
            </ImagePreview>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Title */}
              <motion.div layoutId={`title-${event.id}`}>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">{event.title}</h2>
                <p className="text-xl text-gray-600">{event.subtitle}</p>
              </motion.div>

              {/* Description with Theme Color */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`${lightBg} rounded-2xl p-6 border`}
              >
                <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: Key Figures & Contributions */}
                <div className="space-y-6">
                  {/* Key Figures */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`${lightBg} rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-1 h-6 ${accent} rounded-full mr-3`} />
                      <User className={`w-5 h-5 ${textColor} mr-2`} />
                      <h3 className="text-xl font-bold text-gray-800">关键人物</h3>
                    </div>
                    <div className="space-y-3">
                      {event.keyFigures.map((figure, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="font-semibold text-gray-800">{figure.name}</p>
                          <p className="text-sm text-gray-600">{figure.role}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Contributions */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`${lightBg} rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-1 h-6 ${accent} rounded-full mr-3`} />
                      <Award className={`w-5 h-5 ${textColor} mr-2`} />
                      <h3 className="text-xl font-bold text-gray-800">主要贡献</h3>
                    </div>
                    <ul className="space-y-2">
                      {event.contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`w-2 h-2 ${accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          <span className="text-gray-700">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Right Column: Significance & Impact */}
                <div className="space-y-6">
                  {/* Significance */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`${lightBg} rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-1 h-6 ${accent} rounded-full mr-3`} />
                      <Lightbulb className={`w-5 h-5 ${textColor} mr-2`} />
                      <h3 className="text-xl font-bold text-gray-800">历史意义</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.significance}</p>
                  </motion.div>

                  {/* Impact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`${lightBg} rounded-2xl p-6 border shadow-lg`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-1 h-6 ${accent} rounded-full mr-3`} />
                      <TrendingUp className={`w-5 h-5 ${textColor} mr-2`} />
                      <h3 className="text-xl font-bold text-gray-800">现代影响</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{event.impact}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
