const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/db");
var exerciseRouter = require("./router/exercise");
var userRouter = require("./router/user");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(exerciseRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
