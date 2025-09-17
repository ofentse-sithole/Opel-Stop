import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GallerySection = styled.section`
  padding: 5rem 2rem;
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #77dd77;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #374151;
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const CarouselImage = styled.img`
  position: absolute;
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 3px solid rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 280px;
    height: 200px;
  }
  
  &.previous {
    transform: translateX(-200px) scale(0.8) rotateY(25deg);
    opacity: 0.6;
    z-index: 1;
    
    @media (max-width: 768px) {
      transform: translateX(-120px) scale(0.7);
      opacity: 0.4;
    }
  }
  
  &.current {
    transform: translateX(0) scale(1) rotateY(0deg);
    opacity: 1;
    z-index: 3;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
  }
  
  &.next {
    transform: translateX(200px) scale(0.8) rotateY(-25deg);
    opacity: 0.6;
    z-index: 1;
    
    @media (max-width: 768px) {
      transform: translateX(120px) scale(0.7);
      opacity: 0.4;
    }
  }
  
  &:hover {
    transform: scale(1.05);
    
    &.previous {
      transform: translateX(-200px) scale(0.85) rotateY(25deg);
      opacity: 0.8;
    }
    
    &.next {
      transform: translateX(200px) scale(0.85) rotateY(-25deg);
      opacity: 0.8;
    }
  }
`;

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#77dd77' : 'rgba(0, 0, 0, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#77dd77' : 'rgba(0, 0, 0, 0.5)'};
    transform: scale(1.2);
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProfessionalGallery = () => {
  // Sample automotive/workshop images - replace with your actual images
  const images = [
    "/car-images/1.jpeg",
    "/car-images/2.jpeg",
    "/car-images/3.jpeg",
    "/car-images/4.jpeg",
    "/car-images/5.jpeg"
];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  const nextImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  const goToNext = () => {
    setCurrentImageIndex(nextImageIndex);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(previousImageIndex);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <GallerySection>
      <Container>
        <GalleryHeader>
          <MainTitle>Our Gallery</MainTitle>
          <Subtitle>
            Take a look at our professional workshop and the quality work we deliver. 
            Every project represents our commitment to excellence.
          </Subtitle>
        </GalleryHeader>
        
        <CarouselContainer>
          <ImageCounter>
            {currentImageIndex + 1} / {images.length}
          </ImageCounter>
          
          <CarouselImage
            src={images[previousImageIndex]}
            alt="Previous work"
            className="previous"
            onClick={goToPrevious}
          />
          <CarouselImage
            src={images[currentImageIndex]}
            alt="Current work"
            className="current"
          />
          <CarouselImage
            src={images[nextImageIndex]}
            alt="Next work"
            className="next"
            onClick={goToNext}
          />
        </CarouselContainer>
        
        
      </Container>
    </GallerySection>
  );
};

export default ProfessionalGallery;