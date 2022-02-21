const UserModel = require('../model/usersModel')

class UserService {
    async createUser(userData){
        return await UserModel.create(userData)
    }
}
module.exports = UserService