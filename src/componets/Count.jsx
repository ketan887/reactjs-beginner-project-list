import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(e=> e - 1)}>-</button>
        <h1>{count}</h1>
        <button onDoubleClick={()=> setCount(e=> e + 1)}>+</button>
    </div>
  )
}

export default Count