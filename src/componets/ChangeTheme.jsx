import React from 'react'
import themeContext from './CreateContext'
import { useContext } from 'react'

const ChangeTheme = () => {

    const {theme,toggleTheme}=useContext(themeContext)

  return (
    <div style={{background:theme === 'light' ? '#121212': '#ffffff',
        width:'100vh',
        height:'100vh'
    }}>
     
     <button onClick={toggleTheme}>
       Toggle {theme === 'light' ? 'dark': 'light'} mode
     </button>

    </div>
  )
}

export default ChangeTheme