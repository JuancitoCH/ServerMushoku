const express = require('express')
const router = express.Router()

const mushoku =(app)=>{
    
    app.use('/mushoku',router)
    
    router.get('/',(req,res)=>{
        return res.send("Mushoku")
    })
    
}

module.exports= mushoku