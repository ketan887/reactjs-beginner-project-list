import React, { useState } from 'react'

const UploadFlile = () => {
    const [file,setFile]= useState(null)
    const handleChange =(e)=>{
        const showFile = e.target.files[0]
        setFile(showFile) 
    }

  return (
    <div>
        <input type="file" accept='image/*' onChange={handleChange}/>
        {file && <img src={URL.createObjectURL(file)} />}
    </div>
  )
}

export default UploadFlile