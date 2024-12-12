import React from "react";
import { useState } from "react";

const HolaMundo3 = (props) => {
  const [msj, setMsj] = useState("");
  const MostrarMensaje = () => {
    setMsj("(from changed state)");
  };

  return (
    <>
      <div>
        Hello {props.name}
        {msj}
      </div>
      <button onClick={MostrarMensaje}>Click me</button>
    </>
  );
};

export default HolaMundo3;
