import { Router } from 'express';
import ShopController from '../controllers/shopController.js';

const shopRouter = new Router();

shopRouter.get('/', ShopController.getAll);

export default shopRouter;
