import { Router } from 'express';
import booksRoutes from './routes';
import { verifyToken } from '../../middlewares';

const router = new Router();

router.post('/addBook', verifyToken, booksRoutes.addBook);
router.get('/show', verifyToken, booksRoutes.getBooks);
router.get('/deleteBook', verifyToken, booksRoutes.deleteBook);

export const books = router;