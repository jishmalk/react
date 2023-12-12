import React, { useState } from "react";


const initialvalue = 0
function Count () {
    const [Count , setCount] = useState(0)
    const increment = ()=>{
        setCount(Count + 1)
    };
    const decremnt =()=>{
        if(Count >0){
            setCount(Count - 1)
        }
    };
    if(Count === 0){
        alert("munber is zero")
    };
    const Reset = ()=>{
        setCount(initialvalue)
    };

    return(
        <div className="App">
            <h1>Count is = {Count}</h1>

            <button onClick={increment}>increment</button>
            <button onClick={decremnt}>decremnt</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
};

export default Count;
