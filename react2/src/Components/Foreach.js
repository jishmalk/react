import React from "react";

const Foreach= ()=>{
    let arr = [1,3,4,5]
    arr.forEach((value,index)=>(document.write(index+value)))
}
export default Foreach;
