const express = require('express')
const router = express.Router()

//servicios
const UserService = require('../services/userService')

const user =(app)=>{
    const userService = new UserService()
    app.use('/user',router)
    
    router.get('/',(req,res)=>{
        return res.send("User")
    })
    router.post('/create',(req,res)=>{
        console.log(req.body)
        return res.send("User")
    })
    
}

module.exports= user