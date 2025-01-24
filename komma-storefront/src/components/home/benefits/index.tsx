import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Benefits() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative aspect-square w-full">
          <Image
            src="/benefits.webp"
            alt="Motivational stickers collection"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl tracking-tight lg:text-5xl leading-relaxed">
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
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-x-8 md:divide-x-2 md:divide-zinc-200">
        <div className="space-y-4 flex gap-4">
          <div className="text-5xl font-light text-[#EDDCE0]">01.</div>
          <h2 className="text-xl font-semibold">High quality products.</h2>
        </div>
        <div className="space-y-4 flex gap-4 md:pl-4">
          <div className="text-5xl font-light text-[#EDDCE0]">02.</div>
          <h2 className="text-xl font-semibold">One of a kind designs.</h2>
        </div>
        <div className="space-y-4 flex gap-4 md:pl-4">
          <div className="text-5xl font-light text-[#EDDCE0]">03.</div>
          <h2 className="text-xl font-semibold">Top tier customer service.</h2>
        </div>
      </div>
    </div>
  )
}