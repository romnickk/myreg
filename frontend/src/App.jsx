import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Register from './pages/register';
import Display from './pages/display';

function App() {

  return (

    <>
     <div>
     <BrowserRouter>
      <Routes>
        <Route path='/api/home' element={<Home/>}></Route>
        <Route path='/api/about' element={<About/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/api/display' element={<Display/>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
  </>


  )
}
export default App


