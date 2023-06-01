import { Router } from 'express';
import UserController from '../controllers/userController.js';

const userRouter = new Router();

userRouter.get('/', UserController.getOne);
userRouter.post('/', UserController.create);

export default userRouter;
