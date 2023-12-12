import React, { useEffect } from "react";

const Fetch=()=>{
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((data)=>data.json())
        .then((result)=>console.log(result))
    });
    return(
        <div>{}</div>
    )

    };
    export default Fetch;