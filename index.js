import express from 'express';
import {port} from "./config.js";
import dotenv from 'dotenv'
import mongoose from "mongoose";
const app = express();
dotenv.config()

mongoose.connect(process.env.mongoURL, {
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb database is connected'))
    .catch((err) => console.log(err))

app.get("/" , (req , res) => {
    res.send("hello")
})

app.listen(port , () => {
    console.log(typeof process.env.mongoURL)
    console.log(`server is listening on  ${port}`)
})