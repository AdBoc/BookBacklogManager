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
    // const found = await BooksList.findOne({ books: { _id: "5efe090de9a9852704ff35d8" } });
  }
}

const booksRoutes = new BooksRoutes();
export default booksRoutes;
//edit book