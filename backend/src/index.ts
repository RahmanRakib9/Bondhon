import express from "express";
import cors from 'cors';
import rootRouter from './routes/rootRoute'


const app = express();

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello from bondhon!")
})
app.use('/api/v1',rootRouter);

app.listen(3000);