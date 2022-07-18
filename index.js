const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { port, mongoURL } = require('./config.js')
const path = require('path')
const objectsRouter = require("./routes/Objects.js");
const dotenv = require("dotenv");

dotenv.config()


app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))


mongoose.connect(process.env.mongoURL, {
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb database is connected'))
    .catch((err) => console.log(err))

app.get("/" , (req , res) => {
    res.send("hello")
})

app.use('/api/objects', objectsRouter)

app.listen(port , () => {
    console.log(`server is listening on  ${port}`)
})