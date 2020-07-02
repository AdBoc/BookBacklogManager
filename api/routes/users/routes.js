import User from './model';

class UserRoutes {
  async createUser({ body }, res, next) {
    try {
      const user = await User.create(body);
      res.status(201).end()
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({
          message: 'Email or username already registered'
        })
      }
      next(err);
    }
  }

  async login(req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).end();9
    res.status(200).end();
  }

  async createBook({ body }, res) {
    try {
      await User.findByIdAndUpdate('5efcd98efd12f535e0a072a6', { $push: { books: body } });
      res.status(201).end();
    } catch (err) {
      console.log(err);
      res.status(400).end();
    }
  }

  //delete book
  //edit book
  //login
}

const userRoutes = new UserRoutes();
export default userRoutes;