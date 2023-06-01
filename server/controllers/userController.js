import { User } from '../models/user.js';

class UserController {
    async create(req, res) {
        // const { name, phone } = req.body;
        // const user = new User({ name, phone });
        // user.save();
        // return res.json(user);
        try {
            const { name, phone } = req.body;

            const user = new User({ name: name, phone: phone });
            user.save();
            return res.json('create');
        } catch (error) {
            console.log(error);
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
