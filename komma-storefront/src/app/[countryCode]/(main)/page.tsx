import { Metadata } from "next"

import FeaturedProducts from "@/components/home/featured-products"
import Hero from "@/components/home/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { CategoriesCarousel } from "@/components/home/categories-carousel"
import Benefits from "@/components/home/benefits"

export const metadata: Metadata = {
  title: "KommaShop",
  description:
    "KommaShop is a modern e-commerce platform that offers a wide range of products.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const { collections } = await listCollections({
    fields: "*products",
  })
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <main className="overflow-hidden  gap-8 flex flex-col">
      <Hero />
      <CategoriesCarousel />
      <div className="py-12">
        <FeaturedProducts
          collections={collections.filter((c) => c.handle === "featured")}
          region={region}
        />
      </div>
      <Benefits />
      <div className="py-12">
        <FeaturedProducts
          collections={collections.filter((c) => c.handle === "best-sellers")}
          region={region}
        />
      </div>
    </main>
  )
}
