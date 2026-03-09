'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ImagePreview from './ImagePreview'

interface CategoryOverviewProps {
  category: 'organs' | 'cells' | 'molecules'
}

const overviewData = {
  organs: {
    title: '人体防御的堡垒：免疫器官',
    titleEn: 'Immune Organs: The Fortress of Defense',
    description: '免疫器官是免疫细胞产生、成熟和聚集的场所。它们如同城市的军工厂（中枢器官）和驻扎营地（外周器官），共同构成了人体严密的物理与生物屏障。从骨髓的造血干细胞分化，到胸腺的T细胞教育，再到淋巴结的免疫应答启动，每个器官都在免疫防御体系中扮演着不可替代的角色。',
    stats: [
      { label: '中枢器官', value: '2种' },
      { label: '外周组织', value: '3种' },
      { label: '淋巴细胞', value: '数万亿' },
    ],
    imageUrl: '/images/immune-system-organs.jpg',
    imageCaption: '人体全身淋巴系统分布图',
    gradient: 'from-blue-50 to-cyan-50',
  },
  cells: {
    title: '微观战场的特种兵：免疫细胞',
    titleEn: 'Immune Cells: Special Forces in Microscopic Battlefield',
    description: '免疫细胞是保卫人体的"特种兵"。从负责巡逻、快速反应的固有免疫细胞，到拥有精准记忆、发起致命一击的适应性淋巴细胞，它们分工明确，协同作战。中性粒细胞如同步兵快速冲锋，巨噬细胞像工兵清理战场，T细胞是指挥官协调全局，B细胞则是炮兵部队发射抗体导弹。',
    stats: [
      { label: '固有免疫', value: '4类' },
      { label: '适应性免疫', value: '5类' },
      { label: '血液白细胞', value: '40-100亿/升' },
    ],
    imageUrl: '/images/cells.png',
    imageCaption: '免疫细胞图谱',
    gradient: 'from-emerald-50 to-teal-50',
  },
  molecules: {
    title: '精密调控的信号网络：免疫分子',
    titleEn: 'Immune Molecules: Precision Signal Network',
    description: '免疫分子是免疫细胞沟通的"语言"与攻击的"弹药"。通过抗体的中和、补体的攻击和细胞因子的精准调控，免疫系统得以在微观世界完成精密的信息传递与协同进攻。白细胞介素传递指令，干扰素发出警报，抗体锁定目标，MHC分子展示敌情——这些分子构成了免疫系统的通讯网络和武器库。',
    stats: [
      { label: '细胞因子', value: '5类' },
      { label: '核心分子', value: '5类' },
      { label: '抗体种类', value: '5种' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200',
    imageCaption: '建议配图：抗体（Y型）或细胞因子与受体结合的微观模型图',
    gradient: 'from-purple-50 to-pink-50',
  },
}

export default function CategoryOverview({ category }: CategoryOverviewProps) {
  const data = overviewData[category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-br ${data.gradient} border border-gray-200 shadow-lg`}
    >
      {/* Desktop: 2:3 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Left: Image Section (2/5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 relative h-64 lg:h-auto min-h-[300px]"
        >
          <ImagePreview
            src={data.imageUrl}
            alt={data.title}
            caption={data.imageCaption}
            className="w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src={data.imageUrl}
                alt={data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:to-transparent" />
            </div>
          </ImagePreview>
          
          {/* Image Caption */}
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
            <div className="glass-effect bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs text-gray-600 font-medium">
                📸 {data.imageCaption}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content Section (3/5) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center"
        >
          {/* Title */}
          <div className="mb-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
              {data.title}
            </h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              {data.titleEn}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
            {data.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-effect bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 border border-gray-200 shadow-sm"
              >
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />
    </motion.div>
  )
}
