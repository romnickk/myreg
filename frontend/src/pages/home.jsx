import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
const navigate = useNavigate();

return (
    <>
    
    <div>
        <h2>Home Page</h2>
        <button onClick={() =>{navigate('/about')}}>about</button>
    </div>
    </>
)}

export default Home