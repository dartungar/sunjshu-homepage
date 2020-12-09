import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const PortraitContainer = styled.div`
  max-width: 300px;
  display: inline-block;

  img {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  display: inline-block;
  max-width: 30rem;
`;

export const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <PortraitContainer>
        <img src="/images/portrait.jpg" alt="Юлия Николаева" />
      </PortraitContainer>
      <TextContainer>
        <h2>Привет, я - Юлия.</h2>
        <p>Я расскажу вашу историю фотографиями.</p>
        <p>
          Эмоции, настроение, очарование момента останутся с вами на долгие
          годы. Фотографии помогут вспомнить самое лучшее.
        </p>
        <p>
          Если вы хотите навсегда сохранить в памяти свадьбу, важное событие или
          простую прогулку - свяжитесь со мной:
        </p>
        <p>(иконки соцсетей)</p>
      </TextContainer>
    </AboutContainer>
  );
};
