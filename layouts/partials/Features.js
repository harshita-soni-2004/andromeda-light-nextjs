"use client";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Features = ({ features }) => {
  const paginationRef = useRef(null);

  return (
    <section className="section bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white">
      <div className="container text-center">
        <div className="animate">
          <p className="uppercase text-white">{features.sub_title}</p>

          <h2 className="mt-4 section-title text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {features.title}
          </h2>

          <p className="mt-10 text-white text-lg">{features.description}</p>
        </div>

        <div className="animate from-right relative mt-10">
          <Swiper
            Swiper
            slidesPerView={1}
            pagination={{
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {features.list.map((item, index) => (
              <SwiperSlide key={"feature-" + index}>
                {/* Gradient Border Wrapper */}
                <div className="m-4 rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 p-[2px]">
                  <div className="feature-card h-full rounded-xl bg-zinc-900 px-7 py-16 shadow-lg transition-all duration-300 hover:shadow-pink-500/30">
                    <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-full border border-pink-300 bg-zinc-800 text-pink-400">
                      <FeatherIcon icon={item.icon} size={28} />
                    </div>
                    <h3 className="h4 mb-5 mt-6 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative mt-9 flex justify-center">
            <div className="pagination" ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
