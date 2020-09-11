import React from "react";
import styled from "@emotion/styled";

const FraseBlockquote = styled.blockquote`
  max-width: 800px;
  padding: 3rem;
  background-color: #ffffff;
  border: 2px solid black;

  @media (min-width: 768px) {
    margin-top: 10rem;
  }
  p {
    position: relative;
    padding-left: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    text-align: center;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      top: -2rem;
      left: -1rem;
    }
  }
  footer {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    color: #666666;
    margin-top: 1rem;
  }
`;

const Frase = ({ frase }) => {
  const { quote, author } = frase;
  return (
    <FraseBlockquote>
      <p>{quote}</p>
      <footer>— {author}</footer>
    </FraseBlockquote>
  );
};

export default Frase;
