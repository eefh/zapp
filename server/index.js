import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ 
    limit: "30mb", 
    extended: true 
}));
app.use(express.urlencoded({ 
    limit: "30mb", 
    extended: true
}));
app.use(cors());
app.use('/gaming-general', postRoutes);
const CONNECTION_URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 5000;
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("----[ MongoDB connection verified ]----");
});
mongoose.connect(CONNECTION_URL)
        .then(() => app.listen(PORT, () => console.log(`Server running on port ===> ${PORT}!`)))
        .catch((error) => console.log);