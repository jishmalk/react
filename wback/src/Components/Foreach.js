import React from "react";
 
function Foreach(){
    let ar=[1,2,3,4,5]
    ar.forEach((value,index)=>(document.write(index+value)))

    return(
        <div>
            {}
        </div>
    )
}

export default Foreach;

