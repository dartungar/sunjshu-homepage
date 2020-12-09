import React from "react";
import "./App.css";
import styled from "styled-components";
import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Slogan } from "./components/sections/Slogan";
import { Portfolio } from "./components/sections/Portfolio";
import { Services } from "./components/sections/Services";
import { Prices } from "./components/sections/Prices";
import { Contacts } from "./components/sections/Contacts";

const AppContainer = styled.div`
  position: relative;
  section {
    padding: 6rem 0;

    h2 {
      text-align: center;
    }
  }
`;

function App() {
  return (
    <AppContainer className="app">
      <div></div>
      <Navbar />
      <Hero />
      <Slogan />
      <About />
      <Portfolio />
      <Services />
      <Prices />
      <Contacts />
      <div></div>
    </AppContainer>
  );
}

export default App;
