import { Router } from 'express';
import booksRoutes from './routes';
import { verifyToken } from '../../middlewares';

const router = new Router();

router.post('/addBook', verifyToken, booksRoutes.addBook);
router.get('/show', verifyToken, booksRoutes.getBooks);
router.post('/delete', verifyToken, booksRoutes.deleteBook);
router.patch('/edit', verifyToken, booksRoutes.updateBook);
router.post('/download', verifyToken, booksRoutes.downloadBook);
router.post('/upload', verifyToken, booksRoutes.uploadBook); //upload.single() at the end
router.post('/deleteFile', verifyToken, booksRoutes.deleteFile);
router.post('/setCurrentPages', verifyToken, booksRoutes.addPages);
router.post('/setDeadline', verifyToken, booksRoutes.setDeadline);
router.post('/sendStatus', verifyToken, booksRoutes.setStatus);

export const books = router;