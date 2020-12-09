import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  filter: brightness(0.6);
`;

const HeroContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  color: white;

  h1 {
    font-size: 200%;
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroContainer className="full-bleed">
      <Img title="Sunjshu" alt="Sunjshu Photography" src="hero.jpg" />
      <HeroContent>
        <h1>sunjshu</h1> <small>photography</small>
      </HeroContent>
    </HeroContainer>
  );
};
