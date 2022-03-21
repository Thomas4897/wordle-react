import React, { Component } from "react";
import { InputRow } from "./component";
import "./App.css";

export class App extends Component {
  state = {
    word: "on",
    guessInput: "",
    wordsArray: [
      [
        {
          letter: "",
        },
        {
          letter: "",
        },
        {
          letter: "",
        },
        {
          letter: "",
        },
        {
          letter: "",
        },
      ],
      [
        {
          letter: "",
        },
        {
          letter: "",
        },
        {
          letter: "",
        },
        {
          letter: "",
        },
        {
          letter: "",
        },
      ],
    ],
  };

  handleLetterInputChange = (event) => {
    let input = [...this.state.guessInput];
    console.log(this.state.guessInput);
    // input.push(event.target.value);

    // if (input === this.state.word.length) {
    this.setState(
      {
        guessInput: input + event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
    // }
  };

  handleOnSubmit = (event) => {
    const { word, guessInput } = this.state;

    if (guessInput.toUpperCase() === word.toUpperCase()) {
      console.log("Correct!");
    } else {
      console.log("Guess Again!");
    }
  };

  render() {
    const { guessInput } = this.state;

    return (
      <div className="App">
        <h1>Wordle</h1>
        <div>
          {this.state.wordsArray.map((lettersArray) => {
            return lettersArray.map(({ letter }, idx) => {
              return (
                <div>
                  <InputRow key={`Input-letter-${idx}`} letter={letter} />
                </div>
              );
            });
          })}

          {/* <input
            className="App-input"
            maxLength={1}
            name="guessInput"
            // value={guessInput[0]}
            onChange={this.handleOnInputChange}
          /> */}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleOnSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default App;
