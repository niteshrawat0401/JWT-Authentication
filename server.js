const express = require('express')
const connection= require("./db/db.js");
const authRouter = require('./routes/authRouter');
require('dotenv').config();
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/auth", authRouter)
app.get('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, async() => {
    await connection;
    console.log(`Server started on ${PORT}`)})