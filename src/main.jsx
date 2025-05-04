import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './componets/Count.jsx'
import UserForm from './componets/UserForm.jsx'
import List from './componets/List.jsx'
import Toggle from './componets/Toggle.jsx'
import Fetch from './componets/Fetch.jsx'
import Timer from './componets/Timer.jsx'
import ChangeBackground from './componets/ChangeBackground.jsx'
import ReactDom from'react-dom'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './componets/Home.jsx'
import RandomQuote from './componets/RandomQuote.jsx'
import UploadFlile from './componets/UploadFlile.jsx'
import Login from './componets/Login.jsx'
import Search from './componets/Search.jsx'
import ColourPick from './componets/ColourPick.jsx'
import ThemeProvider from './componets/ThemeProvider.jsx'
import ChangeTheme from './componets/ChangeTheme.jsx'

import UseReducer from './componets/UseReducer.jsx'
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
  <ThemeProvider>
    <ChangeTheme/>
    <UseReducer/>
  </ThemeProvider>
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes> */}
 
  </StrictMode>
)
