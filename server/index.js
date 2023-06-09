import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static(__dirname + '/public/'));

const start = async () => {
    try {
        mongoose
            .connect(
                'mongodb+srv://selezen:EGWSodzn03arU37R@cluster0.bcqudsg.mongodb.net/delivery',
                { useUnifiedTopology: true }
            )
            .then(res => {
                console.log('connect to DB');
            })
            .catch(error => console.log(error));

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();
