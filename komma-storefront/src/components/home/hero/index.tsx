import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className=" w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <img src="/hero.webp" alt="Hero" loading="eager" className="h-[10rem] object-cover lg:h-full" />
    </div>
  )
}

export default Hero
