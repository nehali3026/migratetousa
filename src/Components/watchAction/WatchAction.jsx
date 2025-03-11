// import React from 'react'

import { useState } from "react";
import {
  WATCH_ACTION_ACCORDION_DATA,
  WATCH_ACTION_FIRST_CAROUSEL,
  WATCH_ACTION_SECOND_CAROUSEL,
  WATCH_ACTION_THIRD_CAROUSEL,
} from "../../utils/data";
import { minusIcon, plusIcon } from "../../assets";
import "./watchAction.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Navigation } from "swiper/modules";
import WistiaVideo from "../WistiaVideo";

const WatchAction = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === isOpenIndex) {
      // Trigger closing animation
      setClosingIndex(index);
      setIsOpenIndex(null);
      // Remove after animation completes
      setTimeout(() => setClosingIndex(null), 1000); // match animation duration
    } else {
      setIsOpenIndex(index);
      setClosingIndex(null);
    }
  };
  return (
    <div className="relative z-20 py-10 max-w-7xl mx-auto box-border">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 xl:border rounded-md border-[#e5e7eb]">
          <div className="p-4 sm:p-8 relative overflow-hidden col-span-6 md:col-span-3 lg:col-span-4 border-b md:border-r border-[#e5e7eb] box-border">
            <div className=" mx-auto text-left tracking-tight text-black text-xl md:text-2xl md:leading-snug">
              <h3>
                <span className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 text-lg sm:text-xl lg:text-2xl font-bold">
                  Watch in Action
                </span>
              </h3>
            </div>
            <p className="text-sm text-neutral-500 font-normal text-left max-w-sm mx-0 md:text-sm my-2 text-balance">
              See how easy it is to find US jobs with guaranteed visa
              sponsorship and direct recruiter contacts.
            </p>
            <div className="h-full w-full pt-2">
              <div className="relative">
                {/* <div className="hidden md:block"></div>
                <div className="block md:hidden"></div> */}
                <WistiaVideo mediaId="xnhjmddw32" />
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-8 relative overflow-hidden col-span-6 md:col-span-3 lg:col-span-2 border-b border-[#e5e7eb] box-border">
            <div className=" mx-auto text-left tracking-tight text-black text-xl md:text-2xl md:leading-snug">
              <h3>
                <span className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 text-lg sm:text-xl lg:text-2xl font-bold">
                  Got Questions?
                </span>
              </h3>
            </div>
            <p className="text-sm text-neutral-500 font-normal text-left max-w-sm mx-0 md:text-sm my-2 text-balance">
              {" "}
              Find answers to common questions about our job search platform and
              how it works.
            </p>
            <div className="h-full w-full pt-2">
              <div className="flex justify-center w-full">
                <div className="p-4 max-w-[700px]">
                  {WATCH_ACTION_ACCORDION_DATA?.map((ele, index) => (
                    <div key={index} className="mb-2 que-main">
                      <div
                        onClick={() => handleToggle(index)}
                        className="flex w-full items-center justify-start gap-4"
                      >
                        <div
                          className={`relative flex items-center rounded-xl p-2 transition-colors bg-(--bg-gray) ${
                            index === isOpenIndex
                              ? "bg-(--text-primary-hover)/10"
                              : ""
                          } `}
                        >
                          <span className="font-medium ml-2">{ele?.title}</span>
                          <span className="absolute top-[-7px] right-0 transform-[rotate(7deg)]">
                            {ele.image}
                          </span>
                        </div>
                        <img
                          src={index === isOpenIndex ? minusIcon : plusIcon}
                          className="h-5 w-5"
                        />
                      </div>
                      {(index === isOpenIndex || closingIndex === index) && (
                        <div
                          className={`w-[330px] overflow-hidden  transition-all ease-in-out ${
                            index === isOpenIndex
                              ? "height-plus"
                              : closingIndex === index
                              ? "height-minus"
                              : "bg-amber-500"
                          }`}
                        >
                          <div className="ml-7 mt-1 md:ml-16">
                            <div className="relative max-w-sm rounded-2xl bg-(--text-primary-hover) px-4 py-2 text-(--white)">
                              {ele?.description}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-8 relative overflow-hidden col-span-6 md:col-span-6 lg:col-span-6 border-b border-[#e5e7eb] box-border">
            <div className="h-full w-full pt-2">
              <div className="w-full h-full flex flex-wrap items-center">
                <div>
                  <div className=" mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
                    <h3 className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 text-lg sm:text-xl lg:text-2xl font-bold">
                      The Smart ones are already here
                    </h3>
                  </div>
                  <p className="text-sm text-[#858585] font-normal dark:text-[#858585] text-left max-w-sm mx-0 md:text-sm my-2 text-balance">
                    Our platform has helped thousands of Indians land roles at
                    Fortune 500 companies and fast-growing startups.
                  </p>
                </div>
                <div className="gap-y-3 py-4 flex flex-wrap">
                  <Swiper
                    direction="vertical"
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    navigation={false}
                    modules={[Navigation, Autoplay, EffectCube]}
                    className="h-[96px] w-[210px] mb-0 flex items-center justify-center watch-action-main"
                  >
                    {WATCH_ACTION_FIRST_CAROUSEL?.map((image, index) => (
                      <SwiperSlide key={index} className="">
                        <img
                          src={image?.image}
                          className="h-24 md:h-[66px] max-w-[128px] w-auto mx-auto"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    direction="vertical"
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation={false}
                    modules={[Navigation, Autoplay, EffectCube]}
                    className="h-[96px] w-[210px] flex items-center justify-center watch-action-main"
                  >
                    {WATCH_ACTION_SECOND_CAROUSEL?.map((image, index) => (
                      <SwiperSlide key={index} className="">
                        <img
                          src={image?.image}
                          className=" md:max-h-[76px] h-auto max-w-[128px] w-auto mx-auto"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    direction="vertical"
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    navigation={false}
                    modules={[Navigation, Autoplay, EffectCube]}
                    className="h-[96px] w-[180px] flex items-center justify-center watch-action-main"
                  >
                    {WATCH_ACTION_THIRD_CAROUSEL?.map((image, index) => (
                      <SwiperSlide key={index} className="">
                        <img
                          src={image?.image}
                          className=" md:max-h-[66px] h-auto max-w-[70px] w-auto mx-auto"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchAction;
