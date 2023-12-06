import React, { useState } from 'react'



const products = [
    { id:1, name:"Laptop",brand:"Dell" , qty: 1},
    { id:2, name:"Laptop",brand:"HP" , qty: 1},
    { id:3, name:"Laptop",brand:"Lenova" , qty: 1},
];

const Keys = () => {
    const [items,setItem] = useState(products);

    const changeOty =(id) => {
      const newItem = items.map((item)=>
        item.id === id ? {...item, qty: item.qty+1}:item
      );
      setItem(newItem);
    };

  return (
    <div className='App'>
        {items.map((products)=>(
            <div className='app1' key={products.id}>
              <h1>{products.name}</h1>
              <h3>Brand:{products.brand}</h3>
              <h4>Qty: {products.qty}</h4>
              <button onClick={()=>changeOty(products.id)} type="button">
                +
                </button>
            </div>
        ))}
    </div>
  )
}

export default Keys;
