import React from "react";
import Generator from "./Generator";
import "./App.css";

// que tiene que tener para crear una contraseña?
// checkbox de selecion de Min, Mayus, Num y Caracteres
// Cant caracteres
class App extends React.Component {
  state = {
    min: {
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
      value: true,
    },
    mayus: {
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
      value: true,
    },
    num: {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      value: true,
    },
    caracter: 20,
  };

  valueInputs = (e) => {
    // this.setState({
    //   min: { value: e.target.checked },
    //   mayus: { value: e.target.checked },
    //   num: { value: e.target.checked },
    // });

    console.log(this.state.min.value);
    console.log(this.state.mayus.value);
    console.log(this.state.num.value);
  };

  handleCheckboxMin = (e) => {
    this.setState({
      min: { value: e.target.checked },
    });
  };
  handleCheckboxMayus = (e) => {
    this.setState({
      mayus: { value: e.target.checked },
    });
  };
  handleCheckboxNum = (e) => {
    this.setState({
      num: { value: e.target.checked },
    });
  };

  handleRangeChange = (e) => {
    this.setState({ caracter: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Generator
          min={this.state.min.value ? this.state.min.abc : null}
          mayus={this.state.mayus.value ? this.state.mayus.ABC : null}
          num={this.state.num.value ? this.state.num.numbers : null}
          caracter={this.state.caracter}
        />
        <label>
          <input
            name="Minuscula"
            type="checkbox"
            checked={this.state.min.value}
            onChange={this.handleCheckboxMin}
          ></input>
          Minuscula
        </label>
        <label>
          <input
            name="Mayuscula"
            type="checkbox"
            checked={this.state.mayus.value}
            onChange={this.handleCheckboxMayus}
          ></input>
          Mayuscula
        </label>
        <label>
          <input
            name="Numeros"
            type="checkbox"
            checked={this.state.num.value}
            onChange={this.handleCheckboxNum}
          ></input>
          Numeros
        </label>
        <label>
          <input name="Caracteres" type="checkbox"></input>Caracteres
        </label>
        <label>
          <input
            id="typeinp"
            type="range"
            min="1"
            max="50"
            value={this.state.caracter}
            onChange={this.handleRangeChange}
            step="1"
          />
          {this.state.caracter}
        </label>

        <input type="button" value="Generar" onClick={this.valueInputs}></input>
      </div>
    );
  }
}

export default App;
