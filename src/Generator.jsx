import React from "react";

//dos formas de seleccion de caracter para la password
// 1ro : los meto en un array nuevo y de ahi se elije un nro random y de ahi se asignan al pass
// 2da : dentro de un for y a su vez nro random para elegir el array de cada item
// 3ro : Switch con los value de cada lista de items

function Generator({ min, mayus, num, caracter }) {
  const password = [];

  const join = min.concat(mayus).concat(num);
  console.log(join);

  for (let i = 0; i < caracter; i++) {
    const random = Math.floor(Math.random() * join.length) + 1;
    password[i] = join[random];
  }
  console.log(password.length);

  return <h1>{password}</h1>;
}
export default Generator;
