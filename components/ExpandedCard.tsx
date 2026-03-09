'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ArrowRight } from 'lucide-react'
import { ImmuneItem, allImmuneData } from '@/data/immuneAtlasData'
import Image from 'next/image'
import ImagePreview from './ImagePreview'

interface ExpandedCardProps {
  item: ImmuneItem
  onClose: () => void
  onNavigate: (id: string) => void
  iconComponent: any
}

// 根据分类动态匹配渐变色
const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'organs':
      return 'from-blue-900 via-blue-800 to-blue-900'
    case 'cells':
      return 'from-emerald-900 via-emerald-800 to-emerald-900'
    case 'molecules':
      return 'from-purple-900 via-purple-800 to-purple-900'
    default:
      return 'from-slate-900 via-slate-800 to-slate-900'
  }
}

export default function ExpandedCard({ item, onClose, onNavigate, iconComponent: IconComponent }: ExpandedCardProps) {
  const relatedItems = item.relatedItems
    .map(id => allImmuneData.find(data => data.id === id))
    .filter(Boolean) as ImmuneItem[]

  const gradientClass = getCategoryGradient(item.category)

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
        {/* Backdrop with blur */}
        <motion.div
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(10px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          className="absolute inset-0 bg-black/40"
        />

        {/* Expanded Card */}
        <motion.div
          layoutId={`card-${item.id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Header Section with Gradient */}
            <div className={`relative bg-gradient-to-b ${gradientClass} px-8 py-10`}>
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center shadow-lg transition-all duration-300 z-20"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Icon and Title */}
              <div className="flex items-start space-x-6">
                <motion.div
                  layoutId={`icon-${item.id}`}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl flex-shrink-0`}
                >
                  {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
                </motion.div>
                
                <div className="flex-1">
                  <motion.h2
                    layoutId={`title-${item.id}`}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    {item.name}
                  </motion.h2>
                  <p className="text-xl text-white/80 mb-4">{item.nameEn}</p>
                  
                  {/* Summary */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/90 text-lg leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-6 bg-gray-50">
              {/* Hero Image Section */}
              <ImagePreview
                src={item.imageUrl}
                alt={item.name}
                caption={`${item.name} - ${item.category === 'organs' ? '组织切片 H&E 染色图或 3D 解剖模型' : item.category === 'cells' ? '电子显微镜图或免疫荧光染色图' : '分子结构图或信号通路示意图'}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative w-full h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg"
                >
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
                    <p className="text-white text-sm font-medium">
                      📸 临床显微镜图 / 解剖示意图
                    </p>
                    <p className="text-white/70 text-xs mt-1">
                      {item.category === 'organs' && '建议替换为：组织切片 H&E 染色图或 3D 解剖模型'}
                      {item.category === 'cells' && '建议替换为：电子显微镜图或免疫荧光染色图'}
                      {item.category === 'molecules' && '建议替换为：分子结构图或信号通路示意图'}
                    </p>
                  </div>

                  {/* Skeleton Placeholder Animation (for future empty states) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    style={{ transform: 'translateX(-100%)' }}
                  />
                </motion.div>
              </ImagePreview>

              {/* Structure Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-blue-500 rounded-full mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">结构特征</h3>
                  <span className="ml-3 text-xs text-gray-500 uppercase tracking-wider">Structure</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">{item.structure}</p>
              </motion.div>

              {/* Function Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-green-500 rounded-full mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">主要功能</h3>
                  <span className="ml-3 text-xs text-gray-500 uppercase tracking-wider">Function</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">{item.function}</p>
              </motion.div>

              {/* Distribution Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-purple-500 rounded-full mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">分布位置</h3>
                  <span className="ml-3 text-xs text-gray-500 uppercase tracking-wider">Distribution</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">{item.distribution}</p>
              </motion.div>

              {/* Clinical Significance Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-md border border-orange-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-orange-500 rounded-full mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">临床意义</h3>
                  <span className="ml-3 text-xs text-gray-500 uppercase tracking-wider">Clinical Significance</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">{item.clinicalSignificance}</p>
              </motion.div>

              {/* Related Items */}
              {relatedItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <ExternalLink className="w-5 h-5 mr-3 text-tech-blue" />
                    <h3 className="text-xl font-bold text-gray-800">关联百科</h3>
                    <span className="ml-3 text-xs text-gray-500 uppercase tracking-wider">Related Topics</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedItems.map((relatedItem, index) => (
                      <motion.button
                        key={relatedItem.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          onNavigate(relatedItem.id)
                          onClose()
                        }}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-tech-blue/50 hover:shadow-md transition-all duration-300 text-left group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-800 font-semibold">{relatedItem.name}</span>
                          <ArrowRight className="w-4 h-4 text-tech-blue group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-500 text-sm">{relatedItem.nameEn}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
