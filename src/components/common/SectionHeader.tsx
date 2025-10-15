import React from 'react'

interface SectionHeaderProps {
  title: string
  linkText?: string
  linkHref?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, linkText, linkHref = '#' }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {linkText && (
        <a href={linkHref} className="text-sm text-orange-600 hover:underline font-light underline">
          {linkText}
        </a>
      )}
    </div>
  )
}

export default SectionHeader
