const { mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 255,
  },

  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 1024,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    default: null,
    maxLength: 255,
  },
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserTypes",
    default: "663dfebba2ede177e6885e42",
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
