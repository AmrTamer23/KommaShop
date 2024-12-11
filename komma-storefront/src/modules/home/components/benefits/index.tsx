import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Benefits() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square">
          <Image
            src="/benefits.webp"
            alt="Motivational stickers collection"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl tracking-tight lg:text-5xl leading-relaxed">
            We offer exclusive products created by the{" "}
            <span className="relative whitespace-nowrap font-bold">
              talented artist Marwa Tarek
              <span className="absolute left-0 top-full mt-1 h-1 w-full bg-[#EDDCE0]" />
            </span>
            .
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">Follow us on</p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="text-6xl font-light text-muted-foreground/50">
            01.
          </div>
          <h2 className="text-xl font-semibold">High quality products.</h2>
          <p className="text-muted-foreground">
            We ensure every product meets our premium quality standards.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-6xl font-light text-muted-foreground/50">
            02.
          </div>
          <h2 className="text-xl font-semibold">One of a kind designs.</h2>
          <p className="text-muted-foreground">
            Each piece is uniquely crafted with creativity and passion.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-6xl font-light text-muted-foreground/50">
            03.
          </div>
          <h2 className="text-xl font-semibold">Top tier customer service.</h2>
          <p className="text-muted-foreground">
            We're dedicated to providing exceptional support to our customers.
          </p>
        </div>
      </div>
    </div>
  )
}
