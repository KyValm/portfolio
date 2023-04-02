import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-left: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #5682cf;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>&copy; {new Date().getFullYear()} Kynoa Valmonte</FooterText>
      <SocialLinks>
        <SocialLink href="https://github.com/KyValm" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/kyvalm/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </SocialLink>
      </SocialLinks>
    </FooterWrapper>
  );
};

export default Footer;