"use client";

import ImageFallback from "@layouts/components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import { useRef } from "react";
import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = ({ testimonial }) => {
  const testimonialPaginationRef = useRef(null);

  return (
    <section className="section pt-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white">
      <div className="container">
        <div className="animate text-center">
          <p className="text-zinc-300">{testimonial.subtitle}</p>
          {markdownify(
            testimonial.title,
            "h2",
            "mt-4 section-title text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent",
          )}
          {markdownify(testimonial.description, "p", "mt-10 text-zinc-400")}
        </div>

        <div className="animate row mt-10 items-center justify-center">
          <div className="xl:col-11">
            <div className="row items-center justify-center">
              <div className="hidden lg:col-3 xl:col-4 lg:block">
                <ImageFallback
                  src="/images/testimonials-01.png"
                  width={455}
                  height={522}
                  alt="testimonials"
                />
              </div>

              <div className="md:col-7 lg:col-6 xl:col-4">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    el: testimonialPaginationRef.current,
                    type: "bullets",
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  autoplay={{ delay: 3000 }}
                  onBeforeInit={(swiper) => {
                    swiper.params.pagination.el =
                      testimonialPaginationRef.current;
                  }}
                  className="testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]"
                >
                  {testimonial.list.map((item, index) => (
                    <SwiperSlide
                      className="text-center"
                      key={"testimonial-" + index}
                    >
                      <div className="px-8 py-6 sm:py-12 md:px-10 lg:px-20 xl:px-12">
                        <TbQuote className="mx-auto rotate-180 text-5xl text-zinc-500 sm:text-6xl lg:text-8xl" />
                        {markdownify(
                          item.content,
                          "p",
                          "text-[17px] lg:text-lg text-zinc-300 mt-4 md:mt-5 xl:mt-8",
                        )}
                        <div className="mt-7 inline-block rounded-md bg-zinc-800 text-white p-7 shadow-[0_10px_50px_rgba(255,255,255,0.05)] md:mt-5 lg:mt-8 xl:mt-5">
                          <ImageFallback
                            className="mx-auto rounded-full"
                            src={item.avatar}
                            width={90}
                            height={90}
                            priority={true}
                            alt={item.author}
                          />
                          <h6 className="mt-3 font-semibold text-lg">
                            {item.author}
                          </h6>
                          <p className="text-sm text-zinc-400">
                            {item.profession}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="relative h-8">
                  <div
                    className="pagination absolute left-1/2 -translate-x-1/2"
                    ref={testimonialPaginationRef}
                  ></div>
                </div>
              </div>

              <div className="hidden lg:col-3 xl:col-4 lg:block">
                <ImageFallback
                  src="/images/testimonials-02.png"
                  width={455}
                  height={522}
                  alt="testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
