import React from "react";
import styled from "styled-components";

const SloganSection = styled.div`
  text-align: center;
  font-size: 1.25rem;
  margin: -2rem 0 6rem 0;

  svg {
    margin-bottom: 4rem;
  }
`;

export const Slogan: React.FC = () => {
  return (
    <section>
      <SloganSection>
        <svg
          width="170"
          height="1"
          viewBox="0 0 170 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="170" y2="1" stroke="#1F1F1F" stroke-width="1" />
        </svg>

        <p>Фотографии, которые сохранят ваши лучшие моменты навсегда</p>
      </SloganSection>
    </section>
  );
};
