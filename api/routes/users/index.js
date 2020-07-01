import { Router } from 'express';
import userRoutes from './routes';
const router = new Router();

router.post('/addBook', userRoutes.createBook);
router.post('/create', userRoutes.createUser);

export const users = router;