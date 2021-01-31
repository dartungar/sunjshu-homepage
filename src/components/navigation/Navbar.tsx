import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarLinks } from "./NavbarLinks";
import { fadein } from "../../style/animations";

const NavbarContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 200;
  display: flex;
  justify-content: center;
`;

const HorizontalMenu = styled.div`
  position: relative;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    list-style: none;
    padding: 0;
    position: relative;
    top: 1rem;
    z-index: 200;
  }
`;

const VerticalMenu = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 3.5rem;
  background-color: rgba(31, 29, 26, 0.9);
  animation: ${fadein} 0.2s linear;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

const NavbarIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 1rem 1rem auto auto;
  color: rgb(245, 243, 238);
  transition: transform 0.2s linear;
  i {
    font-size: 1.5rem;
  }
`;

export const Navbar: React.FC = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [showVerticalMenu, setShowVerticalMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setShowMenuIcon(true);
    }
    return () => {
      setShowVerticalMenu(false);
    };
  }, []);

  return (
    <NavbarContainer>
      {showMenuIcon ? (
        <NavbarIcon
          onClick={() => setShowVerticalMenu(!showVerticalMenu)}
          style={{ transform: showVerticalMenu ? "rotate(90deg)" : "none" }}
        >
          <i className="fas fa-bars"></i>
        </NavbarIcon>
      ) : (
        <HorizontalMenu>
          <NavbarLinks />
        </HorizontalMenu>
      )}
      {showVerticalMenu && (
        <VerticalMenu>
          <NavbarLinks />
        </VerticalMenu>
      )}
    </NavbarContainer>
  );
};
