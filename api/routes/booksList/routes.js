import BooksList from './model';

class BooksRoutes {
  async addBook(req, res) {
    try {
      await BooksList.findOneAndUpdate({ userId: req.user.id }, { $push: { books: req.body } });
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
    }
  }

  async getBooks(req, res) {
    const user = await BooksList.findOne({ userId: req.user.id })
    if (!user) return res.status(404).end();
    res.status(200).json(user.books)
  }

  async deleteBook(req, res) {
    try { //check for exceptions
      await BooksList.updateOne({ userId: req.user.id }, { $pull: { "books": { "_id": req.body } } }, { safe: true, multi: true });
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
      console.log(err);
    }
  }

  async updateBook(req, res) {

  }
}

const booksRoutes = new BooksRoutes();
export default booksRoutes;

// const result = await BooksList.find({}, { _id: req.user.id, books: { $elemMatch: { _id: "5efe090de9a9852704ff35d8" } } });
// console.log(result);

// const result = await BooksList.find({}, (err, res) => { console.log(res[0]._id) });

// const result = await BooksList.findOne({ userId: req.user.id }, (err, res) => {
//   let arrIndex;
//   res.books.map((element, i) => {
//     if (element._id == '5efe090de9a9852704ff35d8')
//       arrIndex = i;
//   })
//   res.books.splice(arrIndex, 1);
// });