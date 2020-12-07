const express = require("express");
const app = express();
const cors = require("cors");
const models = require("./models");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();
app.use(cors());
// app.use(express.urlencoded());

// const session = require("express-session");
const addbookRouter = require("./routes/add-book");
// const bookdetailRouter = require("./routes/bookdetails");
const booksRouter = require("./routes/books");
const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");

app.use(express.static("js"));
app.use(express.static("css"));

var bcrypt = require("bcryptjs");

app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/add-book", addbookRouter);
app.use("/books", booksRouter);

// app.get("/api/books", (req, res) => {
//   let books = [{ bookId: 1, name: "Atomic Habits" }];
//   res.json(books);
// });

app.get("/signout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
