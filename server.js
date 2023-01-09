const express = require('express')
const connect= require("./db/db.js");
const authRouter = require('./routes/authRouter');
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/auth", authRouter)
app.get('/', (req,res) => res.send('Hello'))

const PORT= 8080;

app.listen(PORT, () => {console.log('Server started on http://localhost:8080')})