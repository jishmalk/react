import React, { useRef, useState } from 'react';

const Useref = () => {
  // Create a useRef to hold the reference to the input element
  const nameInputRef = useRef(null);

  // State to hold the current name
  const [name, setName] = useState('John Doe');

  // Function to handle name change
  const handleNameChange = () => {
    // Update the name in the state
    const newName = prompt('Enter a new name:');
    setName(newName);

    // Access the current value of the input element through the useRef
    nameInputRef.current.value = newName;
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <input type="text" ref={nameInputRef} defaultValue={name} />
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
};

export default Useref;
