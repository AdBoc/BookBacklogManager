import BooksList from './model';
import path from 'path';
import { upload } from '../../services/multer';
import fs from 'fs';
const rootPath = process.cwd();


class BooksRoutes {
  async addBook(req, res) {
    try {
      let newBook = Object.assign({}, req.body);
      newBook.currentReadsStatus = {};
      newBook.currentReadsStatus.status = false
      await BooksList.findOneAndUpdate({ userId: req.user.id }, { $push: { books: newBook } });
      res.status(200).end();
    } catch (err) {
      console.log(err);
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
      fs.unlinkSync(rootPath + "\\dist\\" + req.user.id + "\\" + req.body._id + '.pdf');
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
      console.log(err);
    }
  }

  async updateBook(req, res) {
    const { oldBookData, newBookData } = req.body;
    if (newBookData)
      Object.keys(newBookData).map((value) => { oldBookData[value] = newBookData[value] });
    await BooksList.findOneAndUpdate({ userId: req.user.id, 'books._id': req.body.oldBookData._id }, { $set: { 'books.$': oldBookData } }).exec(); //, { safe: true, multi: true }
    res.status(200).end();
  }

  async uploadBook(req, res) {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
        res.status(400).end();
      }

      const bookId = req.files[0].fieldname;
      const bookFileName = req.files[0].filename;

      BooksList.findOne({ userId: req.user.id }).select({ books: { $elemMatch: { _id: bookId } } }).then((bookData) => {
        const book = bookData.books[0];
        book.filePath = bookFileName;
        bookData.save((err) => {
          if (err)
            console.log(err);
        })
      });
      res.status(200).end();
    });
  }

  async downloadBook(req, res) {
    try {
      res.download(path.join(rootPath, `\\dist\\${req.user.id}\\${req.body._id}.pdf`));
    } catch (err) {
      res.status(400).end();
    }
  }

  async deleteFile(req, res) {
    try {
      fs.unlinkSync(rootPath + "\\dist\\" + req.user.id + "\\" + req.body._id + '.pdf');
      res.status(200).end();
    } catch (err) {
      console.log(err);
      res.status(400).end();
    }
  }

  async addPages(req, res) {
    try {
      await BooksList.findOneAndUpdate({ userId: req.user.id, 'books._id': req.body._id }, { $set: { 'books.$.currentReadsStatus.pages': req.body.pages } });
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
    }
  }

  async setDeadline(req, res) {
    try {
      await BooksList.findOneAndUpdate({ userId: req.user.id, 'books._id': req.body._id }, { $set: { 'books.$.currentReadsStatus.date': req.body.deadline } });
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
    }
  }

  async setStatus(req, res) {
    try {
      await BooksList.findOneAndUpdate({ userId: req.user.id, 'books._id': req.body._id }, { $set: { 'books.$.currentReadsStatus.status': req.body.status } });
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
    }
  }
}

const booksRoutes = new BooksRoutes();
export default booksRoutes;

//na poczatku tworze folder id z nazwa uzytkownika
//do tego folderu zapisywane sa pliki danego usera 
// BooksList.findOneAndUpdate({ userId: req.user.id, 'books._id': bookId }, { "books.$.filePath": req.files[0].filename }); //filtered in second argument

// const { filePath } = book;// if (filePath) {//   const fileExists = fs.existsSync(rootPath + "\\dist\\" + req.user.id + "\\" + filePath); //must be checked or when deleted filepath properthy should be also deleted
// if (fileExists) //fs.unlinkSync(rootPath + "\\dist\\" + req.user.id + "\\\\" + filePath);// }
