import React, { useState } from 'react'

const Search = () => {

    const [term,setTerm]=useState(' ')
    const items= ["ketan","john ","rock","roman","seth"]
     const filterItems = items.filter((item)=>
      item.toLowerCase().includes(term.toLowerCase()))
    
    


    
  return (
    <div>
      <input type="text" placeholder='search' onChange={(e)=> setTerm(e.target.value)}/>
      <ul>
        {filterItems.map((item,index)=> (
            <li key={index}>
              {item}
            </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Search