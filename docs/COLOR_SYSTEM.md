# 色彩系统统一方案

## 🎨 统一色彩映射表

### 五大色彩主题

1. **蓝色系 (Blue)** - 经典免疫学时代 / 免疫器官
   - 主渐变: `from-blue-600 to-indigo-700`
   - 浅色背景: `from-blue-50 to-indigo-50`
   - 卡片背景: `from-blue-50/80 to-indigo-50/80`

2. **绿色系 (Green)** - 免疫治疗革命 / 免疫细胞
   - 主渐变: `from-emerald-600 to-teal-700`
   - 浅色背景: `from-emerald-50 to-teal-50`
   - 卡片背景: `from-emerald-50/80 to-teal-50/80`

3. **紫色系 (Purple)** - 现代免疫学奠基 / 免疫分子
   - 主渐变: `from-violet-600 to-purple-700`
   - 浅色背景: `from-violet-50 to-purple-50`
   - 卡片背景: `from-violet-50/80 to-purple-50/80`

4. **红色系 (Red)** - 分子免疫学时代 / 免疫疾病
   - 主渐变: `from-rose-600 to-red-700`
   - 浅色背景: `from-rose-50 to-red-50`
   - 卡片背景: `from-rose-50/80 to-red-50/80`

5. **琥珀色系 (Amber)** - 经验免疫时代 / 科普生活
   - 主渐变: `from-amber-600 to-orange-700`
   - 浅色背景: `from-amber-50 to-orange-50`
   - 卡片背景: `from-amber-50/80 to-orange-50/80`

## 📋 时代与颜色映射

```typescript
era1 (经验免疫时代) → amber (琥珀色)
era2 (经典免疫学时代) → blue (蓝色)
era3 (现代免疫学奠基) → purple (紫色)
era4 (分子免疫学时代) → red (红色)
era5 (免疫治疗革命) → green (绿色)
```

## 🔧 已修复的问题

### 1. 卡片颜色统一
- ✅ 移除所有硬编码的 `bg-white`
- ✅ 所有卡片使用 `bg-gradient-to-br ${theme.cardBg}` 
- ✅ 卡片背景带有 80% 透明度，呈现毛玻璃效果

### 2. 边框和悬停效果
- ✅ 边框颜色与主题匹配: `border ${theme.border}`
- ✅ 悬停边框加深: `${theme.hover}`
- ✅ 内发光效果使用主题渐变

### 3. 详情页颜色一致性
- ✅ 年份徽章使用主题渐变
- ✅ 所有信息块使用主题浅色背景
- ✅ 图标和强调色使用主题色

### 4. 照片位标准化
- ✅ 添加 Skeleton 动画背景 (灰色渐变)
- ✅ 固定 aspect-video 比例
- ✅ 图片加载前显示动画效果

## 🎯 使用方法

### 在组件中使用色彩主题

```typescript
import { getColorTheme } from '@/utils/colorThemes'

// 获取主题
const theme = getColorTheme(eraId) // 或 categoryId

// 使用主题
<div className={`bg-gradient-to-br ${theme.cardBg}`}>
  <div className={`bg-gradient-to-r ${theme.gradient}`}>
    <span className={theme.text}>文字</span>
  </div>
</div>
```

## ✨ 视觉效果

### 小卡片
- 浅色渐变背景 (80% 透明度)
- 左侧彩色标记条
- 年份徽章使用主题渐变
- 人物标签使用主题浅色背景

### 展开详情
- 顶部年份徽章保持主题色
- 所有信息块使用主题浅色背景
- 左侧标记条使用主题强调色
- 图标使用主题文字色

### 时代标题
- 使用主题主渐变
- 白色文字确保对比度
- 阴影效果增强立体感

## 🔄 色彩过渡

五个时代的颜色呈现丝滑过渡：
1. 琥珀色 (古代) → 
2. 蓝色 (经典) → 
3. 紫色 (现代) → 
4. 红色 (分子) → 
5. 绿色 (治疗)

形成一个完整的色彩叙事弧线！
