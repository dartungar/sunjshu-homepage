import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  /* top: -100px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  position: relative;
  min-height: 50vh;
  min-width: 100%;
  object-fit: cover;
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
    font-size: 2rem;
    span {
      opacity: 0.7;
    }
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroContainer className="full-bleed">
      <Img title="Sunjshu" alt="Sunjshu Photography" src="/images/hero.jpg" />
      <HeroContent>
        <h1>
          sunjshu <span>photography</span>
        </h1>
      </HeroContent>
    </HeroContainer>
  );
};
