import React, { useState } from 'react'

const ColourPick = () => {
    const [pick,setPick] = useState('')

    const handleChange =(e)=>{
     setPick(e.target.value)
    }
  return (
    <>
    <div>
        <input type='color' onChange={handleChange} />
    </div>
    <div style={{width:"500px",height:"300px",backgroundColor : pick}}>

    </div>
    </>
  )
}

export default ColourPick