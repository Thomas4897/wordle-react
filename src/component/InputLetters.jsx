export function InputLetters(props) {
    return (
        <input 
        className="InputLetters"
        type="text" 
        name={props.name}
        value={props.letter}
        maxLength={1}
        style={{
            backgroundColor: props.matched ? "#63AA55" : props.included ? "#EAB305" : props.noMatch ? "#606685" : "",
            color: props.matched ? "white" : props.included ? "white" : props.noMatch ? "white" : "" 
          }}
          readOnly={true}
        />
    )
}