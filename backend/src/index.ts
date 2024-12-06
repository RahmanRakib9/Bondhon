import express from "express";

const app = express();


app.get('/',(req,res)=>{
    res.send("hello from bondhon!")
})

app.listen(3000);