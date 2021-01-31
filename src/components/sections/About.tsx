import React from "react";
import styled from "styled-components";
import { SocialLinks } from "../elements/SocialLinks";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const PortraitContainer = styled.div`
  position: relative;

  max-width: 300px;
  display: inline-block;
  padding: 2rem;

  svg {
    position: absolute;
    top: -130px;
    right: 0;
  }

  img {
    position: relative;
    z-index: 200;
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  position: relative;
  padding-left: 1rem;
  z-index: 200;
  display: inline-block;
  max-width: 30rem;
`;

export const About: React.FC = () => {
  return (
    <section>
      <AboutContainer id="about">
        <PortraitContainer>
          <svg
            width="480"
            height="743"
            viewBox="0 0 480 743"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M252 4C68.0001 117 371.903 259.646 307 303C242.097 346.354 -55.9997 333 15.9999 445C87.9995 557 591 663 451 739"
              stroke="#99957d"
              stroke-width="5"
            />
          </svg>

          <img src="/images/portrait.jpg" alt="Юлия Николаева" />
        </PortraitContainer>
        <TextContainer>
          <h2>Привет, я - Юлия.</h2>
          <p>Я расскажу вашу историю фотографиями.</p>
          <p>
            Эмоции, настроение, душа момента останутся с вами на долгие годы.
            Фотографии помогут вспомнить самое лучшее.
          </p>
          <p>
            Если вы хотите навсегда сохранить в памяти свадьбу, важное событие
            или простую прогулку - свяжитесь со мной:
          </p>
          <SocialLinks />
        </TextContainer>
      </AboutContainer>
    </section>
  );
};
