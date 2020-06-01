import React from "react";

function Generator({ valores, cantidad }) {
  const p = [];

  for (let i = 0; i < cantidad; i++) {
    const random = Math.floor(Math.random() * valores.length) + 1;
    p[i] = valores[random];
  }

  return <h1>{p}</h1>;
}
export default Generator;
