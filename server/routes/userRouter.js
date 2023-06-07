import { Router } from 'express';
import UserController from '../controllers/userController.js';

const userRouter = new Router();

userRouter.post('/', UserController.create);
userRouter.get('/', UserController.getOne);

export default userRouter;
