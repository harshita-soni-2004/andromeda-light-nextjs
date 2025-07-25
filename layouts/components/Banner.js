"use client";

import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ImageFallback from "./ImageFallback";

const Banner = ({ title }) => {
  const banner = useRef(null);

  // Banner animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = document.querySelector(".header");
      const tl = gsap.timeline();
      tl.fromTo(
        ".banner-regular-title",
        { y: 20 },
        { y: 0, opacity: 1, duration: 0.5 },
      ).fromTo(
        ".breadcrumb",
        { y: 20 },
        { y: 0, opacity: 1, duration: 0.5 },
        ">-.3",
      );

      // Parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner.current,
          start: () => `top ${header?.clientHeight}`,
          end: () => `+=${banner.current.offsetHeight}`,
          scrub: true,
        },
      });

      const position = banner.current.offsetHeight * 0.15;
      parallaxTl.fromTo(
        ".banner-single .circle",
        { y: 0 },
        { y: position },
        "<",
      );
    }, banner);

    return () => ctx.revert();
  }, []);

  return (
    <div className="banner banner-single" ref={banner}>
      <div className="container-xl">
        <div className="banner-wrapper relative text-center">
          {markdownify(
            title,
            "h1",
            "text-5xl font-bold mb-8 banner-regular-title text-white",
          )}
          <ul className="breadcrumb flex items-center justify-center opacity-100 text-white text-lg">
            <li>
              <Link className="text-primary" href="/">
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="capitalize">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
