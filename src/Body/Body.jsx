import { useState } from "react";

//declare global(s)
let operation;

function Body() {
    // const[name, setName] = useState( null );
    let[firstNum, setFirstNum] = useState( null );
    let[secondNum, setSecondNum] = useState( null );
    let[answer, setAnswer] = useState( null );

    const handleOperationClick = ( event ) => {
        console.log( 'in handleClick:', event.target.value );
        operation = event.target.value;                
    }
    const handleFirstNumberChange = ( event ) =>{
        console.log( 'in handleFirstNumberChange:', event.target.value );        
        setFirstNum( event.target.value );
    }
    const handleSecondNumberChange = ( event ) =>{
        console.log( 'in handleSecondNumberChange:', event.target.value );
        setSecondNum( event.target.value );
    }
    const handleClearClick = ()=>{
        console.log( `in handleClearClick` );
        setFirstNum = 0;
        setSecondNum = 0;
    }
    const handleTotalClick = () => {
        console.log( 'in handleTotalClick and operation is:', operation );
        firstNum = Number( firstNum );
        secondNum = Number( secondNum );
        switch ( operation ) {
            case ( '+' ):
                //setAnswer = firstNum + secondNum;
                answer = firstNum + secondNum;
                break;
            case ( '-' ):
                answer = firstNum - secondNum;
                break;
            case ( '*' ):
                answer = firstNum * secondNum;
                break;
            case ( '/' ):
                answer = firstNum / secondNum;
                break;
            default:
                answer = 0;
                break;
        }
        setAnswer( answer );
    }

    return(
        <>
            <div className="inputDiv">
                <input type="number" placeholder="Enter a number" onChange= { ( event )=>handleFirstNumberChange ( event ) } />
                <button onClick={ ( event )=>handleOperationClick( event ) } value="+">+</button>
                <button onClick={ ( event )=>handleOperationClick( event ) } value="-">-</button>
                <button onClick={ ( event )=>handleOperationClick( event ) } value="*">*</button>
                <button onClick={ ( event )=>handleOperationClick( event ) } value="/">/</button>
                <input type="number" placeholder="Enter a number" onChange= { ( event )=>handleSecondNumberChange ( event ) } />
                {/* <button onClick={ ( event )=>handleTotalClick( event ) } value="=">=</button> */}
                <button onClick={ handleTotalClick } value="=">=</button>
                <button onClick={ ( event )=>handleClearClick( event ) } value="C">C</button>
            </div>
            <div id="outputDiv">
                <p id="calcAnswer">Answer is:{ answer }</p>
                <ul id="calculationsOut">
                </ul>
            </div>
        </>
    )
}

export default Body;