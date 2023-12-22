import React from "react";

function Filter(){
    let arr=[1,2,3,4,5]
    let arr2= arr.filter((x)=>x%2===1)
    console.log(arr2);
    return(
        <div>
            {}
        </div>
    )
}
export default Filter