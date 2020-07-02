import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
})

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

UserSchema.methods = {
  async authenticate(password) {
    const valid = await bcrypt.compare(password, this.password);
    return valid ? this : false;
  }
}

export default mongoose.model("user", UserSchema);