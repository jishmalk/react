import React, { useRef, useState } from 'react';

const Useref = () => {
  // Create a useRef to hold the reference to the input element
  const InputRef = useRef(null);

  // State to hold the current name
  const [name, setName] = useState('John Doe');

  // Function to handle name change
  const NameChange = () => {
    // Update the name in the state
    const newName = prompt('Enter a new name:');
    setName(newName);

    // Access the current value of the input element through the useRef
    InputRef.current.value = newName;
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <input type="text" ref={InputRef} defaultValue={name} />
      <button onClick={NameChange}>Change Name</button>
    </div>
  );
};


export default Useref;


//syntax
 //const InputRef = useRef(null)