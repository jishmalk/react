import React, { useState } from 'react';
import Childmemo from './Childmemo';

export const Parentmemo = () => {
    const [count,setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
  return (
    <div>
        <Childmemo increment={increment} count={count}/>
    </div>
  );
};

export default Parentmemo;

