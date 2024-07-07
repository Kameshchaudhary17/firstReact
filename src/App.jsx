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
import Blog from './Pages/Blog'
import Submit from './Pages/Submit'
import EditBlog from './Pages/EditBlog'
import Table from './Pages/Table'


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
    <Route path='/blog' element={<Blog /> }/>
    <Route path='/submit' element={<Submit /> }/>
    <Route path='/editblog' element={<EditBlog /> }/>
    <Route path='/table' element={<Table /> }/>



  </Routes>
  </BrowserRouter>
  )
}

export default App
