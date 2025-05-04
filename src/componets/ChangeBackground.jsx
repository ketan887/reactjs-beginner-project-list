import React, { useState } from 'react'

const ChangeBackground = () => {
    const   [clickme,setClickMe]= useState('white')

    const handle =()=>{
          const newClour =  clickme === 'white' ? 'red' : 'white'
          setClickMe(newClour)
    }
  return (
    <div style={{
        backgroundColor: clickme,
        width: "200px" ,
        height: "200px",
        cursor: "pointer"
    }} onClick={handle}> 

      click me chage colour : {clickme}
    </div>
  )
}

export default ChangeBackground