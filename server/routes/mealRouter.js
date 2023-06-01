import { Router } from 'express';
import MealController from '../controllers/mealController.js';

const mealRouter = new Router();

mealRouter.get('/', MealController.getOne);

export default mealRouter;
