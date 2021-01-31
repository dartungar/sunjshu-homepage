import React, { lazy, Suspense } from "react";
import "./App.css";
import styled from "styled-components";
import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Slogan } from "./components/sections/Slogan";
import { Services } from "./components/sections/Services";
import { Prices } from "./components/sections/Prices";
import { Contacts } from "./components/sections/Contacts";
import { YMInitializer } from "react-yandex-metrika";

const Portfolio: any = lazy(() => import("./components/sections/Portfolio"));

const AppContainer = styled.div`
  position: relative;
  section {
    h2 {
      text-align: center;
    }
  }
`;

function App() {
  return (
    <AppContainer className="app">
      <YMInitializer
        accounts={[55837855]}
        options={{ webwisor: true }}
        version="2"
      />
      <Navbar />

      <Hero />
      <Slogan />
      <About />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Portfolio />
      </Suspense>
      <Services />
      <Prices />
      <Contacts />
    </AppContainer>
  );
}

export default App;
