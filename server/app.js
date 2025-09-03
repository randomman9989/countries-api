const express = require("express");
const cors = require("cors");

const countryRouter = require("./routers/countries");
const logger = require("./middleware/logger");

const app = express();
app.use(express.json())
app.use(cors());
app.use(logger);

app.use("/countries", countryRouter)

// DONE index: GET - countries/ (SELECT)
// DONE show: GET - countries/:param/ (SELECT)
// DONE create: Post - countries/ (INSERT)
// update: PUT/PATCH - countries/:param/ (UPDATE)
// destroy: DELETE - countries/:param/ (DELETE)
// CRUD - from all of the above

module.exports = app;