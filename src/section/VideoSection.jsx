import React from "react";

const VideoSection = () => {
  return (
    <div className="p-4">
      <iframe
        className="rounded-4"
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/6Oi8-SiwwYc?si=r04HEr53oachEykK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
