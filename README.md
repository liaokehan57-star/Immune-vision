# 免疫视界 Immune Vision

一个现代化的医学科普网站，专注于免疫学知识的可视化呈现。

## 🎨 设计特色

- **Apple 风格毛玻璃效果** - 优雅的 Glassmorphism 设计
- **流畅动画** - 基于 Framer Motion 的丝滑交互体验
- **响应式布局** - 完美适配各种设备尺寸
- **科技美学** - 科技蓝与生命绿的配色方案

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **语言**: TypeScript

## 📦 安装依赖

```bash
npm install
```

## 🚀 运行项目

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📁 项目结构

```
immune-vision/
├── app/
│   ├── layout.tsx          # 根布局（包含导航栏）
│   ├── page.tsx            # 首页
│   └── globals.css         # 全局样式
├── components/
│   ├── Navigation.tsx      # 导航栏组件
│   ├── HeroSection.tsx     # 首页 Hero 区域
│   └── OverviewSection.tsx # 免疫全景图模块
├── public/                 # 静态资源
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖
```

## 🎯 已完成功能

- ✅ 响应式导航栏（带毛玻璃效果）
- ✅ 震撼的 Hero 首页（动态背景 + 视差效果）
- ✅ 免疫起源时间轴
- ✅ 免疫治疗现状卡片展示

## 🔜 待开发模块

- 免疫系统百科（层级展示）
- 免疫疾病板块
- 免疫生活家（瀑布流布局）

## 📝 配图说明

项目中使用了 Unsplash 占位图片，建议替换为以下专业医学配图：

- **免疫检查点抑制剂**: PD-1/PD-L1 通路示意图
- **CAR-T 疗法**: CAR-T 细胞工程化流程图
- **肿瘤疫苗**: 树突状细胞呈递抗原示意图
- **双特异性抗体**: 抗体结构与作用机制图

## 📄 License

MIT
