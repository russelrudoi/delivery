import { Meal } from '../models/meal.js';

class MealController {
    async getOne(req, res) {
        // Meal.find({ namePlace: 'Mac Donny' })
        //     .then(user => {
        //         return user;
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        const meal = await Meal.find({ namePlace: 'Mac Donny' });
        return res.json(meal);
    }
}

export default new MealController();
