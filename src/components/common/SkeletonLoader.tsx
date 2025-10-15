import React from 'react'
import clsx from 'clsx'

interface SkeletonProps {
  variant?: 'rect' | 'circle' | 'text'
  width?: string | number
  height?: string | number
  className?: string
  count?: number // for multiple lines (text)
  center?: boolean
}

const SkeletonLoader: React.FC<SkeletonProps> = ({
  variant = 'rect',
  width = '100%',
  height = 100,
  className,
  count = 1,
  center = true,
}) => {
  const baseStyle = clsx('bg-gray-200 animate-pulse', className, {
    'rounded-full': variant === 'circle',
    'rounded-md': variant === 'text',
    'rounded-none': variant === 'rect',
  })

  if (variant === 'text') {
    return (
      <div className={clsx(center && 'flex flex-col gap-2')}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={baseStyle} style={{ width, height }}></div>
        ))}
      </div>
    )
  }

  return (
    <div className={clsx(center && 'flex justify-center items-center')}>
      <div className={baseStyle} style={{ width, height }} />
    </div>
  )
}

export default SkeletonLoader
