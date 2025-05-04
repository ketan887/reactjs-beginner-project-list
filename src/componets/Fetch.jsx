import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data,setData]=useState(null)

   useEffect(()=>{
        fetch("https://api.agify.io/?name=meelad")
        .then((response)=>response.json())
        .then((ketan)=> setData(ketan))
    },[])
  return (
    <div>
        {data? (
        <p>{data.name} is probably {data.age} years old</p>
      ) : (
        <p>Loading age data...</p>
      )}
    </div>
  )
}

export default Fetch