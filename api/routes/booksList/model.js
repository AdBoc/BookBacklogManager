const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksListSchema = new Schema({
    userId: { type: String, required: true },
    books: [{
        id: { type: Number },
        title: { type: String },
        author: { type: String },
        year: { type: Number },
        pages: { type: String },
        type: { type: String },
        status: { type: String },
        dateCreated: { type: Date },
        // pdf: {
        //     path: { type: String}
        // }
    }]
})

export default mongoose.model("booksList", BooksListSchema);