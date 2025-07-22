"use client";

import Image from "next/image";
import Link from "next/link";

export default function FlooristaHero({
  title = "Techno Future Software",
  subtitle = "Grow Your Business with us",
  cta = { href: "/projects", label: "Explore Now" },
  image = {
    src: "/images/banner14.png",
    alt: "Preview of premium carpets available at Florista",
    width: 600,
    height: 600,
  },
}) {
  return (
    <section
      className="relative overflow-hidden bg-black text-white px-4  pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-28"
      aria-label="Techno Future Software"
    >
      <DecorShapes />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center pt-24 gap-12 md:grid-cols-2 lg:gap-20">
        {/* Text Block */}
        <div className="relative z-10 text-center md:text-left">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-white/90 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base text-white/80 sm:mt-6 sm:text-lg md:mx-0 md:mt-8 md:text-xl md:leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center md:justify-start sm:mt-10">
            <Link
              href={cta.href}
              className="inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 sm:px-8 sm:py-4 sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {cta.label}
            </Link>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative z-10 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="relative aspect-square w-full">
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
              priority
              className="rounded-2xl object-cover shadow-[0_0_0_4px_rgba(249,115,22,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DecorShapes() {
  return (
    <>
      <span className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rotate-12 bg-orange-500/30 opacity-70 blur-2xl md:h-80 md:w-80" />
      <span className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 -rotate-12 bg-pink-500/30 opacity-60 blur-3xl md:h-96 md:w-96" />
      <span className="pointer-events-none absolute left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400 md:h-4 md:w-4" />
    </>
  );
}
