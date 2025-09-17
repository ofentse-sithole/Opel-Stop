import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 70vh;
  background-color: white;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding-left: 2rem;
  background-color: white;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2980b9);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5d6d7e;
  margin-bottom: 2rem;
  text-align: justify;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #34495e;
  
  &::before {
    content: '✓';
    background: linear-gradient(45deg, #3498db, #2980b9);
    color: white;
    font-weight: bold;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 0.8rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <ImageSection>
        <ProfileImage 
          src="./image/Car-Logo.png" 
          alt="Logo"
        />
      </ImageSection>
      
      <ContentSection>
        <Title>About Opel Stop</Title>
        
        <Description>
          Opel Stop was founded in 2011 with a passion for delivering expert mechanical services
          to Opel, Isuzu, and Chevrolet owners. Over the years, we've grown to become a trusted
          name in the industry, providing high-quality vehicle services with a focus on customer
          satisfaction and professional craftsmanship.
        </Description>
        
        <Description>
          Our mission is to provide top-tier automotive services that keep your vehicle running
          smoothly and safely. We strive to offer exceptional service, using cutting-edge diagnostic
          tools and expert mechanical skills to address a range of vehicle issues.
        </Description>
        
        <HighlightList>
          <HighlightItem>
            Established in 2011
          </HighlightItem>
          <HighlightItem>
            Your trusted Opel, Isuzu, and Chevrolet Specialists.
          </HighlightItem>
          <HighlightItem>
            All repairs and services are carried out to the highest standards.
          </HighlightItem>
          <HighlightItem>
            We prioritize your experience and ensure your vehicle gets the best care.
          </HighlightItem>
        </HighlightList>
        
      </ContentSection>
    </AboutContainer>
  );
};

export default AboutPage;