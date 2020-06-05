import React from "react";
import styled from "styled-components";
import "../index.css";

function Generator({ valores }) {
  var password = [];
  const p = [];
  const valueMin = valores.defaultMin;
  const valueMayus = valores.defaultMayus;
  const valueNum = valores.defaultNum;
  const valueSimbol = valores.defaultSimbol;

  //Todas las combinaciones dentro del panel
  if (valueMin && valueMayus && valueNum && valueSimbol) {
    password = valores.abc.concat(
      valores.ABC,
      valores.numbers,
      valores.simbolos
    );
  } else if (valueMin && valueMayus && valueNum && !valueSimbol) {
    password = valores.abc.concat(valores.ABC, valores.numbers);
  } else if (valueMin && valueMayus && !valueNum && !valueSimbol) {
    password = valores.abc.concat(valores.ABC);
  } else if (valueMin && !valueMayus && !valueNum && !valueSimbol) {
    password = valores.abc.concat();
  } else if (!valueMin && valueMayus && valueNum && valueSimbol) {
    password = valores.ABC.concat(valores.numbers, valores.simbolos);
  } else if (!valueMin && valueMayus && !valueNum && valueSimbol) {
    password = valores.ABC.concat(valores.simbolos);
  } else if (!valueMin && valueMayus && valueNum && !valueSimbol) {
    password = valores.ABC.concat(valores.numbers);
  } else if (valueMin && !valueMayus && valueNum && valueSimbol) {
    password = valores.abc.concat(valores.numbers, valores.simbolos);
  } else if (!valueMin && valueMayus && valueNum && !valueSimbol) {
    password = valores.ABC.concat(valores.numbers);
  } else if (!valueMin && !valueMayus && valueNum && valueSimbol) {
    password = valores.numbers.concat(valores.simbolos);
  } else if (!valueMin && !valueMayus && valueNum && !valueSimbol) {
    password = valores.numbers.concat();
  } else if (!valueMin && valueMayus && !valueNum && !valueSimbol) {
    password = valores.ABC.concat();
  } else if (!valueMin && !valueMayus && !valueNum && valueSimbol) {
    password = valores.simbolos.concat();
  } else if (!valueMin && !valueMayus && valueNum && valueSimbol) {
    password = valores.simbolos.concat(valores.numbers);
  } else if (!valueMin && valueMayus && valueNum && valueSimbol) {
    password = valores.simbolos.concat(valores.numbers, valores.ABC);
  } else if (valueMin && !valueMayus && !valueNum && valueSimbol) {
    password = valores.simbolos.concat(valores.abc);
  } else if (valueMin && valueMayus && !valueNum && valueSimbol) {
    password = valores.simbolos.concat(valores.abc, valores.ABC);
  } else if (valueMin && !valueMayus && valueNum && !valueSimbol) {
    password = valores.numbers.concat(valores.abc);
  }

  for (let i = 0; i < valores.caracter; i++) {
    //genera nro random para que ése sea selecionado y se agrege a p (la password original)
    const random = Math.floor(Math.random() * password.length);
    p[i] = password[random];
  }

  const PasswordStyled = styled.div`
    padding: 0px;
    input[type="text"]:focus {
      outline: none;
    }
    input[type="text"] {
      font-family: "Press Start 2P", cursive;
      font-size: 20px;
      border: none;
      margin-left: 10px;
      color: #545454;
      padding: 20px 0 0;
      width: 70%;
      border-bottom: 2px solid
        ${(props) =>
          (valores.caracter <= 10 && "#e63e32") ||
          (valores.caracter <= 19 && "#e6ce32") ||
          (valores.caracter >= 20 && "#45c940")};
    }
  `;

  return (
    <>
      <PasswordStyled>
        <input type="text" value={p.join("")}></input>
        <button
          className="button-copy"
          onClick={() => {
            navigator.clipboard.writeText(p.join(""));
          }}
        >
          📋 Copy
        </button>
      </PasswordStyled>
    </>
  );
}
export default Generator;
