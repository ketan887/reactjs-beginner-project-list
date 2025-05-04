import React, { useReducer, useState } from 'react'

const actions=()=>{
   ADD_TODO ='ADD_TODO'
}

const taskReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
    }

}



const TodoReducer = () => {
 const [state,dispatch]=useReducer(taskReducer,{todos:[]})
 const [inputValue,setInputValue]=useState('')



 const addTask =()=>{
    dispatch({type:"ADD_TASK",payload:{text:inputValue}})
 }
  return (
    <div>
        <h1>to do list </h1>
        <input type="text"  placeholder='add task' onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default TodoReducer