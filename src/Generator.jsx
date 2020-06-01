import React from "react";

function Generator({ valores }) {
  var password = [];
  const p = [];
  const valueMin = valores.defaultMin;
  const valueMayus = valores.defaultMayus;
  const valueNum = valores.defaultNum;

  if (valueMin && valueMayus && valueNum) {
    password = valores.abc.concat(valores.ABC, valores.numbers);
  } else if (valueMin && valueMayus && valueNum === false) {
    password = valores.abc.concat(valores.ABC);
  } else if (valueMin && valueMayus === false && valueNum === false) {
    password = valores.abc.concat();
  } else if (valueMin === false && valueMayus && valueNum) {
    password = valores.ABC.concat(valores.numbers);
  } else if (valueMin === false && valueMayus && valueNum === false) {
    password = valores.ABC.concat();
  } else if (valueMin && valueMayus === false && valueNum) {
    password = valores.abc.concat(valores.numbers);
  } else if (valueMin === false && valueMayus && valueNum) {
    password = valores.ABC.concat(valores.numbers);
  } else if (valueMin === false && valueMayus === false && valueNum) {
    password = valores.numbers.concat();
  }

  for (let i = 0; i < valores.caracter; i++) {
    const random = Math.floor(Math.random() * password.length) + 1;
    p[i] = password[random];
  }

  return <h1>{p}</h1>;
}
export default Generator;
