import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';

const shopSchema = new Schema({
    _id: ObjectId,
    namePlace: String,
    meals: [{ name: String, _id: ObjectId, price: Number, image: String }]
});

export const Shop = model('Shop', shopSchema);
