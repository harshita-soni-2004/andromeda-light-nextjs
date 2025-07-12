"use client";

import { markdownify } from "@lib/utils/textConverter";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  return (
    <>
      <section className="bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white">
        {/* Banner */}
        <Banner title={title} className="text-white" />

        {/* About */}
        <div className="section container text-white">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="relative p-[60px] text-white rounded-3xl bg-zinc-800/40 backdrop-blur-md shadow-lg shadow-orange-500/10">
                <ImageFallback
                  className="relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1] animate-pulse opacity-30 blur-2xl"
                  width={85}
                  height={85}
                />
                <Circle
                  className="right-10 top-20 z-[-1] opacity-30 blur-2xl"
                  width={37}
                  height={37}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4">
              <p className="text-white">{about_us.subtitle}</p>
              {markdownify(
                about_us.title,
                "h2",
                "text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,100,100,0.3)] mt-4",
              )}
              {markdownify(about_us.content, "p", "mt-10 text-white/90")}
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p className="text-white">{works.subtitle}</p>
            {markdownify(
              works.title,
              "h2",
              "text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,100,100,0.3)] mt-4",
            )}
            {markdownify(works.content, "p", "mt-10 text-white/90")}
          </div>
          <div className="row mt-10 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4 text-white")}
                  {markdownify(work.content, "p", "mt-2 text-white/80")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="relative p-[60px] rounded-3xl bg-zinc-800/40 backdrop-blur-md shadow-lg shadow-orange-500/10">
                <ImageFallback
                  className="relative w-full rounded-2xl"
                  src={mission.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1] animate-pulse opacity-30 blur-2xl"
                  width={85}
                  height={85}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              <p className="text-white/90">{mission.subtitle}</p>
              {markdownify(
                mission.title,
                "h2",
                "text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,100,100,0.3)] mt-4",
              )}
              {markdownify(mission.content, "p", "mt-10 text-white/90")}
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="container-xl relative py-24">
          <div className="row items-center justify-center">
            <div className="md:col-6 xl:col-4 text-white">
              <div className="animate p-5">
                <p className="text-white/90">{video.subtitle}</p>
                {markdownify(
                  video.title,
                  "h2",
                  "text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent mt-4",
                )}
                {markdownify(video.description, "p", "mt-10 text-white/90")}
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 animate hover:scale-105 transition-transform duration-500 ease-in-out">
                <VideoPopup
                  id={video.video_id}
                  thumbnail={video.thumbnail}
                  width={540}
                  height={585}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Cta />
      </section>
    </>
  );
};

export default About;
