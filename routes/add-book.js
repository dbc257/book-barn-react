let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.post("/", (req, res) => {
  let imageURL = req.body.imageURLTextBox;
  let title = req.body.titleTextBox;
  let genre = req.body.genreTextBox;
  let publisher = req.body.publisherTextBox;
  let year = req.body.yearTextBox;

  let product = models.Book.build({
    imageURL: imageURL,
    title: title,
    genre: genre,
    publisher: publisher,
    year: year,
  });
  console.log(product);
  product.save().then(() => {
    res.send({ message: "Book added." });
  });
});

module.exports = router;
