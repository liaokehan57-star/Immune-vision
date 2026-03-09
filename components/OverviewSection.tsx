'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Syringe, Zap } from 'lucide-react'
import { useState } from 'react'
import { timelineData, TimelineEvent } from '@/data/timelineData'
import { therapyData, TherapyItem } from '@/data/therapyData'
import TimelineCard from './TimelineCard'
import TimelineDetail from './TimelineDetail'
import TherapyDetail from './TherapyDetail'
import HorizontalTimeline from './HorizontalTimeline'

export default function OverviewSection() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [selectedEraId, setSelectedEraId] = useState<string>('')
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyItem | null>(null)

  // 预定义完整的渐变类名
  const eraGradients: Record<string, string> = {
    'era1': 'bg-gradient-to-r from-amber-600 to-orange-700',
    'era2': 'bg-gradient-to-r from-blue-600 to-indigo-700',
    'era3': 'bg-gradient-to-r from-violet-600 to-purple-700',
    'era4': 'bg-gradient-to-r from-rose-600 to-red-700',
    'era5': 'bg-gradient-to-r from-emerald-600 to-teal-700',
  }

  const eraLineGradients: Record<string, string> = {
    'era1': 'bg-gradient-to-b from-amber-600 to-orange-700',
    'era2': 'bg-gradient-to-b from-blue-600 to-indigo-700',
    'era3': 'bg-gradient-to-b from-violet-600 to-purple-700',
    'era4': 'bg-gradient-to-b from-rose-600 to-red-700',
    'era5': 'bg-gradient-to-b from-emerald-600 to-teal-700',
  }

  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-life-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            免疫全景图
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从历史长河到前沿科技，见证免疫学的辉煌演进
          </p>
        </motion.div>

        {/* Horizontal Timeline Mini-Map */}
        <HorizontalTimeline />

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          {/* Timeline Eras */}
          <div className="space-y-16">
            {timelineData.map((era, eraIndex) => (
              <motion.div
                key={era.id}
                id={era.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: eraIndex * 0.1 }}
                className="relative scroll-mt-48"
              >
                {/* Era Header */}
                <div className="mb-8">
                  <div className={`inline-block px-6 py-3 rounded-2xl ${eraGradients[era.id]} shadow-lg mb-4`}>
                    <h4 className="text-2xl font-bold text-white">{era.name}</h4>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="text-lg font-semibold">{era.period}</span>
                    <span className="text-sm">{era.nameEn}</span>
                  </div>
                  <p className="text-gray-600 mt-2 max-w-3xl">{era.description}</p>
                </div>

                {/* Vertical Timeline Line */}
                <div className="relative">
                  <div className={`absolute left-10 top-0 bottom-0 w-1 ${eraLineGradients[era.id]} opacity-30`} />
                  
                  {/* Event Cards */}
                  <div className="space-y-6">
                    {era.events.map((event, eventIndex) => (
                      <TimelineCard
                        key={event.id}
                        event={event}
                        eraId={era.id}
                        index={eventIndex}
                        onClick={() => {
                          setSelectedEvent(event)
                          setSelectedEraId(era.id)
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Therapy Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center mb-12">
            <Sparkles className="w-8 h-8 text-life-green mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">免疫治疗现状</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapyData.map((therapy, index) => {
              const iconMap: Record<string, any> = {
                'sparkles': Sparkles,
                'zap': Zap,
                'syringe': Syringe,
              }
              const IconComponent = iconMap[therapy.icon] || Sparkles

              return (
                <motion.div
                  key={therapy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTherapy(therapy)}
                  className="group relative overflow-hidden rounded-3xl glass-effect shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={therapy.imageUrl}
                      alt={therapy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${therapy.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{therapy.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{therapy.description}</p>

                    {/* Click Hint */}
                    <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      点击了解详情 →
                    </div>

                    {/* Hover Effect Line */}
                    <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${therapy.color} transition-all duration-500 rounded-full`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Timeline Detail Modal */}
      <AnimatePresence>
        {selectedEvent && selectedEraId && (
          <TimelineDetail
            event={selectedEvent}
            eraId={selectedEraId}
            onClose={() => {
              setSelectedEvent(null)
              setSelectedEraId('')
            }}
          />
        )}
      </AnimatePresence>

      {/* Therapy Detail Modal */}
      <AnimatePresence>
        {selectedTherapy && (
          <TherapyDetail
            therapy={selectedTherapy}
            onClose={() => setSelectedTherapy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
