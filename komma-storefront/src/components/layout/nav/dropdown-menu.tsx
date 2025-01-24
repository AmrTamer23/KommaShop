"use client"

import React, { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { StoreProductCategory } from "@medusajs/types"

interface Category {
  id: number
  name: string
  category_children: Category[]
}

interface DropdownMenuProps {
  category: StoreProductCategory
}
export function DropdownMenu({ category }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center justify-center gap-1 px-2 py-2 text-zinc-100 hover:bg-zinc-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{category.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && category.category_children.length > 0 && (
        <div className="absolute left-0 mt-0 w-48 bg-zinc-200 shadow-lg rounded-md overflow-hidden z-10">
          <div className="absolute top-0 h-2 w-full -translate-y-full" />
          {category.category_children.map((child) => (
            <a
              key={child.id}
              href={`/eg/categories/${child.handle}`}
              className="block px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-300 transition-colors"
            >
              {child.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}