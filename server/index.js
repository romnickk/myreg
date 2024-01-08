const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./model/user')
const routes = require('./api/userRoute')

const app = express();
app.use(cors(
    {
        origin:["https://myreg-chi.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use(express.json());
app.use('/api' , routes)

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/reg')






const port = 3000;
app.listen(port, ()=>{
    console.log(`running at port ${port}`)
})
