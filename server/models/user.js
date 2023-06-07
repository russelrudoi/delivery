import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    _id: ObjectId,
    orderId: String,
    orderDate: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    total: String,
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
