let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  models.Book.findAll().then((books) => {
    console.log(books);
    res.send(books);
  });
});

module.exports = router;
