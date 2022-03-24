import React, { Component } from "react";
import { WordComponent } from "./component";
import "./App.css";
import isAlpha from "validator/lib/isAlpha";

const wordListArray = ["start", "catch", "build", "sight", "guide", "could"];

function generateNewWordsArray(
  wordsArray,
  wordRow,
  wordRowLetter,
  updatedLetter
) {
  const copiedWordsArray = [...wordsArray];
  copiedWordsArray[wordRow][wordRowLetter] = {
    ...copiedWordsArray[wordRow][wordRowLetter],
    letter: updatedLetter,
  };
  return copiedWordsArray;
}

export class App extends Component {
  state = {
    word: "start",
    wordRow: 0,
    wordRowLetter: 0,
    guessedWord: "",
    continueInput: true,
    wordsArray: [
      [
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
      ],
      [
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
      ],
      [
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
      ],
      [
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
      ],
      [
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
      ],
      [
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
        {
          letter: "",
          matched: false,
          included: false,
          noMatch: false,
        },
      ],
    ],
  };

  handleOnNextSubmit = () => {
    const randomNumber = Math.floor(Math.random() * wordListArray.length);
    const newWord = wordListArray[randomNumber];

    this.setState({
      word: newWord,
      wordRow: 0,
      wordRowLetter: 0,
      continueInput: true,
      wordsArray: [
        [
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
        ],
        [
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
        ],
        [
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
        ],
        [
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
        ],
        [
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
        ],
        [
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
          {
            letter: "",
            matched: false,
            included: false,
            noMatch: false,
          },
        ],
      ],
    });
  };

  handleKeyPress = (event) => {
    let { word, continueInput, wordRow, wordRowLetter } = this.state;
    const copiedWordsArray = [...this.state.wordsArray];

    //! If "Eneter" key press run handleOnSubmit;
    if (continueInput === false && event.key === "Enter") {
      this.handleOnSubmit();
      this.setState({
        continueInput: true,
      });
    }
    //! if "Backspace" key pressed remove last inputted letter
    else if (event.key === "Backspace") {
      //! If current position in the wordArray matrix is (0,0)
      //! remove any value in that position and do not change position
      if (wordRowLetter === 0 && wordRow === 0) {
        const updatedWordsArray = generateNewWordsArray(
          copiedWordsArray,
          wordRow,
          wordRowLetter,
          ""
        );

        this.setState({
          wordsArray: updatedWordsArray,
          continueInput: true,
        });
      }
      //! If positioned at beginning of a wordRow
      //! move up one Row and remove it's value
      else if (wordRowLetter === 0 && wordRow !== 0) {
        const updatedWordsArray = generateNewWordsArray(
          copiedWordsArray,
          [wordRow - 1],
          [word.length - 1],
          ""
        );
        this.setState({
          wordRow: wordRow - 1,
          wordRowLetter: word.length - 1,
          continueInput: true,
          wordsArray: updatedWordsArray,
        });
      }
      //! Else stay in current Row and remove the last letter inputted
      else {
        const updatedWordsArray = generateNewWordsArray(
          copiedWordsArray,
          wordRow,
          wordRowLetter - 1,
          ""
        );

        this.setState({
          wordRow: wordRow,
          wordRowLetter: wordRowLetter - 1,
          continueInput: true,
          wordsArray: updatedWordsArray,
        });
      }
    }
    //! Else if Any Other Key pressed and the poisition is within the wordArray matrix
    //! update the letter value
    //! Also checks if the input is a letter and it is only on character
    else if (
      wordRow <= 5 &&
      wordRowLetter < word.length &&
      isAlpha(event.key) &&
      event.key.length === 1 &&
      continueInput === true
    ) {
      const updatedWordsArray = generateNewWordsArray(
        copiedWordsArray,
        wordRow,
        wordRowLetter,
        event.key.toUpperCase()
      );

      this.setState({
        wordRow: wordRowLetter < word.length - 1 ? wordRow : wordRow + 1,
        wordRowLetter: wordRowLetter < word.length - 1 ? wordRowLetter + 1 : 0,
        wordsArray: updatedWordsArray,
      });
      if (wordRowLetter === 4) {
        this.setState({
          continueInput: false,
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  handleOnSubmit = () => {
    const copiedWordsArray = [...this.state.wordsArray];
    const currentRow = this.state.wordRow - 1;

    if (this.state.continueInput === false) {
      const newLettersArray = copiedWordsArray[currentRow].map(
        (e, letterIndex) => {
          if (
            e.letter.toUpperCase() ===
            this.state.word[letterIndex].toUpperCase()
          ) {
            return {
              ...e,
              noMatch: false,
              matched: true,
              included: false,
            };
          } else if (
            this.state.word.toUpperCase().includes(e.letter.toUpperCase()) &&
            e.letter !== ""
          ) {
            return {
              ...e,
              noMatch: false,
              matched: false,
              included: true,
            };
          }
          return {
            ...e,
            noMatch: true,
            matched: false,
            included: false,
          };
        }
      );

      copiedWordsArray[currentRow] = newLettersArray;

      this.setState({
        continueInput: true,
        wordsArray: copiedWordsArray,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Wordle</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleOnNextSubmit}
        >
          Next
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleOnSubmit}
        >
          Submit
        </button>
        <div>
          {this.state.wordsArray.map((lettersArray, wordIndex) => {
            return (
              <WordComponent
                key={`Word-Index-${wordIndex}`}
                wordIndex={wordIndex}
                lettersArray={lettersArray}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
