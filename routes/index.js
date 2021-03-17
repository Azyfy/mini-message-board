var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "I am dancing!",
    user: "Pengu-san",
    added: new Date()
  },
  {
    text: "Dancing penguins!",
    user: "Its me",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

// New message form
router.get("/new", function(req, res, next) {
  res.render("form");
});

// post
router.post("/new", function(req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()

  });

  res.redirect("/");
});

module.exports = router;
