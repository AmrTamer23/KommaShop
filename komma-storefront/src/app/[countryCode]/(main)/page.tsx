import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { CategoriesCarousel } from "@modules/home/components/categories-carousel"
import Benefits from "@modules/home/components/benefits"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
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
