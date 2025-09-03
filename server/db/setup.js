// External dependency imports
require("dotenv").config();

// Internal JS imports
const fs = require("fs");

// Imports defined by myself
const db = require("./connect");
const sql = fs.readFileSync("./server/db/countries.sql").toString();

db.query(sql)
  .then((data) => {
    db.end();
    console.log("Setup complete");
  })
  .catch((error) => console.log(error));
