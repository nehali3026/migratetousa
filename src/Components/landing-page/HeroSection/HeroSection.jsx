// import React from "react";
import {
  countryIcon,
  indianIcon,
  oneTimePaymentIcon,
  verifiedIcon,
} from "../../../assets";
import SearchComponent from "./SearchComponent";

const HeroSection = () => {
  return (
    <div id="demo" className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* 
        drop down div
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div> */}
        <div className="space-y-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <h1 className="text-4xl text-center sm:text-5xl lg:text-5xl font-bold max-w-3xl leading-tight">
              Your Path to USA is Now Easier
            </h1>
            <img src={countryIcon} className="w-20 h-20 hidden md:block " />
          </div>
          <p className="md:text-xl text-gray-700 max-w-2xl text-center mx-auto text-balance">
            Access 600,000+ Verified Jobs and Recruiters from top US companies
            actively Hiring Indians with H1B visas and Green Cards
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            <SearchComponent />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 sm:pt-0">
              <div className="flex items-center gap-3 bg-white p-4 px-3 transition-all hover:shadow-lg hover:scale-105 rounded-lg border-gray-50 border-2">
                <img
                  src={verifiedIcon}
                  alt="verifiedIcon"
                  className="h-6 w-6"
                />
                <p className="text-sm text-gray-700 font-medium text-balance">
                  Data verified by the US Government
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 px-3 transition-all hover:shadow-lg hover:scale-105 rounded-lg border-gray-50 border-2">
                <img src={indianIcon} alt="indianIcon" className="h-14 w-[45px] md:w-8" />
                <p className="text-sm text-gray-700 font-medium text-balance">
                  Join 1000s of Indians Who Landed jobs with $100K+ Salaries
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 px-3 transition-all hover:shadow-lg hover:scale-105 rounded-lg border-gray-50 border-2">
                <img
                  src={oneTimePaymentIcon}
                  alt="oneTimePaymentIcon"
                  className="h-6 w-6"
                />
                <p className="text-sm text-gray-700 font-medium text-balance">
                  One-time payment & Lifetime access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[120%] skew-y-12 opacity-80"
      >
        <defs>
          <pattern
            id=":r4:"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" strokeDasharray="0"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:r4:)"></rect>
        <svg x="-1" y="-1" className="overflow-visible">
          <title>Animated Grid Pattern</title>
          <rect
            width="39"
            height="39"
            x="881"
            y="441"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.003515035039163195"
          ></rect>
          <rect
            width="39"
            height="39"
            x="321"
            y="161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.02882350649160799"
          ></rect>
          <rect
            width="39"
            height="39"
            x="401"
            y="561"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.05624765450193081"
          ></rect>
          <rect
            width="39"
            height="39"
            x="561"
            y="81"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.08423744774481748"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1201"
            y="241"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.09715501052851323"
          ></rect>
          <rect
            width="39"
            height="39"
            x="801"
            y="241"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.09704785225039814"
          ></rect>
          <rect
            width="39"
            height="39"
            x="681"
            y="321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.08585809029464145"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1201"
            y="41"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.06279922714165878"
          ></rect>
          <rect
            width="39"
            height="39"
            x="721"
            y="281"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.030853382890927608"
          ></rect>
          <rect
            width="39"
            height="39"
            x="121"
            y="281"
            fill="currentColor"
            strokeWidth="0"
            opacity="0"
          ></rect>
          <rect
            width="39"
            height="39"
            x="121"
            y="401"
            fill="currentColor"
            strokeWidth="0"
            opacity="0"
          ></rect>
          <rect
            width="39"
            height="39"
            x="881"
            y="401"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.015762552255182527"
          ></rect>
          <rect
            width="39"
            height="39"
            x="721"
            y="361"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.04448023514996749"
          ></rect>
          <rect
            width="39"
            height="39"
            x="401"
            y="161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.0696234018629184"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1001"
            y="321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.0876628448109841"
          ></rect>
          <rect
            width="39"
            height="39"
            x="801"
            y="361"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.0995375133905327"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1161"
            y="201"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.09736383637937251"
          ></rect>
          <rect
            width="39"
            height="39"
            x="361"
            y="161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.08434752524190117"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1281"
            y="321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.06708310832327698"
          ></rect>
          <rect
            width="39"
            height="39"
            x="201"
            y="521"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.04397059333568905"
          ></rect>
          <rect
            width="39"
            height="39"
            x="81"
            y="161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.014567604448529892"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1321"
            y="561"
            fill="currentColor"
            strokeWidth="0"
            opacity="0"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1161"
            y="121"
            fill="currentColor"
            strokeWidth="0"
            opacity="0"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1081"
            y="521"
            fill="currentColor"
            strokeWidth="0"
            opacity="0"
          ></rect>
          <rect
            width="39"
            height="39"
            x="441"
            y="521"
            fill="currentColor"
            strokeWidth="0"
            opacity="0"
          ></rect>
          <rect
            width="39"
            height="39"
            x="561"
            y="361"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.0098850069422042"
          ></rect>
          <rect
            width="39"
            height="39"
            x="921"
            y="121"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.03437933926761616"
          ></rect>
          <rect
            width="39"
            height="39"
            x="601"
            y="281"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.05719210450479295"
          ></rect>
          <rect
            width="39"
            height="39"
            x="441"
            y="401"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.07563317184394691"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1161"
            y="41"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.08761261626204941"
          ></rect>
        </svg>
      </svg>
    </div>
  );
};

export default HeroSection;
