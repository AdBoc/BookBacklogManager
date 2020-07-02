import User from './model';
import BooksList from '../booksList/model';
import { createToken } from '../../services/jwt';

class UserRoutes {
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);
      await BooksList.create({ userId: user._id })
      res.status(201).end();
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({ message: 'Email or password is wrong' });
      } else {
        return res.status(400).json({ message: err });
      }
    }
  }

  async login({ user }, res) {
    if (user) {
      const token = createToken(user);
      return res.status(200).json({ token });
    }
    return res.status(404).end();
  }

  async protectedRoute(req, res) {
    res.status(200).json({ message: "it just works" }); // console.log(user.id);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes;

// await BooksList.create({
//   userId: 'aaa',
//   books: {
//     id: "dadasadzx",
//     title: "Zbrodnia i Kara",
//     author: "Fidor Dostojewski",
//     year: "1866",
//     pages: "504",
//     type: "Fiction",
//     status: "On Backlog",
//     dateCreated: "2020-06-17T18:32:37.468Z",
//   }
// });