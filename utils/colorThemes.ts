// 统一的色彩映射表
export const colorThemes = {
  // 经验免疫时代 / 免疫器官 - 蓝色系
  blue: {
    gradient: 'from-blue-600 to-indigo-700',
    lightGradient: 'from-blue-50 to-indigo-50',
    cardBg: 'from-blue-50/80 to-indigo-50/80',
    accent: 'bg-blue-500',
    text: 'text-blue-700',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300',
  },
  
  // 经典免疫时代 / 免疫细胞 - 绿色系
  green: {
    gradient: 'from-emerald-600 to-teal-700',
    lightGradient: 'from-emerald-50 to-teal-50',
    cardBg: 'from-emerald-50/80 to-teal-50/80',
    accent: 'bg-emerald-500',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    hover: 'hover:border-emerald-300',
  },
  
  // 现代免疫时代 / 免疫分子 - 紫色系
  purple: {
    gradient: 'from-violet-600 to-purple-700',
    lightGradient: 'from-violet-50 to-purple-50',
    cardBg: 'from-violet-50/80 to-purple-50/80',
    accent: 'bg-violet-500',
    text: 'text-violet-700',
    border: 'border-violet-200',
    hover: 'hover:border-violet-300',
  },
  
  // 分子免疫时代 / 免疫疾病 - 红色系
  red: {
    gradient: 'from-rose-600 to-red-700',
    lightGradient: 'from-rose-50 to-red-50',
    cardBg: 'from-rose-50/80 to-red-50/80',
    accent: 'bg-rose-500',
    text: 'text-rose-700',
    border: 'border-rose-200',
    hover: 'hover:border-rose-300',
  },
  
  // 免疫治疗时代 / 科普生活 - 金色/琥珀色系
  amber: {
    gradient: 'from-amber-600 to-orange-700',
    lightGradient: 'from-amber-50 to-orange-50',
    cardBg: 'from-amber-50/80 to-orange-50/80',
    accent: 'bg-amber-500',
    text: 'text-amber-700',
    border: 'border-amber-200',
    hover: 'hover:border-amber-300',
  },
}

// 时代到颜色的映射
export const eraColorMap: Record<string, keyof typeof colorThemes> = {
  'era1': 'amber',  // 经验免疫时代
  'era2': 'blue',   // 经典免疫学时代
  'era3': 'purple', // 现代免疫学奠基
  'era4': 'red',    // 分子免疫学时代
  'era5': 'green',  // 免疫治疗革命
}

// 分类到颜色的映射
export const categoryColorMap: Record<string, keyof typeof colorThemes> = {
  'organs': 'blue',     // 免疫器官
  'cells': 'green',     // 免疫细胞
  'molecules': 'purple', // 免疫分子
}

// 获取颜色主题的辅助函数
export function getColorTheme(id: string): typeof colorThemes.blue {
  const colorKey = eraColorMap[id] || categoryColorMap[id] || 'blue'
  return colorThemes[colorKey]
}
