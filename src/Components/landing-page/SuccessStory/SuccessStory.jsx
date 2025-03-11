// import React from 'react'
import React, { useState } from "react";
import { SUCCESS_STORIES_DATA } from "../../../utils/data";

const SuccessStory = () => {
  const [sliceIndex, setSliceIndex] = useState(6);
  console.log(sliceIndex, "--sliceIndex");

  return (
    <div className="container py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-4">
        <h3 className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-500 to-neutral-600 text-4xl sm:text-5xl lg:text-6xl font-bold">
          Success Stories
        </h3>
        <div className="pb-4 pt-2">
          <h3 className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 text-lg sm:text-xl lg:text-2xl font-bold">
            Join thousands who found their dream jobs in the US
          </h3>
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="flex justify-center items-center gap-5 flex-wrap max-h-full overflow-hidden">
            {SUCCESS_STORIES_DATA?.slice(0, sliceIndex)?.map(
              ({ id, image, name, userName, description }) => (
                <div
                  className="rounded-xl border text-(--text-primary-opacity) shadow w-80 h-auto p-5 relative bg-(--bg-main) border-(--border-light-gray)"
                  key={id}
                >
                  <div className="flex items-center">
                    <img
                      src={image}
                      alt={name}
                      className="rounded-full w-[50px] h-[50px] object-cover object-center overflow-hidden"
                    />
                    <div className="flex flex-col pl-4">
                      <p className="font-semibold text-base">{name}</p>
                      <p className="text-sm text-(--card-text)">{userName}</p>
                    </div>
                  </div>

                  <div className="flex items-center mt-4 ">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <title>Rating</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 mb-5">
                    <p className="text-(--text-primary-opacity) font-medium">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          {sliceIndex !== SUCCESS_STORIES_DATA?.length && (
            <React.Fragment>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-(--bg-main) to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                <button
                  className="bg-[#18181b] h-9 px-4 whitespace-nowrap !rounded-md text-sm font-medium text-white shadow cursor-pointer"
                  onClick={() => setSliceIndex(6 + 6)}
                >
                  Load More
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
