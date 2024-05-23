import React, { useReducer, useState } from 'react'

const initialstate=0
const reducer=(state, action)=>{
    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialstate
    }
}

function CounterOne() {

    const[count, dispatch]= useReducer(reducer, initialstate)
  return (
    <div>
        <h1>Count:- {count}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default CounterOne







// function fetch(){
//   useEffect((6)=>{
//     fetch()
//     .then((data)=>data.json())
//     .then((result)=>console.log(result))
//   },[])
// }

// function counter(){
//   const increment 
// }

// initialvalue = 0
// function counter(){
//   const [count, setCount] = useState(0)
  
//   const increment = ()=>{
//     setCount (count+1)
//   };
//   const Decrement = ()=>{
//     if(count > 0){
//       setCount(count -1)
//     }   
//   }
//   if(count === 0){
//     alert("nub zer")
//   }
//   const reset =()=>{
//     setCount(initialvalue)
//   };

//   return(
//     <div>
//     <h1> Count is = {count}</h1>
//     <button onClick={increment}>increment</button>
//     <button onClick={Decrement}>decrement</button>
//     <button onClick={reset}>reset</button>
//      </div>
//   )

// }

