import { Router } from 'express';
import mealRouter from './mealRouter.js';
import userRouter from './userRouter.js';

const router = new Router();

router.use('/meal', mealRouter);
router.use('/user', userRouter);

export default router;
