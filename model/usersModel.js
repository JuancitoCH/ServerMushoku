const {mongoose} = require('../config/dbConnection')
const {Schema} = mongoose

const UserShema = new Schema({
    userName:String,
    password:String,
    userPhoto:String,
    rol:{type:Number,default:1}
})

const UserModel = mongoose.model('users',UserShema)
module.exports = UserModel