import { Router } from 'express';
import userRoutes from './routes';
import { authenticate, verifyToken } from '../../middlewares';

const router = new Router();

router.post('/create', userRoutes.createUser);
router.post('/login', authenticate, userRoutes.login);

export const users = router;