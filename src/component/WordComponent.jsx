import { InputLetters } from './InputLetters'

export function WordComponent(props) {
    return (
        <div>
            {props.lettersArray.map(({letter, matched, included, noMatch}, letterIndex) => {
     
                return <InputLetters
                key={`Letter-Index-${letterIndex}`}
                wordIndex={props.wordIndex}
                letterIndex={letterIndex}
                letter={letter}
                matched={matched}
                included={included}
                noMatch={noMatch}
                />
            }) }
        </div>
        
    )
} 