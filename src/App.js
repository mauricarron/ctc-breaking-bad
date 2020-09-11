import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Boton = styled.button`
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  color: #ffffff;
  border: 2px solid black;
`;

function App() {
  const consultarApi = () => {
    console.log("consultado...");
  };
  return (
    <Contenedor>
      <Boton onClick={consultarApi}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
