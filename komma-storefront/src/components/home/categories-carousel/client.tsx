"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getCategoryByHandle, listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StoreProductCategory } from "@medusajs/types"

export function CategoriesCarouselClient({
  categories,
}: {
  categories: StoreProductCategory[]
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 768 })



  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Carousel
        className="relative"
        opts={{
          loop: true,
          align: "start",
          skipSnaps: false,
          dragFree: true,
        }}
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex.currentTarget.tabIndex)}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.filter((c) => c.parent_category === null).map((category, index) => (
            <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <CategoryCard handle={category.handle} title={category.name} img={
                '/' + category.handle + '.jpeg'
              } index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}

function CategoryCard({
  title,
  img,
  handle,
  index,
}: {
  title: string
  img: string
  handle: string
  index: number
}) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <LocalizedClientLink href={`/categories/${handle}`} className="block h-full">
        <CardContent className="p-0 aspect-square relative group">
          <Image
            src={img || "/logo.webp"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
            loading={index < 4 ? "eager" : "lazy"}
            onError={
              (e) => {
                e.currentTarget.src = "/logo.webp"
              }
            }
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm mt-1">Explore collection</p>
          </div>
        </CardContent>
      </LocalizedClientLink>
    </Card>
  )
}

