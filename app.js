const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

const publicDirectory = path.join(__dirname, "./public")
app.use(express.static(publicDirectory));

app.set("view engine", "ejs");

app.use("/", require("./routes/pages"));





app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
