import { Router } from 'express';
import { users } from './users';
import { books } from './booksList';

const router = Router();
router.use('/user', users);
router.use('/books', books);

export default router;