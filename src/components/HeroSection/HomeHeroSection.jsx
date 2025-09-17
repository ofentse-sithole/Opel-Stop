import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const HomeHeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoRefs = useRef([]);

  // Video URLs - Fixed paths to be consistent
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4"
  ];

  // Handle video loading
  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsLoading(false);
    };

    const handleVideoError = (error) => {
      console.error("Video error:", error);
      setIsLoading(false);
    };

    const currentVideo = videoRefs.current[currentVideoIndex];
    
    if (currentVideo) {
      // Set loading state to true when changing videos
      setIsLoading(true);
      
      currentVideo.addEventListener("loadeddata", handleVideoLoaded);
      currentVideo.addEventListener("error", handleVideoError);
      
      // Check if video is already loaded
      if (currentVideo.readyState >= 3) {
        setIsLoading(false);
      }
      
      // Ensure video starts playing
      const playPromise = currentVideo.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video play error:", error);
          setIsLoading(false);
        });
      }
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("loadeddata", handleVideoLoaded);
        currentVideo.removeEventListener("error", handleVideoError);
      }
    };
  }, [currentVideoIndex]);

  // Handle video end
  useEffect(() => {
    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
    
    const currentVideo = videoRefs.current[currentVideoIndex];
    
    if (currentVideo) {
      currentVideo.addEventListener("ended", handleVideoEnd);
    }
    
    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [currentVideoIndex, videos.length]);

  return (
    <HeroContainer>
        <br/>
        <br/>
        <br/>
      <VideoContainer>
        {videos.map((video, index) => (
          <VideoElement
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            muted
            playsInline
            autoPlay={index === currentVideoIndex}
            preload="auto"
            onLoadedData={() => index === currentVideoIndex && setIsLoading(false)}
            style={{
              display: currentVideoIndex === index ? "block" : "none",
              opacity: isLoading && currentVideoIndex === index ? 0 : 1,
            }}
          />
        ))}
        {isLoading && <LoadingIndicator>Loading...</LoadingIndicator>}
      </VideoContainer>

      <IndicatorDots>
        {videos.map((_, index) => (
          <IndicatorDot 
            key={index} 
            active={currentVideoIndex === index}
            onClick={() => setCurrentVideoIndex(index)}
          />
        ))}
      </IndicatorDots>
    </HeroContainer>
  );
};

// Styled Components

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  overflow: hidden;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    object-fit: contain; /* Ensure it covers the whole space, can change to cover*/
    height: 100%;
    width: 100%;
  }

  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Ensure full screen */
  background-color: black; /* Debugging: ensures the background doesn't create issues */
`;

const LoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.2rem;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

const IndicatorDots = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
`;

const IndicatorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
  transition: background 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export default HomeHeroSection;