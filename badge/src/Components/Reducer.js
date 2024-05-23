import React,{useReducer} from "react";
const initialvalue = 0;

const reducer =(state,action)=>{
    switch(action.type){
        case "increment":
            return state + action.value;
        case "decrement":
            return state - action.value;
        case "reset":
            return initialvalue;
        default:
            return state; 
    }
}


const Reducer = ()=>{
    const [count,dispatch] = useReducer(reducer,initialvalue)
    return(
        <div>
            <h1>counter using usereducer</h1>
            <button onClick={()=>dispatch({type:"decrement",value:1})}>-1</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            <button onClick={()=>dispatch({type:"increment",value:1})}>1</button>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"decrement",value:5})}>-5</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
            <button onClick={()=>dispatch({type:"increment",value:5})}>5</button>
        </div>
    )
}
export default Reducer
