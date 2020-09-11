import React, { useState, useEffect } from "react";
import Frase from "./components/Frase";
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
  transition: background-size 0.8s ease;
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, guardarFrase] = useState({});

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const response = await api.json();
    guardarFrase(response[0]);
  };

  console.log(frase);
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarApi}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
