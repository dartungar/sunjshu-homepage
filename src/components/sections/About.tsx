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
  margin-left: 2rem;
  display: inline-block;
  max-width: 30rem;
`;

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <PortraitContainer>
        <img src="/images/portrait.jpg" alt="Юлия Николаева" />
      </PortraitContainer>
      <TextContainer>
        {" "}
        <h2>Привет, я - Юлия.</h2>
        <p>Я расскажу вашу историю фотографиями.</p>
        <p>
          Сохраните в памяти вашу свадьбу, памятный момент или простую прогулку.
          Пересматривайте фотографии и переживайте чувства снова и снова.
        </p>
      </TextContainer>
    </AboutContainer>
  );
};
