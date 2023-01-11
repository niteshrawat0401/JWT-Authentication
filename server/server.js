const express = require("express");
const connection = require("./db/db.js");
const Router = require("./routes/routers");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", Router);
app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await connection;
  console.log(`Server started on ${PORT}`);
});
