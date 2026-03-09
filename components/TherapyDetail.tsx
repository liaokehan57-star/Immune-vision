'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Lightbulb, Activity, TrendingUp, Award } from 'lucide-react'
import { TherapyItem } from '@/data/therapyData'
import Image from 'next/image'
import ImagePreview from './ImagePreview'

interface TherapyDetailProps {
  therapy: TherapyItem
  onClose: () => void
}

export default function TherapyDetail({ therapy, onClose }: TherapyDetailProps) {
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
          animate={{ backdropFilter: 'blur(16px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90"
        />

        {/* Detail Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
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

            {/* Hero Image */}
            <ImagePreview
              src={therapy.imageUrl}
              alt={therapy.title}
              caption={therapy.imageCaption}
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
                  src={therapy.imageUrl}
                  alt={therapy.title}
                  fill
                  className="object-cover relative z-10"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10`} />
                
                {/* Title Badge */}
                <div className={`absolute top-6 left-6 px-6 py-3 rounded-2xl bg-gradient-to-r ${therapy.color} shadow-xl z-20 pointer-events-none`}>
                  <span className="text-2xl font-bold text-white">{therapy.title}</span>
                </div>

                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="glass-effect bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
                    <p className="text-xs text-gray-600 font-medium">
                      📸 {therapy.imageCaption}
                    </p>
                  </div>
                </div>
              </div>
            </ImagePreview>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">{therapy.title}</h2>
                <p className="text-xl text-gray-600">{therapy.titleEn}</p>
                <p className="text-gray-600 mt-4 text-lg leading-relaxed">{therapy.description}</p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Principle */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-blue-500 rounded-full mr-3" />
                      <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800">治疗原理</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{therapy.principle}</p>
                  </motion.div>

                  {/* Indications */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-green-500 rounded-full mr-3" />
                      <Activity className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800">适用症状</h3>
                    </div>
                    <ul className="space-y-2">
                      {therapy.indications.map((indication, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{indication}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Advances */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-purple-500 rounded-full mr-3" />
                      <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800">前沿进展</h3>
                    </div>
                    <ul className="space-y-2">
                      {therapy.advances.map((advance, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{advance}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Significance */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-orange-500 rounded-full mr-3" />
                      <Award className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800">临床意义</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{therapy.significance}</p>
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
