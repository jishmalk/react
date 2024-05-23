import React from 'react'

const Onchange = () => {

    const handleInput = (e) => {
        console.log(e.target.value);
    }

  return (
    <div>
      <h1>Onchange</h1>
      <input type='text' onChange={handleInput} />
    </div>
  )
}

export default Onchange
