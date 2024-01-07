const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./model/user')

const app = express();
app.use(cors(
    {
        origin:["https://myreg-chi.vercel.app/home"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use(express.json());

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/reg')

app.post('/register', async(req,res)=>{
    const {name,username,password} = req.body;
    const check = await User.findOne({username});

    try {
        if(check){
            res.status(500).json('user exist')
        }else{
            const saveUser = new User({name,username,password});
            await saveUser.save();
        }
    } catch (error) {
        console.log(error)
    }
})

app.get('/display', async(req,res)=>{

    try {
       
        const data = await User.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`running at port ${port}`)
})
