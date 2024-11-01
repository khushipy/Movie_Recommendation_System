const express = require("express");
const addMovie = require("./controllers/addMovie");

const app = express();

//routes

app.post("/api/movies", addMovie);

app.listen(8000, () => {
  console.log("Server started successfully");
});