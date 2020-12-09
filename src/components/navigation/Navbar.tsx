import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: absolute;
  left: 50%;
`;

const NavbarList = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  position: relative;
  left: -50%;
  z-index: 100;
  li {
    display: inline-block;
    margin: 0 1rem;
    a {
      text-decoration: none;
      color: white;
      :hover {
        color: #d1b933;
      }
    }
  }
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarList>
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
      </NavbarList>
    </NavbarContainer>
  );
};
