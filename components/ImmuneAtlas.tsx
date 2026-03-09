'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Building, CircleDot, Atom, Home, MapPin, Shield, Target, Radio, Hexagon,
  Bone, Heart, Droplet, Layers, Circle, Zap, GitBranch, Users, Droplets,
  FlaskConical, Activity, Move, ShieldCheck, Flame, GitFork, ShieldAlert,
  SquareStack, Boxes
} from 'lucide-react'
import { 
  categories, 
  immuneOrgansData, 
  immuneCellsData, 
  immuneMoleculesData,
  ImmuneItem 
} from '@/data/immuneAtlasData'
import ExpandedCard from './ExpandedCard'
import CategoryOverview from './CategoryOverview'

// Icon mapping
const iconMap: Record<string, any> = {
  'building': Building,
  'circle-dot': CircleDot,
  'atom': Atom,
  'home': Home,
  'map-pin': MapPin,
  'shield': Shield,
  'target': Target,
  'radio': Radio,
  'hexagon': Hexagon,
  'bone': Bone,
  'heart': Heart,
  'droplet': Droplet,
  'layers': Layers,
  'circle': Circle,
  'zap': Zap,
  'git-branch': GitBranch,
  'users': Users,
  'droplets': Droplets,
  'flask-conical': FlaskConical,
  'activity': Activity,
  'move': Move,
  'shield-check': ShieldCheck,
  'flame': Flame,
  'git-fork': GitFork,
  'shield-alert': ShieldAlert,
  'square-stack': SquareStack,
  'boxes': Boxes,
}

export default function ImmuneAtlas() {
  const [activeCategory, setActiveCategory] = useState('cells')
  const [selectedItem, setSelectedItem] = useState<ImmuneItem | null>(null)

  const getCategoryData = (categoryId: string) => {
    switch (categoryId) {
      case 'organs':
        return immuneOrgansData
      case 'cells':
        return immuneCellsData
      case 'molecules':
        return immuneMoleculesData
      default:
        return []
    }
  }

  const getSubcategoryData = (categoryId: string, subcategoryId: string) => {
    const data = getCategoryData(categoryId)
    return data.filter(item => item.subcategory === subcategoryId)
  }

  const handleCardClick = (item: ImmuneItem) => {
    setSelectedItem(item)
  }

  const handleNavigate = (id: string) => {
    const allData = [...immuneOrgansData, ...immuneCellsData, ...immuneMoleculesData]
    const item = allData.find(data => data.id === id)
    if (item) {
      setSelectedItem(item)
      setActiveCategory(item.category)
    }
  }

  const activeData = categories.find(cat => cat.id === activeCategory)

  return (
    <section id="encyclopedia" className="min-h-screen bg-white py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-life-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
            免疫百科
            <span className="block text-2xl text-gray-600 font-light mt-2">Immune Atlas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            层级探索免疫系统的组织架构，从器官到细胞，再到分子层面
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon]
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-8 py-4 rounded-2xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-tech-blue to-life-green text-white shadow-lg shadow-tech-blue/30'
                    : 'glass-effect bg-white/80 text-gray-700 hover:bg-white shadow-lg border border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                  <div className="text-left">
                    <div className="font-bold">{category.name}</div>
                    <div className="text-xs opacity-80">{category.nameEn}</div>
                  </div>
                </div>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-tech-blue to-life-green rounded-2xl -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Category Overview */}
        <CategoryOverview category={activeCategory as 'organs' | 'cells' | 'molecules'} />

        {/* Subcategories and Cards */}
        {activeData?.subcategories.map((subcategory, subIndex) => {
          const subcategoryData = getSubcategoryData(activeCategory, subcategory.id)
          const SubIconComponent = iconMap[subcategory.icon]
          
          return (
            <motion.div
              key={subcategory.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: subIndex * 0.2 }}
              className="mb-16"
            >
              {/* Subcategory Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-3 glass-effect bg-white/80 px-6 py-3 rounded-2xl shadow-lg border border-gray-200">
                  {SubIconComponent && <SubIconComponent className="w-6 h-6 text-tech-blue" />}
                  <h3 className="text-2xl font-bold text-gray-800">{subcategory.name}</h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4" />
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subcategoryData.map((item, itemIndex) => {
                  const ItemIconComponent = iconMap[item.icon]
                  const isExpanded = selectedItem?.id === item.id
                  
                  return (
                    <motion.div
                      key={item.id}
                      layoutId={isExpanded ? undefined : `card-${item.id}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      whileHover={!isExpanded ? { scale: 1.05, y: -10 } : {}}
                      whileTap={!isExpanded ? { scale: 0.95 } : {}}
                      onClick={() => !isExpanded && handleCardClick(item)}
                      className={`group relative ${!isExpanded ? 'cursor-pointer' : ''}`}
                    >
                      {!isExpanded && (
                        <div className="relative h-full glass-effect bg-white/80 rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 overflow-hidden">
                          {/* Inner Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                          
                          {/* Icon */}
                          <motion.div
                            layoutId={`icon-${item.id}`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg relative z-10`}
                          >
                            {ItemIconComponent && <ItemIconComponent className="w-8 h-8 text-white" />}
                          </motion.div>

                          {/* Content */}
                          <div className="relative z-10">
                            <motion.h4 
                              layoutId={`title-${item.id}`}
                              className="text-xl font-bold text-gray-800 mb-2"
                            >
                              {item.name}
                            </motion.h4>
                            <p className="text-sm text-gray-500 mb-3">{item.nameEn}</p>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                              {item.description}
                            </p>
                          </div>

                          {/* Hover Gradient Line */}
                          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ExpandedCard
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onNavigate={handleNavigate}
            iconComponent={iconMap[selectedItem.icon]}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
