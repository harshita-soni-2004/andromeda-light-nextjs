"use client";

import Circle from "@layouts/components/Circle";
import VideoPopup from "@layouts/components/VideoPopup";
import { markdownify } from "@lib/utils/textConverter";

const ShortIntro = ({ intro }) => {
  return (
    <section className="section pt-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white">
      <div className="container-xl">
        <div className="relative px-4 py-[70px]">
          <div className="text-center">
            <div className="opacity-100 translate-y-0 transition-all duration-1000 ease-in-out">
              {/* Subtitle */}
              <p className="text-zinc-300 text-base tracking-wider uppercase">
                {intro.subtitle}
              </p>

              {/* Title with gradient */}
              {markdownify(
                intro.title,
                "h2",
                "mt-4 text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent",
              )}

              {/* Description */}
              {markdownify(
                intro.description,
                "p",
                "mt-8 text-lg text-zinc-300 max-w-3xl mx-auto",
              )}
            </div>

            {/* Video Section */}
            <div className="mx-auto mt-10 h-full max-h-[394px] w-full max-w-[716px]">
              <VideoPopup id={intro.video_id} thumbnail={intro.thumbnail} />
            </div>
          </div>

          {/* Background Circles */}
          <div className="bg-theme absolute left-0 top-0 w-full pointer-events-none">
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
