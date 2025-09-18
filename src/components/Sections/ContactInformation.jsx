import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  position: relative;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
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

const ContactHeader = styled.header`
  text-align: center;
  padding: 5rem 0 3rem;

  @media (max-width: 768px) {
    padding: 3rem 0 2rem;
  }
`;

const MainTitle = styled.h1`
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
    width: 100px;
    height: 4px;
    background: #77dd77;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1.5rem auto 0;
    padding: 0 0.5rem;
  }
`;

const ContactMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContactCard = styled.section`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: #77dd77;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #77dd77;
  transition: background-color 0.3s ease;

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #77dd77;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.strong`
  color: #374151;
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const InfoText = styled.span`
  color: #6b7280;
  line-height: 1.5;

  a {
    color: #77dd77;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #77dd77;
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #77dd77;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.85rem;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  font-family: inherit;
  background: white;

  &:focus {
    outline: none;
    border-color: #77dd77;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.85rem;
  }
`;

const SubmitButton = styled.button`
  background: #77dd77;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
  width: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.9rem 1rem;
  }
`;

const MapSection = styled.section`
  grid-column: 1 / -1;
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ContactFooter = styled.footer`
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
`;

const FooterText = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

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

const ProfessionalContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <Container>
        <ContactHeader>
          <MainTitle>Contact Opel Stop</MainTitle>
          <Subtitle>
            Get in touch with us for all your Opel, Isuzu, and Chevrolet needs.
            We're here to help with professional service and expert advice.
          </Subtitle>
        </ContactHeader>

        <ContactMain>
          <ContactCard>
            <SectionTitle>Our Contact Information</SectionTitle>
            <ContactInfo>
              <InfoItem>
  <InfoIcon><FaMapMarkerAlt /></InfoIcon>
  <InfoContent>
    <InfoLabel>Address:</InfoLabel>
    <InfoText>66 Topaas Street, Klerksoord, Unit 7, Pretoria North</InfoText>
  </InfoContent>
</InfoItem>

<InfoItem>
  <InfoIcon><FaPhoneAlt /></InfoIcon>
  <InfoContent>
    <InfoLabel>Phone:</InfoLabel>
    <InfoText>
      <a href="tel:+27824034735">082 403 4735</a>
    </InfoText>
  </InfoContent>
</InfoItem>

<InfoItem>
  <InfoIcon><FaEnvelope /></InfoIcon>
  <InfoContent>
    <InfoLabel>Email:</InfoLabel>
    <InfoText>
      <a href="mailto:theopelstop@gmail.com">theopelstop@gmail.com</a>
    </InfoText>
  </InfoContent>
</InfoItem>

<InfoItem>
  <InfoIcon><FaClock /></InfoIcon>
  <InfoContent>
    <InfoLabel>Working Hours:</InfoLabel>
    <InfoText>
      Mon-Fri: 8 AM - 5 PM<br />
      Sat: 8 AM - 1 PM
    </InfoText>
  </InfoContent>
</InfoItem>

            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <SectionTitle>Send Us a Message</SectionTitle>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">
                Send Message
              </SubmitButton>
            </ContactForm>
          </ContactCard>

          <MapSection>
            <SectionTitle>Find Us</SectionTitle>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.8197027815552!2d28.125732746635663!3d-25.639874270116525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfda12ca1376ad%3A0x6a3a0f70662174fd!2s7%2C%2066%20Topaas%20St%2C%20Klerksoord%20AH%2C%20Pretoria%2C%200116!5e0!3m2!1sen!2sza!4v1727624149644!5m2!1sen!2sza"
              allowFullScreen=""
              loading="lazy"
              title="Opel Stop Location"
            />
          </MapSection>
        </ContactMain>
      </Container>
    </ContactContainer>
  );
};

export default ProfessionalContactSection;
