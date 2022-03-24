import React, { Component } from "react";
import { WordComponent } from "./component";
import "./App.css";
import isAlpha from "validator/lib/isAlpha";
// const validator = require("validator");

// const serverURL =
//   "https://git.charlesreid1.com/cs/five-letter-words/raw/branch/master";

const wordListArray = ["start", "catch", "build", "sight", "guide"];
// let blankWordsArray = [
//   [
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//   ],
//   [
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//   ],
//   [
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//   ],
//   [
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//   ],
//   [
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//   ],
//   [
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//     {
//       letter: "",
//       matched: false,
//       included: false,
//       noMatch: false,
//     },
//   ],
// ];

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

    this.setState(
      {
        word: newWord,
        wordRow: 0,
        wordRowLetter: 0,
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
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleKeyPress = (event) => {
    let { word, wordRow, wordRowLetter } = this.state;
    const copiedWordsArray = [...this.state.wordsArray];

    //! If "Eneter" key press run handleOnSubmit;
    if (event.key === "Enter") {
      this.handleOnSubmit();
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
      event.key.length === 1
    ) {
      console.log("Hit 2!");
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
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  handleOnSubmit = () => {
    const copiedWordsArray = [...this.state.wordsArray];

    const newWordsArray = copiedWordsArray.map((lettersArray) => {
      return lettersArray.map((e, letterIndex) => {
        if (
          e.letter.toUpperCase() === this.state.word[letterIndex].toUpperCase()
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
      });
    });
    this.setState({
      wordsArray: newWordsArray,
    });
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

// handleLetterInputChange = (event, wordIndex, letterIndex) => {
//   const copiedWordsArray = [...this.state.wordsArray];

//   copiedWordsArray[wordIndex][letterIndex] = {
//     ...copiedWordsArray[wordIndex][letterIndex],
//     letter: event.target.value.toUpperCase(),
//   };

//   this.setState(
//     {
//       wordsArray: copiedWordsArray,
//     },
//     () => {
//       console.log(this.state.wordsArray);
//     }
//   );
// };
