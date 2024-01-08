const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/user')

router.get('/display',async(req,res)=>{
    try {
        const data = await User.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
});

router.post('/', async(req,res)=>{
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

router.get('/home', (req,res) =>{
    res.json({message:"hello"})
})

module.exports = router