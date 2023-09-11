import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import LogReg from './components/log&reg/LogReg'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    
      <Routes>

        <Route path='' element={<LogReg/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
