import React from "react";

const Frase = ({ frase }) => {
  const { quote, author } = frase;
  return (
    <blockquote>
      <p>{quote}</p>
      <footer>— {author}</footer>
    </blockquote>
  );
};

export default Frase;
