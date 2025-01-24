import { HttpTypes } from "@medusajs/types"
import ProductRail from "@/components/home/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  return collections.map((collection) => (
    <li key={collection.id} className="py-12">
      <ProductRail collection={collection} region={region} />
    </li>
  ))
}
