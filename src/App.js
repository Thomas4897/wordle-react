import React, { Component } from "react";
import { WordComponent } from "./component";
import "./App.css";

export class App extends Component {
  state = {
    word: "start",
    guessInput: "",
    wordsArray: [
      [
        {
          letter: "",
          matches: false,
          includes: false,
        },
        {
          letter: "",
          matches: false,
          includes: false,
        },
        {
          letter: "",
          matches: false,
          includes: false,
        },
        {
          letter: "",
          matches: false,
          includes: false,
        },
        {
          letter: "",
          matches: false,
          includes: false,
        },
      ],
      // [
      //   {
      //     letter: "",
      //   },
      //   {
      //     letter: "",
      //   },
      //   {
      //     letter: "",
      //   },
      //   {
      //     letter: "",
      //   },
      //   {
      //     letter: "",
      //   },
      // ],
    ],
  };

  handleLetterInputChange = (event, wordIndex, letterIndex) => {
    const copiedWordsArray = [...this.state.wordsArray];

    copiedWordsArray[wordIndex][letterIndex] = {
      ...copiedWordsArray[wordIndex][letterIndex],
      letter: event.target.value,
    };

    this.setState(
      {
        wordsArray: copiedWordsArray,
      },
      () => {
        // console.log(this.state.wordsArray);
      }
    );
  };

  handleOnSubmit = () => {
    // let copiedWord = this.state.word.split("").map((e) => {
    //   return { letter: e, matched: false };
    // });

    const copiedWordsArray = [...this.state.wordsArray];

    //! This syntax
    console.log("copiedWordsArray:", copiedWordsArray[0][0].letter);

    // const newWordsArray = copiedWordsArray.map((e, { letter }) => {
    // const { letter } = e;
    // if (this.state.word.includes(e)) {
    //   return true;
    // }
    //   console.log("e:");
    //   return e[letter];
    // });
    // console.log("newWordsArray:", newWordsArray);
    // for (let i = 0; i < copiedWord.length; i++) {}
  };

  render() {
    // const { guessInput } = this.state;

    return (
      <div className="App">
        <h1>Wordle</h1>
        <div>
          {this.state.wordsArray.map((lettersArray, wordIndex) => {
            return (
              <WordComponent
                key={`Word-Index-${wordIndex}`}
                wordIndex={wordIndex}
                lettersArray={lettersArray}
                handleLetterInputChange={this.handleLetterInputChange}
              />
            );
          })}
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
