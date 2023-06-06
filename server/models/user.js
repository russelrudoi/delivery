import { ObjectId } from 'mongodb';
import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema({
    orderDate: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    meals: [
        {
            name: String,
            _id: ObjectId,
            price: Number,
            image: String,
            quantity: Number
        }
    ]
});

export const User = model('User', userSchema);
