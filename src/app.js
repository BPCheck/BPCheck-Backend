const express = require('express');
const { sequelize } = require("./models");
const logger = require("morgan");
const jwt = require('jsonwebtoken');

const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use("/", require("./routes"));

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.set("jwt-secret", "" + process.env.JWT_SECRET);

sequelize.sync();

app.listen(3000, () => {
  console.log("server on");
});