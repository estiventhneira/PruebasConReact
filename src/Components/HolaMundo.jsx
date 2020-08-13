import React from "react";

const HolaMundo = () => {
  const hello = "Hola Mundo!";
  const isTrue = false;
  return (
    <React.Fragment>
      <h1 className="HolaMundo">{hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
      {isTrue ? <h4>Soy verdadero</h4> : <h4>Soy falso</h4>}
    </React.Fragment>
  );
};

export default HolaMundo;
