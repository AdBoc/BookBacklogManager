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
        filePath: { type: String },
        currentReadsStatus: {
            status: { type: Boolean },
            date: { type: Date },
            pages: { type: Number }
        }
    }]
})

export default mongoose.model("booksList", BooksListSchema);