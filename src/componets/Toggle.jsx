import React, { useState } from 'react'

const Toggle = () => {
    const [ison,setIsON]=useState(false)
    const [clickme,setClickMe]= useState('white')
    const handleChange=()=>{
        setIsON(!ison)
        const newClour = clickme === 'white' ? "black" : "white"
        setClickMe(newClour)
        
    }
  return (
    <div style={{backgroundColor:clickme,
     width: "100vw",
     height : "100vh"

    } }>
      <input type="checkbox" onChange={handleChange} />
    

    </div>
  )
}

export default Toggle