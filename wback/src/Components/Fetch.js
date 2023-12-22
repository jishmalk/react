import React, { useEffect } from "react";

function Fetch(){
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/156')
        .then((data)=>data.json())
        .then((result)=>console.log(result))
    })
    return(
        <div>
            {}
        </div>
    )
}
export default Fetch;

