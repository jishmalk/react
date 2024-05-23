import React from 'react'

const Childmemo = ({increment,count}) => {

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  );
};

export default React.memo(Childmemo);




