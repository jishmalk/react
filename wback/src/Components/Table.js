import React from 'react'

const Table = () => {
  const people = [
    { name: 'Jishmal', place:'mavoor', age: 24 },
    { name: 'minhaj', place:'mavoor', age: 25 },
    { name: 'shafana', place:'mavoor', age: 26 },
  ]
  return (
    <div>
      <table>                        
          <tr>
            <th>name</th>
            <th>place</th>
            <th>age</th>
          </tr>
          {people.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.age}</td>             
            </tr>
          ))}
      </table>
    </div>
  )
}
export default Table

// import React, { useState } from 'react'
// function Theme() {
//   const [count, setCount]= useState(0)
//   return (
//     <div style={{backgroundColor: count === 1 ? "red":"green"}}>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//     </div>
//   )
// }

// export default Theme





const table = () =>{

  const people = [
    {name: "jishmal" , place: "mavoor", age: 23},
    {name: "nusaif" ,place: "", age: 26}
    ]
  return(
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>place</th>
          <th>age</th>
        </tr>
        {people.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.place}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

