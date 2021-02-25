
//the buttons to play the game. when player hits start, start is disabled and guess and give up become enabled. when player wins or quits, start is enabled and guess/give up are disabled.
//functionality to come
function PlayButtons(props) {

    return (
   <> 
    <button onClick={props.PlayButtons}>Start</button>
    <button onClick={props.PlayButtons}>Guess</button>
    <button onClick={props.PlayButtons}>Give Up</button>
    </>
)
}

export default PlayButtons