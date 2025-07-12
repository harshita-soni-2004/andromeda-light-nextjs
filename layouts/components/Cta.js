import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Circle from "./Circle";
import ImageFallback from "./ImageFallback";

function Cta() {
  const { title, content, button, enable } = config.call_to_action;
  if (!enable) return;

  return (
    <section className="cta section pt-0 bg-black text-white">
      <div className="container-xl">
        <div className="relative px-4">
          {/* Gradient border wrapper */}
          <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 p-[2px] rounded-2xl">
            {/* Inner box with solid background */}
            <div className="rounded-[15px] bg-black text-center p-10">
              <div className="animate">
                {markdownify(title, "h2", "section-title text-white")}
                {markdownify(content, "p", "mt-10 text-white/90")}
                <Link href={button.link} className="btn btn-primary mt-10">
                  {button.label}
                </Link>
              </div>
            </div>
          </div>

          {/* Background Circles */}
          <div className="">
            <Circle
              className="left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle className="left-[3%] bottom-[13%]" width={85} height={85} />
            <Circle
              className="left-[15%] bottom-[35%]"
              width={47}
              height={47}
              fill={false}
            />
            <Circle className="right-[12%] top-[12%]" width={20} height={20} />
            <Circle
              className="right-[2%] bottom-[30%]"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="right-[19%] bottom-[16%]"
              width={37}
              height={37}
              fill={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
