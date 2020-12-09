import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.section``;

export const Services: React.FC = () => {
  return (
    <ServicesContainer id="imagemaking">
      <h2>Создание образа</h2>
      <p>Помогу найти свой уникальный, стильный образ.</p>
      <p>
        Шопинг-сопровождение: пройду с вами по магазинам и помогу дополнить
        гардероб стильными вещами.
      </p>
    </ServicesContainer>
  );
};
