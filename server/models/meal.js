import { Schema, model } from 'mongoose';

const mealSchema = new Schema({
    namePlace: {
        type: String,
        required: true
    },
    meals: [{ name: String, price: Number, image: String }]
});

export const Meal = model('Meal', mealSchema);
