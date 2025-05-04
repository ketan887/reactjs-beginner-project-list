import React, { useState } from 'react'

const Login = () => {
    const [islogin,setIsLogin]= useState('')
    const [isRegister,setIsRegister]=useState('')
  return (
    <div>

        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>

        <div>
        <button >
        {isRegister ? "login" : "register"}
        </button>

        </div>
        <div>
            <button onClick={()=>setIsRegister(!isregister )}>

               
            </button>
        </div>
    
    </div>
  )
}

export default Login