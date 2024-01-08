import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Home = ()=>{
const navigate = useNavigate();
axios.get('http://localhost:3000/api/home')
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
return (
    <>
    
    <div>
        <h2>Home Page</h2>
        <button onClick={() =>{navigate('/about')}}>about</button>
    </div>
    </>
)}

export default Home
