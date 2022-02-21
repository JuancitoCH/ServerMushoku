const express = require('express')
const user = require('./routes/user')
const mushoku = require('./routes/mushoku')
const configV = require('./config/envVars')
const {connection:db} = require('./config/dbConnection')

const app = express()

//databaseconection
db()

//routes

user(app)
mushoku(app)

//url gets
app.get('/',(req,res)=>{
    return res.send("Server")
})

app.listen(configV.port,()=>{
    console.log("Server en Port")
    console.log("http://localhost:" + configV.port)
})

