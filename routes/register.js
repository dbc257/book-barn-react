let express = require("express");
let router = express.Router();
let models = require("../models");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// POST route to register a new user account
router.post("/", (req, res) => {
  let username = req.body.usernameTextBox;
  let password = bcrypt.hashSync(req.body.passwordTextBox, 10);
  // console.log(username);
  // console.log(password);
  let user = models.User.build({ username: username, password: password });
  user.save().then(() => {
    res.send({ message: "Username registered." });
  });
});

module.exports = router;
