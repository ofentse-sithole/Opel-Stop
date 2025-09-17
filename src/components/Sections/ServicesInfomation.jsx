import React from 'react';
import styled from 'styled-components';
import { FaCogs, FaWrench, FaCarCrash, FaTools, FaCarSide, FaSearch, FaTruck } from "react-icons/fa";


const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: white;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1e293b;
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
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  margin-top: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceItem = styled.a`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #77dd77;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(-4px);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #77dd77;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CallButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #77dd77;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }
  
  ${ServiceItem}:hover & {
    color: #77dd77;
    
    &::after {
      transform: translateX(4px);
    }
  }
`;

const services = [
  {
    title: "Clutch Replacements",
    description: "Fast and reliable clutch replacements to keep you on the road.",
    icon: <FaCogs size={24} />
  },
  {
    title: "Engine Overhaul", 
    description: "Full engine services to restore performance.",
    icon: <FaWrench size={24} />
  },
  {
    title: "Brake Replacements",
    description: "Expert brake services to ensure your safety.",
    icon: <FaCarCrash size={24} />
  },
  {
    title: "Cylinder Head Overhaul",
    description: "Professional overhaul services for lasting engine health.",
    icon: <FaTools size={24} />
  },
  {
    title: "Suspension Repairs",
    description: "Keep your ride smooth with our suspension services.",
    icon: <FaCarSide size={24} />
  },
  {
    title: "Diagnostic Services",
    description: "Accurate diagnostics for any warning lights or issues.",
    icon: <FaSearch size={24} />
  },
  {
    title: "Towing Services",
    description: "Emergency towing available for your convenience.",
    icon: <FaTruck size={24} />
  }
];


const AutomotiveServices = () => {
  return (
    <ServicesSection>
      <Container>
        <ServicesHeader>
          <MainTitle>Our Services</MainTitle>
          <Subtitle>
            Your trusted team for vehicle repairs and diagnostics. 
            We provide professional automotive services with guaranteed quality and reliability.
          </Subtitle>
        </ServicesHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              href="tel:+27824034735"
              aria-label={`Call for ${service.title}`}
            >
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <CallButton>
                Call Now
              </CallButton>
            </ServiceItem>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default AutomotiveServices;