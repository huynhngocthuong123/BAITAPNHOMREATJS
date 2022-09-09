import React from "react";
import YouTube from "react-youtube";

export default function BannerTrailer() {
  const showTrailer = ["uoKSzOuPcfY"];
  // const showTrailer = ["uoKSzOuPcfY", "kBY2k3G6LsM", "v=jBa_aHwCbC4"];
  const opts = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };
  let renderTrailer = () => {
    return showTrailer.map((id) => {
      return <YouTube className="youtube_trailer" videoId={id} opts={opts} />;
    });
  };
  return renderTrailer();
}

