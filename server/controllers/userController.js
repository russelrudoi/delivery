import { ObjectId } from 'mongodb';
import { User } from '../models/user.js';

class UserController {
    async create(req, res) {
        try {
            const { orderDate, name, phone, email, address, meals } =
                await req.body;

            const user = new User({
                orderDate,
                name,
                phone,
                email,
                address,
                meals
            });

            user.save();
        } catch (error) {
            return res.status(500).send('Failed to create an order');
        }
    }

    async getOne(req, res) {
        const user = await User.find({ name: 'Igor' });
        console.log(user[0]);
        const { name, phone, image } = user[0];
        let nameImg = image.match(/\/([^\/?#]+)[^\/]*$/);
        // let nameImg = 23;

        const userData = {
            name,
            phone,
            image: `http://localhost:5000/image/${nameImg[1]}`
        };
        return res.status(200).json({
            code: 200,
            message: 'info',
            data: userData
        });
    }
}

export default new UserController();
