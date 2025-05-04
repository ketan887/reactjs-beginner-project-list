import React, { useState } from 'react'

const UserForm = () => {
    const [value,setValue]=useState('')
  return (
    <div>
        <input type="text" onChange={(e)=>setValue(e.target.value) } 
        />
        
        <p >input:-{value} </p>
    </div>
  )
}

export default UserForm