import React from "react"

export const MovingBanner: React.FC = () => {
  return (
    <div className="bg-black text-zinc-300 py-2 z-0 relative overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-[50dvw]">
        <span>🎉 Free delivery on orders above 1000EGP 🚚</span>
        <span>🎉 Free delivery on orders above 1000EGP 🚚</span>
      </div>
    </div>
  )
}
