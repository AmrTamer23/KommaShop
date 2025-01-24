


import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"

export default async function Footer() {
  // const [email, setEmail] = useState("")

  // Fetch categories and collections
  const { collections } = await listCollections({
    fields: '*products',
  })
  const productCategories = await listCategories()


  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src="/logo.webp" alt="KommaShop Logo" width={150} height={50} />
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for all your needs. Quality products, excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {productCategories?.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink
                    href={`/categories/${c.handle}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {c.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              {collections?.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink
                    href={`/collections/${c.handle}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {c.title}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KommaShop. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <LocalizedClientLink href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </LocalizedClientLink>
            <LocalizedClientLink href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

