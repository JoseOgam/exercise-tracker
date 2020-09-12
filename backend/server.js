const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
