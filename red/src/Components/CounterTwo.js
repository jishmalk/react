import React, {useReducer} from 'react'

const initialstate = {
    firstCounter: 10,
    secondCounter: 100
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {  ...state, firstCounter: state.firstCounter +  action.value}
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
                return { ...state, secondCounter: state.secondCounter +  action.value}
        case 'decrement2':
                return { ...state, secondCounter: state.secondCounter - action.value}
        case 'Reset':
            return  initialstate
        default:
            return state
        
    }
}


function CounterTwo(){
    const [count, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
            <div>first Counter: {count.firstCounter}</div>
            
            <button onClick={()=>dispatch({type:'increment', value: 1 })}>
                increment
            </button>
            <button onClick={()=>dispatch({type:'decrement', value: 1})}>
                decrement
            </button>
            <button onClick={()=>dispatch({type:'increment', value: 5 })}>
                increment 5
            </button>
            <button onClick={()=>dispatch({type:'decrement', value: 5 })}>
                decrement 5
            </button>

        
        <div>
            {/* <button onClick={()=>dispatch({type:'increment2', value: 1 })}>
                increment Counter 2
            </button>
            <button onClick={()=>dispatch({type:'decrement2', value: 1})}>
                decrement Counter 2
            </button> */}
        </div>    
            <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo;

