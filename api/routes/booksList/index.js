import { Router } from 'express';
import booksRoutes from './routes';
import { verifyToken } from '../../middlewares';

const router = new Router();

router.post('/addBook', verifyToken, booksRoutes.addBook);
router.get('/show', verifyToken, booksRoutes.getBooks);
router.post('/delete', verifyToken, booksRoutes.deleteBook);
router.patch('/update', verifyToken, booksRoutes.updateBook);
router.post('/download', verifyToken, booksRoutes.downloadBook);
router.post('/upload', verifyToken, booksRoutes.uploadBook); //upload.single() at the end

export const books = router;