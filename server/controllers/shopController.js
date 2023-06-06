import { Shop } from '../models/shop.js';

class ShopController {
    async getAll(req, res) {
        try {
            const shop = await Shop.find();
            return res.json(shop);
        } catch (error) {
            return res.status(500).send('Failed to retrieve product list');
        }
    }
}

export default new ShopController();
