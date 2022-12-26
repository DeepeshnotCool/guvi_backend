const express = require("express");
require('dotenv').config();
require("./database");


const cors = require('cors');

const User = require("./model/user");
const userRouter = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
