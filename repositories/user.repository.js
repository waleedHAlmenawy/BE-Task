const { options } = require("joi");
const UserModel = require("../models/user.model");
var ObjectId = require("mongoose").Types.ObjectId;

class UserRepository {
    async getUser(userId) {
        return await UserModel.findOne({ _id: userId });
    }

    async updateUser(userId, val) {
        return await UserModel.updateOne({ _id: userId }, val);
    }
}

module.exports = UserRepository;
