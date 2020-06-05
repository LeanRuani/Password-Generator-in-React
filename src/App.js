import React from "react";
import Generator from "./components/Generator";
import styled from "styled-components";

// que tiene que tener para crear una contraseña?
// checkbox de selecion de Min, Mayus, Num y Caracteres
// Cant caracteres

class App extends React.Component {
  state = {
    abc: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "ñ",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    ABC: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Ñ",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    simbolos: [
      "%",
      "&",
      "'",
      "(",
      "#",
      ")",
      "*",
      "{",
      "}",
      "[",
      "]",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
    ],
    defaultMin: true,
    defaultMayus: true,
    defaultNum: true,
    defaultSimbol: false,
    caracter: 20,
  };

  handleMinChange = (e) => {
    //toma el true o el false del checked
    this.setState({ defaultMin: e.target.checked });

    //validacion para que no halla ningun checkbox vacio
    if (
      !this.state.defaultMayus &&
      !this.state.defaultNum &&
      !this.state.defaultSimbol
    ) {
      this.setState({ defaultMin: true });
    }
  };

  handleMayusChange = (e) => {
    this.setState({ defaultMayus: e.target.checked });
    if (
      !this.state.defaultMin &&
      !this.state.defaultNum &&
      !this.state.defaultSimbol
    ) {
      this.setState({ defaultMayus: true });
    }
  };
  handleNumChange = (e) => {
    this.setState({ defaultNum: e.target.checked });
    if (
      !this.state.defaultMin &&
      !this.state.defaultMayus &&
      !this.state.defaultSimbol
    ) {
      this.setState({ defaultNum: true });
    }
  };
  handleSimbolChange = (e) => {
    this.setState({ defaultSimbol: e.target.checked });

    if (
      !this.state.defaultMin &&
      !this.state.defaultMayus &&
      !this.state.defaultNum
    ) {
      this.setState({ defaultSimbol: true });
    }
  };

  handleRangeChange = (e) => {
    this.setState({ caracter: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Generator valores={this.state} />
        <label className="checkbox">
          <input
            name="minuscula"
            type="checkbox"
            checked={this.state.defaultMin}
            onChange={this.handleMinChange}
          ></input>
          <span>abc</span>
        </label>
        <label className="checkbox">
          <input
            name="mayuscula"
            type="checkbox"
            checked={this.state.defaultMayus}
            onChange={this.handleMayusChange}
          ></input>
          <span>ABC</span>
        </label>
        <label className="checkbox">
          <input
            name="numeros"
            type="checkbox"
            checked={this.state.defaultNum}
            onChange={this.handleNumChange}
          ></input>
          <span>123</span>
        </label>
        <label className="checkbox">
          <input
            name="Caracteres"
            type="checkbox"
            checked={this.state.defaultSimbol}
            onChange={this.handleSimbolChange}
          ></input>
          <span>#!%</span>
        </label>
        <label>
          <input
            id="typeinp"
            type="range"
            name="range"
            min="1"
            max="50"
            value={this.state.caracter}
            onChange={this.handleRangeChange}
            step="1"
          />
          {this.state.caracter} Caracteres
        </label>
      </div>
    );
  }
}

export default App;
