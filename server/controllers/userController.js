import { ObjectId } from 'mongodb';
import { User } from '../models/user.js';

class UserController {
    async create(req, res) {
        try {
            const {
                orderDate,
                name,
                phone,
                email,
                address,
                meals,
                total,
                orderId
            } = await req.body;

            const user = new User({
                _id: new ObjectId(),
                orderDate,
                orderId,
                name,
                phone,
                email,
                address,
                total,
                meals
            });

            user.save();
        } catch (error) {
            return res.status(500).send('Failed to create an order');
        }
    }

    async getOne(req, res) {
        try {
            const user = await User.find(req.query);

            if (!user.length) {
                return res.status(500).send('User is not found');
            }
            console.log(user);
            return res.json(user);
        } catch (error) {
            return res.status(500).send('Failed to get user');
        }
    }
}

export default new UserController();
