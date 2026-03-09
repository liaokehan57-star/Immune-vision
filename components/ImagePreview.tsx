'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImagePreviewProps {
  src: string
  alt: string
  caption?: string
  className?: string
  children?: React.ReactNode
}

export default function ImagePreview({ src, alt, caption, className = '', children }: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  // ESC 键关闭
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* 可点击的图片容器 */}
      <div
        onClick={() => setIsOpen(true)}
        className={`relative cursor-pointer group ${className}`}
      >
        {children || (
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* 悬停提示 */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <ZoomIn className="w-6 h-6 text-gray-800" />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* 全屏预览模态框 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* 深色背景 */}
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(16px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-black/80"
            />

            {/* 关闭按钮 */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 z-10"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </motion.button>

            {/* 图片容器 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full"
            >
              {/* 图片 */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  style={{ 
                    imageRendering: 'auto',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                />
              </div>

              {/* 图片标题 */}
              {(caption || alt) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl"
                >
                  <p className="text-white text-center text-lg font-medium">
                    {caption || alt}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* 提示文字 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
            >
              点击图片外区域或按 ESC 键关闭
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
