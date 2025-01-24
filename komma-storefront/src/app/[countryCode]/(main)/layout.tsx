import { Metadata } from "next"

import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import CartMismatchBanner from "@/components/layout/components/cart-mismatch-banner"
import Footer from "@/components/layout/footer"
import Nav from "@/components/layout/nav"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await retrieveCustomer()
  const cart = await retrieveCart()

  return (
    <>
      <Nav />
      {customer && cart && (
        <CartMismatchBanner customer={customer} cart={cart} />
      )}
      {props.children}
      <Footer />
    </>
  )
}
