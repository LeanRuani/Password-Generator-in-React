import React from "react";
import Generator from "./Generator";
import "./App.css";

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

    defaultMin: true,
    defaultMayus: true,
    defaultNum: true,

    caracter: 20,
  };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const valueMin = this.state.defaultMin;
  //   const valueMayus = this.state.defaultMayus;
  //   const valueNum = this.state.defaultNum;

  //   if (valueMin && valueMayus && valueNum) {
  //     this.setState({
  //       password: [].concat(this.state.abc, this.state.ABC, this.state.numbers),
  //     });
  //   } else if (valueMin && valueMayus && valueNum === false) {
  //     this.setState({
  //       password: [].concat(this.state.abc, this.state.ABC),
  //     });
  //   } else if (valueMin && valueMayus === false && valueNum === false) {
  //     this.setState({
  //       password: [].concat(this.state.abc),
  //     });
  //   } else if (valueMin === false && valueMayus && valueNum) {
  //     this.setState({
  //       password: [].concat(this.state.ABC, this.state.numbers),
  //     });
  //   } else if (valueMin === false && valueMayus && valueNum === false) {
  //     this.setState({
  //       password: [].concat(this.state.ABC),
  //     });
  //   } else if (valueMin && valueMayus === false && valueNum) {
  //     this.setState({
  //       password: [].concat(this.state.abc, this.state.numbers),
  //     });
  //   } else if (valueMin === false && valueMayus && valueNum) {
  //     this.setState({
  //       password: [].concat(this.state.ABC, this.state.numbers),
  //     });
  //   } else if (valueMin === false && valueMayus === false && valueNum) {
  //     this.setState({
  //       password: [].concat(this.state.numbers),
  //     });
  //   }
  //};

  handleMinChange = (e) => {
    this.setState({ defaultMin: e.target.checked });
  };

  handleMayusChange = (e) => {
    this.setState({ defaultMayus: e.target.checked });
  };
  handleNumChange = (e) => {
    this.setState({ defaultNum: e.target.checked });
  };

  handleRangeChange = (e) => {
    this.setState({ caracter: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Generator valores={this.state} />

        <label>
          <input
            name="minuscula"
            type="checkbox"
            checked={this.state.defaultMin}
            onChange={this.handleMinChange}
          ></input>
          abc
        </label>
        <label>
          <input
            name="mayuscula"
            type="checkbox"
            checked={this.state.defaultMayus}
            onChange={this.handleMayusChange}
          ></input>
          ABC
        </label>
        <label>
          <input
            name="numeros"
            type="checkbox"
            checked={this.state.defaultNum}
            onChange={this.handleNumChange}
          ></input>
          123
        </label>
        <label>
          <input name="Caracteres" type="checkbox"></input>Caracteres
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
          {this.state.caracter}
        </label>

        {/* <button onClick={this.onSubmit}>Generar</button> */}
      </div>
    );
  }
}

export default App;
