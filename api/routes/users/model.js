const mongoose = require('mongoose');
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
    },
    books: [{
        title: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: Number },
        pages: { type: String },
        type: { type: String, required: true },
        status: { type: String, required: true },
        dateCreated: { type: Date, required: true }
    }]
})

export default mongoose.model("user", UserSchema);