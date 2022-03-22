import { InputRow } from './InputRow'

export function WordComponent(props) {
    return (
        <div>
            {props.lettersArray.map(({letter}, letterIndex) => {
                // console.log(letter)
                return <InputRow 
                key={`Letter-Index-${letterIndex}`}
                wordIndex={props.wordIndex}
                letterIndex={letterIndex}
                letter={letter}
                handleLetterInputChange={props.handleLetterInputChange}
                />
            }) }
        </div>
        
    )
} 