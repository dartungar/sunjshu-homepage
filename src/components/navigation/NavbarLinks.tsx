import React from "react";
import styled from "styled-components";

const LinksList = styled.ul`
  li {
    display: inline-block;
    margin: 0.5rem 1rem;
    a {
      text-decoration: none;
      color: white;
      :hover {
        color: rgb(230, 223, 208);
      }
    }
  }
`;

export const NavbarLinks: React.FC = () => {
  return (
    <LinksList>
      <li>
        <a href="#about">Обо мне</a>
      </li>
      <li>
        <a href="#photo">Фотография</a>
      </li>
      <li>
        <a href="#imagemaking">Создание образа</a>
      </li>
      <li>
        <a href="#prices">Цены</a>
      </li>
      <li>
        <a href="#contacts">Контакты</a>
      </li>
    </LinksList>
  );
};
