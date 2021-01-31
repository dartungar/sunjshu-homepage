import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.div``;

export const Services: React.FC = () => {
  return (
    <section>
      <ServicesContainer id="imagemaking">
        <h2>Создание образа</h2>
        <p>Помогу найти свой уникальный, стильный образ.</p>
        <p>
          Приведу ваш гардероб в порядок - уберу лишнее или составлю с нуля.
        </p>
        <p>
          Шопинг-сопровождение: помогу выбрать вещи, которые подходят вашему
          образу.
        </p>
        <p>Составлю список рекомендаций по стилю.</p>
        <p>Дам совет, куда двигаться дальше.</p>
      </ServicesContainer>
    </section>
  );
};
