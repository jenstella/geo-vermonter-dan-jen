
//score starts at 100 and deducts 1pt every time NSWE buttons are pressed
//functionality to come.
import {useState} from 'react';

function Score(props) {
    
    const [score, setScore] = useState("100")
    
    return (
        <>
            <h4>Current Score: {score}</h4>
        </>
    )
}


export default Score;