// import React from 'react'

import WistiaVideo from "../WistiaVideo";

const Action = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl  font-bold  text-center mb-8">
        Watch in Action
      </h2>
      <div className="aspect-video w-full">
        <WistiaVideo mediaId="kzrh9o0gwp" />
      </div>
    </div>
  );
};

export default Action;
