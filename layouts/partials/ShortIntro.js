"use client";

import React from "react";
import Circle from "@layouts/components/Circle";
// import VideoPopup from "@layouts/components/VideoPopup"; // Unused; comment out to avoid bundling.
import { markdownify } from "@lib/utils/textConverter";

/**
 * Responsive ShortIntro Section
 * ------------------------------------------------------------
 * Goals:
 *  • Fully responsive spacing & typography across breakpoints.
 *  • Constrain video to an adaptive 16:9 box (or any aspect via prop).
 *  • Ensure video always scales to container width; cap max height (vh).
 *  • Safe fallback values when `intro` fields missing.
 *  • Background decorative circles kept but hidden from assistive tech.
 *  • Optional props to control autoplay, loop, muted, controls, poster.
 *
 * Usage:
 *  <ShortIntro
 *    intro={{ subtitle:"Hello", title:"Welcome", description:"Lorem..." }}
 *    videoSrc="/videos/banner10.mp4"
 *  />
 */

// Utility: merge class names safely without bringing in an external dependency.
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ShortIntro = ({
  intro = {},
  videoSrc = "/videos/banner10.mp4",
  videoPoster,
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
  aspect = 16 / 9, // numeric aspect; used to compute padding-top %.
  maxHeightVh = 70, // cap video height on very tall screens.
  className,
}) => {
  const { subtitle = "", title = "", description = "" } = intro;

  // Compute padding-top % from aspect ratio; fallback to 56.25% (16:9).
  const padPct = aspect && aspect > 0 ? (1 / aspect) * 100 : 56.25;

  return (
    <section
      className={cx(
        "section pt-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white",
        className,
      )}
    >
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-28">
          <div className="text-center">
            <div className="opacity-100 translate-y-0 transition-all duration-1000 ease-in-out">
              {/* Subtitle */}
              <p className="text-zinc-300 text-sm sm:text-base tracking-wider uppercase">
                {subtitle}
              </p>

              {/* Title with gradient */}
              {markdownify(
                title,
                "h2",
                "mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent",
              )}

              {/* Description */}
              {markdownify(
                description,
                "p",
                "mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto",
              )}
            </div>

            {/* Video Section */}
            <div className="mx-auto mt-10 w-full max-w-2xl sm:max-w-3xl lg:max-w-[716px]">
              {/* Aspect-ratio wrapper using padding-top technique so no plugin required */}
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{
                  paddingTop: `${padPct}%`,
                  maxHeight: `${maxHeightVh}vh`,
                }}
              >
                <video
                  src={videoSrc}
                  autoPlay={autoplay}
                  loop={loop}
                  muted={muted}
                  controls={controls}
                  playsInline
                  poster={videoPoster}
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Background Circles */}
          <div
            className="bg-theme absolute left-0 top-0 w-full pointer-events-none -z-10"
            aria-hidden="true"
          >
            <Circle
              className="left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle className="left-[3%] top-[30%]" width={85} height={85} />
            <Circle
              className="bottom-[52%] left-[22%]"
              width={20}
              height={20}
            />
            <Circle
              className="bottom-[35%] left-[15%]"
              width={47}
              height={47}
              fill={false}
            />
            <Circle
              className="bottom-[6%] left-[6%]"
              width={62}
              height={62}
              fill={false}
            />
            <Circle className="right-[12%] top-[12%]" width={20} height={20} />
            <Circle
              className="right-[2%] top-[30%]"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="right-[19%] top-[50%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle className="right-[33%] top-[52%]" width={20} height={20} />
            <Circle
              className="bottom-[18%] right-[5%]"
              width={65}
              height={65}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortIntro;
