import React from 'react';
import styled from 'styled-components';
import Logo from '/image/Opel-Stop-removebg-preview.png';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterMain = styled.div`
  padding: 4rem 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CompanySection = styled(FooterSection)`
  @media (max-width: 968px) {
    grid-column: 1 / -1;
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(88, 239, 68, 0.3);
`;


const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const CompanyDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 400px;
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 30px;
    height: 2px;
    background: #77dd77;
    border-radius: 1px;
  }
  
  @media (max-width: 568px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
  
  &:hover {
    color: #77dd77;
    transform: translateX(4px);
  }
  
  @media (max-width: 568px) {
    justify-content: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #cbd5e1;
  font-size: 0.9rem;
  
  @media (max-width: 568px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  width: 35px;
  height: 35px;
  background: rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #77dd77;
  font-size: 1rem;
  flex-shrink: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 568px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: #77dd77;
    border-color: #77dd77;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`;

const CopyrightText = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
`;

const DeveloperCredit = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
  
  a {
    color: #77dd77;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: #77dd77;
      text-decoration: underline;
    }
  }
`;

const NewsletterSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:focus {
    outline: none;
    border-color: #ef4444;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
  }
`;

const NewsletterButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`;

const ProfessionalFooter = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <FooterContainer>
      <Container>
        <FooterMain>
          <CompanySection>
            <CompanyLogo>
              <LogoIcon src={Logo} alt="Opel Stop Logo" />
              <CompanyName>Opel Stop</CompanyName>
            </CompanyLogo>
            <CompanyDescription>
              Your trusted partner for all Opel, Isuzu, and Chevrolet automotive needs. 
              Professional repairs, diagnostics, and maintenance services with over a decade of experience.
            </CompanyDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="Instagram">📸</SocialLink>
              <SocialLink href="https://wa.me/27824034735" aria-label="WhatsApp">💬</SocialLink>
              <SocialLink href="tel:+27824034735" aria-label="Phone">📞</SocialLink>
            </SocialLinks>
          </CompanySection>

          <FooterSection>
            <SectionTitle>Services</SectionTitle>
            <FooterLink >→ Clutch Replacements</FooterLink>
            <FooterLink>→ Engine Overhaul</FooterLink>
            <FooterLink >→ Brake Services</FooterLink>
            <FooterLink >→ Diagnostics</FooterLink>
            <FooterLink >→ Suspension Repairs</FooterLink>
            <FooterLink >→ Towing Services</FooterLink>
          </FooterSection>


          <FooterSection>
            <SectionTitle>Contact Info</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <div>
                  66 Topaas Street<br />
                  Klerksoord, Unit 7<br />
                  Pretoria North
                </div>
              </ContactItem>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <div>082 403 4735</div>
              </ContactItem>
              <ContactItem>
                <ContactIcon>✉️</ContactIcon>
                <div>theopelstop@gmail.com</div>
              </ContactItem>
              <ContactItem>
                <ContactIcon>🕒</ContactIcon>
                <div>
                  Mon-Fri: 8 AM - 5 PM<br />
                  Sat: 8 AM - 1 PM
                </div>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterMain>

        <FooterBottom>
          <CopyrightText>
            © {new Date().getFullYear()} Opel Stop. All rights reserved.
          </CopyrightText>
          <DeveloperCredit>
            Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a>
          </DeveloperCredit>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default ProfessionalFooter;