import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { getCategoryByHandle, listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"

export async function CategoriesCarousel() {
  const categories = await listCategories()

  return (
    // 33% of the carousel width.
    <Carousel
      className="overflow-hidden  mx-auto"
      opts={{
        loop: true,
        align: "center",
      }}
    >
      <CarouselContent>
        {categories.map(async (category) => (
          <CarouselItem key={category.id} className="basis-1/4 mx-2">
            <CategoryCard
              handle={category.handle}
              title={category.name}
              img={
                category?.handle
                  ? await getCategoryByHandle([category.handle]).then(
                      (c) => c?.products?.[0]?.thumbnail || ""
                    )
                  : ""
              }
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
function CategoryCard({
  title,
  img,
  handle,
}: {
  title: string
  img: string
  handle: string
}) {
  return (
    <LocalizedClientLink
      className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-lg shadow-lg relative"
      href={`/categories/${handle}`}
    >
      <img
        src={img}
        alt="Category"
        className="w-full h-full absolute top-0 left-0 rounded-lg object-cover z-0 hover:scale-105 transition-transform duration-300"
      />
      <span className="mt-4 text-sm font-semibold relative z-10 rounded-full p-2 bg-white">
        {title}
      </span>
    </LocalizedClientLink>
  )
}
