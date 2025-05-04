import { createContext, useContext } from "react";




const themeContext = createContext({
    theme : 'light',
     toggleTheme :()=>{

    }
})

export default themeContext;