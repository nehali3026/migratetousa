/* eslint-disable react/prop-types */
import { WistiaPlayer } from "@wistia/wistia-player-react";

const WistiaVideo = ({ mediaId }) => {
  return (
    <div
      className="relative w-full pt-[56.25%] bg-contain bg-center bg-no-repeat "
      style={{
        backgroundImage: `url('https://fast.wistia.com/embed/medias/${mediaId}/swatch')`,
      }}
    >
      <WistiaPlayer
        media-id={mediaId}
        aspect="0.5625"
        className="w-full h-full absolute top-0 left-0 filter-none"
        playerColor="#000000"
        autoplay
      />
    </div>
  );
};

export default WistiaVideo;
