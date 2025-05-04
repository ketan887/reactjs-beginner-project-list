import React, { useReducer } from 'react'

const counterReducer =(state,action)=>{
    switch(action.type){
        case 'INCERMENT':
        return {count: state.count + 1};

        case 'DECERMENT':
            return {count : state.count - 1};

        case 'RESET':
            return {count: state.count = 0};
             
            default :
            return state

        
    }
}

const UseReducer = () => {
    const [state,dispatch]=useReducer(counterReducer,{count:0})

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"INCERMENT"})}>incerment</button>
            <button onClick={()=>dispatch({type:"DECERMENT"})}>decrement</button>
            <button onClick={()=> dispatch({type: "RESET"})}>reset</button>
        </div>
      )
    }

  

export default UseReducer