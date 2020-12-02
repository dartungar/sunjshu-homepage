import React from 'react';
import './App.css';
import styled from "styled-components";
import {Hero} from "./components/sections/Hero";
import {About} from "./components/sections/About";
import {Slogan} from "./components/sections/Slogan";
import {Portfolio} from "./components/sections/Portfolio";

const AppContainer = styled.div`

section {
  margin-bottom: 5rem;
}


`;

function App() {
  return (
    <AppContainer className="app">
      <div></div>
      <Hero/>
      <Slogan/>
      <About/>
      <Portfolio/>
      <div></div>
    </AppContainer>
  );
}

export default App;
