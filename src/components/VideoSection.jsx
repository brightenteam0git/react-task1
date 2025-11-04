import React, { useState, useRef } from "react";
import "./VideoSection.css";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      video1Ref.current.pause();
      video2Ref.current.pause();
    } else {
      video1Ref.current.play();
      video2Ref.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="video-section">
      <div className="video-wrapper">
        {/* Left video */}
        <video
          ref={video1Ref}
          className="hero-video"
          muted
          loop
          playsInline
          src="/videos/v1.mp4"
        />

        {/* Right video */}
        <video
          ref={video2Ref}
          className="hero-video"
          muted
          loop
          playsInline
          src="/videos/v2.mp4"
        />

        {/* Center button + rotating text */}
        <div className="play-button-container" onClick={handlePlayPause}>
          <div className="rotating-text">
            <svg viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                />
              </defs>
              <text fontSize="6" fill="#ffffffff" fontWeight="bold" letterSpacing="1.5px">
                <textPath xlinkHref="#circlePath">
                  •LifeWise Pet Nutrition • What We Do • And We Love It • Gopet • What We Do • And
                  We Love It •
                </textPath>
              </text>
            </svg>
          </div>

          <div className="play-button">
            {isPlaying ? <Pause size={56} /> : <Play size={56} />}
          </div>
        </div>

        {/* Overlay heading */}
        <div className="hero-text">
          <h1>Let’s find the perfect <br/>food for your pet</h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
