import { listCategories } from "@lib/data/categories"
import { CategoriesCarouselClient } from "./client"

export async function CategoriesCarousel() {

  const categories = await listCategories()



  return (
    <CategoriesCarouselClient categories={
      categories
    } />
  )

}