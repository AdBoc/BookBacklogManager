import { Router } from 'express';
import booksRoutes from './routes';
import { verifyToken } from '../../middlewares';
import { upload } from '../../services/multer';

const router = new Router();

router.post('/addBook', verifyToken, booksRoutes.addBook);
router.get('/show', verifyToken, booksRoutes.getBooks);
router.post('/delete', verifyToken, booksRoutes.deleteBook);
router.patch('/update', verifyToken, booksRoutes.updateBook);
router.get('/download', verifyToken, booksRoutes.downloadBook);
router.post('/upload', verifyToken, upload.any(), booksRoutes.uploadBook); //upload.single()

export const books = router;