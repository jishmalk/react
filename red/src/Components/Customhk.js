import React ,{useState, useEffect} from 'react'
import UseDocumentTitle from './UseDocumentTitle'

function Customhk(){
    const [count, setCount]= useState(0)
    UseDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>increase-{count}</button>
            </div>
    )
}
export default Customhk
