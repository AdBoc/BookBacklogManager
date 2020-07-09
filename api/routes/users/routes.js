import User from './model';
import BooksList from '../booksList/model';
import { createToken } from '../../services/jwt';
import fs from 'fs';
const rootPath = process.cwd();

class UserRoutes {
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);
      await BooksList.create({ userId: user._id });
      fs.mkdirSync(`${rootPath}/dist/${user._id}`, err => { //mkdir is synchronous
        return res.status(400).json({ message: err })
      });
      res.status(201).end();
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({ message: err });
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
}

const userRoutes = new UserRoutes();
export default userRoutes;