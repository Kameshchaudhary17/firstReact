import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Learningcomponent from './component/Learningcomponent'
import Headingcomponent from './component/Headingcomponent'
import Home from './component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login /> }/>
    <Route path='/register' element={<Register /> }/>
    <Route path='/learning' element={<Learningcomponent /> }/>
    <Route path='/heading' element={<Headingcomponent /> }/>
    <Route path='/home' element={<Home /> }/>

  </Routes>
  </BrowserRouter>
  )
}

export default App
