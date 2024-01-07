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

  const [name , setName] = useState();
  const [username , serUsername] = useState();
  const [password , setPassword] = useState();

 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://myreg-server.vercel.app', {name,username,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (

    <>
     <div>
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
      </Routes>
      </BrowserRouter>
     </div>

     <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div className='mb-3'>
        <label htmlFor="name">
        <strong>Name:</strong>
        </label>
        <input type="text" name="name" id="name" autoComplete='off' placeholder='enter your name' className='form-control rounded-0' onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className='mb-3'>
      <label htmlFor="username">
      <strong>Username:</strong>
      </label>
      <input type="text" name="username" id="username" autoComplete='off' placeholder='enter your username' className='form-control rounded-0' onChange={(e) => serUsername(e.target.value)} />
    </div>

    <div className='mb-3'>
    <label htmlFor="password">
    <strong>Password:</strong>
    </label>
    <input type="text" name="password" id="password" autoComplete='off' placeholder='enter your password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
  </form>
  </>


  )
}
export default App


