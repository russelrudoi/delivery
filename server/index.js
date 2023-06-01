import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import { Meal } from './models/meal.js';
import { User } from './models/user.js';
import router from './routes/index.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/image', express.static('static/image'));

const start = async () => {
    try {
        mongoose
            .connect(process.env.URL_DB, { useUnifiedTopology: true })
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

// const client = new MongoClient('mongodb://localhost:27017/', {
//     useUnifiedTopology: true
// });

// async function run() {
//     try {
//         await client.connect();
//         console.log('connect');
//     } catch (e) {
//         // Ensures that the client will close when you finish/error
//         console.log(e);
//     }
// }
// run();
