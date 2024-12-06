import express from "express";
import cors from 'cors';
import rootRouter from './routes/rootRoute'
import connectDB from './db';

const app = express();

/** Application Regular Middlewares */
app.use(cors());
app.use(express.json());
connectDB();

/** Health check Route */
app.get('/', (req, res) => {
    res.send("hello from Bondhon!")
})

/** Application Routes */
app.use('/api/v1', rootRouter);

app.listen(3000);