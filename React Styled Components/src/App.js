import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { temaClaro, temaEscuro } from './Components/UI/Temas.js'

import { GlobalStyle } from './Components/GlobalStyle.js'
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() { 
  const [tema, setTema] = useState(true)
  
  const toggleTema = () => {
    setTema(tema => !tema)
  }

  return (
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <BtnTema onClick={toggleTema}>
          <SwitcherTema tema={tema}/>
        </BtnTema>
        <GlobalStyle />
        <Cabecalho />
        <Container />
      </ThemeProvider>
  );
}

export default App;
