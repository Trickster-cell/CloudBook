const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// mongoose.model = {};
const User = mongoose.model("user", UserSchema);
// User.createIndexes();
module.exports = User;