const login=(req,res,next)=>{
    const {token} =req.cookies
    console.log(token)
    next()
}

module.exports = {login}