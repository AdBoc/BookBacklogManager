import BooksList from './model';
import path from 'path';
const filePath = process.cwd();

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
    try {
      await BooksList.updateOne({ userId: req.user.id }, { $pull: { "books": { "_id": req.body } } }, { safe: true, multi: true });
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
      console.log(err);
    }
  }

  async updateBook(req, res) {
  }

  async uploadBook(req, res) {
    res.status(200).end();
  }

  async downloadBook(req, res) {
    try {
      res.download(path.join(filePath, '/dist/B2.pdf'));
    } catch (err) {
      res.status(400).end();
    }
  }
}

const booksRoutes = new BooksRoutes();
export default booksRoutes;
