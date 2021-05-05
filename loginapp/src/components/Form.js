import React, { useState, Fragment, useEffect } from "react";

function Formulario() {
  return (
    <form className="formulario">
      <input type="text" name="" id="" placeholder="Ingrese el usuario" />
      <input type="text" name="" id="" placeholder="Inserte la contraseña" />
      <Boton />
    </form>
  );
}

function Boton() {
  const [estado, setEstado] = useState("nada");
  function prueba(e) {
    e.preventDefault();
    setEstado("procesando");
  }

  useEffect(() => {
    document.querySelector(".nada").style.transform = "scale(1.2)";
    setTimeout(() => {
      document.querySelector(".nada").style.transform = "scale(.9)";
    }, 2000);
  });

  return (
    <Fragment>
      <p className="contador">El numero correcto es {estado}</p>
      <button className={estado} onClick={prueba}>
        Sumar
      </button>
    </Fragment>
  );
}

export { Formulario };
