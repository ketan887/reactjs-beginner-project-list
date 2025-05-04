import React from 'react'

const List = () => {

    const items = ["item 1","item2","item3","item4"]
  return (
    <div>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                    {item}

                </li>
            ))}
        </ul>
    </div>
  )
}

export default List