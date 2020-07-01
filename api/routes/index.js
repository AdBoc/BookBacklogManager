import { Router } from 'express';
import { users } from './users';

const router = Router();
router.use('/user', users);

export default router;