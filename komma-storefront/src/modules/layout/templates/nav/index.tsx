import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { MovingBanner } from "./moving-banner"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { listCategories } from "@lib/data/categories"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const categories = await listCategories()

  return (
    <div className=" top-0 inset-x-0 z-30 group ">
      <MovingBanner />
      <header className=" h-28 mx-auto duration-200 bg-white border-ui-border-base ">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center gap-2">
            <svg
              className="size-8"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="256" cy="192" r="32" fill="currentColor" />
              <path
                fill="currentColor"
                d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
              />
            </svg>
            <span className="text-lg font-medium mt-1">Location: Egypt</span>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img src="/logo.webp" alt="KommaShop Logo" className="w-28" />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-lg "
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-lg "
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 text-lg"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
      <Menubar className="flex items-center justify-center bg-[#212121] text-zinc-100">
        {categories
          .filter((c) => c.parent_category === null)
          .map((category) => (
            <MenubarMenu key={category.id}>
              <MenubarTrigger className="flex items-center justify-center gap-1">
                <span>{category.name}</span>
                <svg
                  className="size-4 mt-0.5"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
                    fill="currentColor"
                  />
                </svg>
              </MenubarTrigger>
              {category.category_children.length > 0 && (
                <MenubarContent className="bg-zinc-200 list-none px-2">
                  {category.category_children.map((child) => (
                    <a key={child.id} href={`/category/${child.id}`}>
                      <li>{child.name}</li>
                    </a>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}
      </Menubar>
    </div>
  )
}
