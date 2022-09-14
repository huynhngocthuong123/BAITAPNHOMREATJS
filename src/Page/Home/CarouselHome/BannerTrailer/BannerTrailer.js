import React, { Fragment } from "react";
import YouTube from "react-youtube";

export default function BannerTrailer(props) {
  const showTrailer = [props.prop[0].trailer];
  const opts = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };
  let renderTrailer = () => {
    return showTrailer.map((id, index) => {
      return <YouTube className="youtube_trailer" videoId={id} opts={opts} />;
    });
  };
  return renderTrailer();
}

