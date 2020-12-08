import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Slogan } from "./components/sections/Slogan";
import { Portfolio } from "./components/sections/Portfolio";
import { Prices } from "./components/sections/Prices";
import { Contacts } from "./components/sections/Contacts";

const AppContainer = styled.div`
  section {
    margin-bottom: 7rem;

    h2 {
      text-align: center;
    }
  }
`;

function App() {
  return (
    <AppContainer className="app">
      <div></div>
      <Hero />
      <Slogan />
      <About />
      <Portfolio />
      <Prices />
      <Contacts />
      <div></div>
    </AppContainer>
  );
}

export default App;
