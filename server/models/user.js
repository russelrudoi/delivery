import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: String,
    phone: String,
    image: String
});

export const User = model('User', userSchema);
