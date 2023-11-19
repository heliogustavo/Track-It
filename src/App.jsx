import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './Styled/GlobalStyle';
import LoginPage from './Componentes/LoginPage';
import Cadastro from './Componentes/Cadastro';
import Habitos from './Componentes/Habitos';
import TopoPerfil from './Componentes/TopoPerfil';
import Hoje from './Componentes/Hoje';
import Rodape from './Componentes/Rodape';
import Historico from './Componentes/Historico';
import { formToJSON } from 'axios';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/habitos"
            element={
              <>
                <TopoPerfil />
                <Habitos />
                <Rodape />

              </>
            } />
          <Route
            path="/hoje"
            element={
              <>
                <TopoPerfil />
                <Hoje />
                <Rodape />

              </>
            } />           <Route
            path="/historico"
            element={
              <>
                <TopoPerfil />
                <Historico />
                <Rodape />

              </>
            } />
        </Routes>

      </BrowserRouter>


    </>
  )
}




