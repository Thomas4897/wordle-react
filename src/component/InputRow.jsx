export function InputRow(props) {
    return (
        <input 
        type="text" 
        name={props.name}
        value={props.letter}
        maxLength={1}
        onChange={(e) => {props.handleLetterInputChange(e, props.wordIndex, props.letterIndex)}}
        />
    )
}