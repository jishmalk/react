import React from "react";

function Reduce(){
    let arr=[1,2,3,4,5]
    let arr1= arr.reduce((a,b)=>{
        return a+b
    });
    console.log(arr1);
}
export default Reduce;


