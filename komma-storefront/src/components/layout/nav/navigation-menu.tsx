"use client"

import React from "react"
import { DropdownMenu } from "./dropdown-menu"
import { StoreProductCategory } from "@medusajs/types"

interface Category {
  id: number
  name: string
  parent_category: number | null
  category_children: Category[]
}

interface NavigationMenuProps {
  categories: StoreProductCategory[]
}
export function NavigationMenu({ categories }: NavigationMenuProps) {
  return (
    <nav className="bg-[#212121]">
      <div className="container mx-auto px-2">
        <ul className="flex flex-wrap items-center justify-center">
          {categories
            .filter((c) => c.parent_category === null)
            .map((category) => (
              <li key={category.id} className="relative">
                <DropdownMenu category={category} />
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}
