import { Router } from 'express';
import userRoutes from './routes';
import { authenticate, verifyToken } from '../../middlewares';

const router = new Router();

router.post('/create', userRoutes.createUser);
router.post('/login', authenticate, userRoutes.login);
router.get('/protected', verifyToken, userRoutes.protectedRoute);

export const users = router;