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
import { UsuarioContext } from './Contexts/UsuarioContext';
import { ProgressoContext } from './Contexts/ProgressoContext';

export default function App() {
  const [usuario, setUsuario] = useState({})
  const [progresso, setProgresso] = useState(65)

  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <ProgressoContext.Provider value={{progresso, setProgresso}}>
        <UsuarioContext.Provider value={{usuario, setUsuario}} >
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
        </UsuarioContext.Provider>
        </ProgressoContext.Provider>
      </BrowserRouter>


    </>
  )
}




