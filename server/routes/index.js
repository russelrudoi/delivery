import { Router } from 'express';
import shopRouter from './shopRouter.js';
import userRouter from './userRouter.js';

const router = new Router();

router.use('/shop', shopRouter);
router.use('/user', userRouter);

export default router;
