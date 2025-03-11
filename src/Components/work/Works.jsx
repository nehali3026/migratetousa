/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
import { useState } from "react";
import { HOW_IT_WORKS_STEPS } from "../../utils/data";

const VerticalCarousel = ({ setIsActiveIndex }) => {
  return (
    <Swiper
      direction="vertical"
      loop={true}
      autoplay={{ delay: 5000 }}
      navigation={false}
      modules={[Navigation, Autoplay, EffectCube]}
      className="w-full h-full watch-action-main"
      onSlideChange={(swiper) => setIsActiveIndex(swiper.realIndex)}
    >
      {HOW_IT_WORKS_STEPS.map((step, index) => (
        <SwiperSlide key={index} className="">
          <img src={step.image} alt="step" className="w-full h-auto max-w-[300px] md:max-w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Works = () => {
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-16 ">
      <div className="p-4 md:p-12">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
            How it works
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
            <div className=" order-2 md:order-1 space-y-8">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <div
                  className={`${
                    isActiveIndex === index ? "" : "opacity-[0.3]"
                  } flex items-start gap-6 md:gap-8`}
                  key={index}
                >
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 mt-2  border-(--text-primary-hover) text-(--white) ${
                      isActiveIndex === index
                        ? "bg-(--text-primary-hover)"
                        : "bg-transparent"
                    }`}
                  >
                    <span
                      className={`text-lg font-bold ${
                        isActiveIndex === index
                          ? "text-white"
                          : "text-(--text-primary-hover)"
                      }`}
                    >
                      ✓
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-(--card-text) text-balance    ">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2 relative md:pt-[19px] h-[210px] sm:h-[230px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
              <VerticalCarousel {...{ setIsActiveIndex }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
