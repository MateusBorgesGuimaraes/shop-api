const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

UserSchema.path('username').validate(async function (value) {
  const userCount = await mongoose.models.User.countDocuments({
    username: value,
  });
  return !userCount;
}, 'Este username já está em uso.');

UserSchema.path('email').validate(async function (value) {
  const emailCount = await mongoose.models.User.countDocuments({
    email: value,
  });
  return !emailCount;
}, 'Este email já está em uso.');

module.exports = mongoose.model('User', UserSchema);
