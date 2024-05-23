import React, { useState, useCallback, useReducer } from 'react';


const Usecallback = () => {
  const [count, setCount] = useState(0);

  // Without useCallback, handleIncrement function would be recreated on each render
  const handle = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count10: {count}</p>
      <button onClick={handle}>Increment</button>
    </div>
  );
};
export default Usecallback;


//syntax

// const memoizedCallback = useCallback(
//   () => {
//     // callback function logic
//   },
//   [dependencies]
//  );




// const table = () => {
//   const people = [
//     { name:"jishmal" ,age: 25},
//     {name : "nusu" , age: 29}
//   ]
//   return (
//     <div>
//       <table>
//         <tr>
//           <th>name</th>
//           <th>age</th>
//         </tr>
//         {people.map((item)=>(
//           <tr>
//             <td>{item.name}</td>
//             <td>{item.age}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   )
// }


// function theme (){
//   const [count, setCount] = useState(0);

//   return(
//     <div style={{ backgroundColor: count === 3 ? "red": "white"}}>
//       <h1> {count}</h1>
//       <button onClick={()=>setCount(count+1)}>increment</button>

//     </div>
//   )
// }

//------------------

//useReducer

// const initialstate = 0;
// const reducer = (state, action)=>{
//   switch(action.type){
//     case "increment":
//       return state + action.type;
//     case "decrement" :
//       return state - action.type;
//     case "rest":
//       return initialstate
//     default:
//       return state
//   }
// }

// function useReducer(){
// const [count, dispatch] = useReducer (reducer, initialstate)
// return (
//   <div>
//     <h1>counter</h1>
//     <button onClick={()=>dispatch({type:"increment", value: 1})}>1</button>
//     <button onClick={()=> dispatch({type:"reset"})}>reset</button>
//     <button onClick={()=>dispatch({type:"decrement", value: -1})}>-1</button>
//     <h1>{count}</h1>
//     <button onClick={()=>dispatch({type:"increment", value: 5})}>5</button>
//     <button onClick={()=> dispatch({type:"reset"})}>reset</button>
//     <button onClick={()=>dispatch({type:"decrement", value: -5})}>-5</button>
//   </div>
// )
// }