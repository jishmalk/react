import React, {useReducer} from 'react'

const initialstate = 0
 
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1 
        case 'Reset':
            return  initialstate
        default:
            return state
    }
}

function CounterThree(){
    const [count, dispatch] = useReducer(reducer, initialstate)
    const [CounterTwo, dispatchTwo] = useReducer(reducer, initialstate)

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
        
        <div>
            <div>Count Two : {CounterTwo}</div>
            <button onClick={()=>dispatchTwo('increment')}>increment</button>
            <button onClick={()=>dispatchTwo('decrement')}>decrement</button>
            <button onClick={()=>dispatchTwo('Reset')}>Reset</button>
        </div>
        </div>
        
    )
}

export default CounterThree;



