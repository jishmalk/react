import React, { useState } from "react";

const initialvalue = 0;
function Counter(){
const [Count,setCount]= useState()
    const increment=()=>{
        setCount(Count + 1)
    }
    const decrement=()=>{
        if(Count > 0){
            setCount(Count - 1)
        }
    };
    if(Count == 0){
        alert("number is zero")
    }
    const Rest=()=>{
        setCount(initialvalue)
    }

    return(
        <div>
            <h1>Count is : {Count}</h1>

            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={Rest}>Rest</button>
        </div>
    )
}
export default Counter;