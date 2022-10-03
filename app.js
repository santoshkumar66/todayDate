const express = require("express");

const app = express();

const date = app.get("/", (request, response) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  response.send(`${day}-${month}-${year}`);
});

module.exports = date;
app.listen(3000);
