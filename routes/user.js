const express = require('express')
const router = express.Router()
const {login} = require('../middlewares/auth')
//servicios
const UserService = require('../services/userService')

const user =(app)=>{
    const userService = new UserService()

    app.use('/user',router)

    //middleware

    
    router.post('/login',async(req,res)=>{

        return res.cookie('token',123,{
            httpOnly:true,
            secure:true,
            sameSite:'none'
        }).json({})
    })

    router.get('/',login,async(req,res)=>{
        const usersAll = await userService.getUsers()
        return res.json(usersAll)
    })
    router.post('/create',async(req,res)=>{
        console.log(req.body)
        const userCreated = await userService.createUser(req.body)
        return res.status(201).json(userCreated)
    })
    router.post('/delete/:id',async(req,res)=>{
        const {id}=req.params
        
        const userDeleted = await userService.deleteUser(id)
        return res.status(201).json(userDeleted)
    })
    router.post('/update/:id',async(req,res)=>{
        const {id}=req.params
        const data = req.body
        const userUpdated = await userService.updateUser(id,data)
        return res.status(201).json(userUpdated)
    })
    
}

module.exports= user