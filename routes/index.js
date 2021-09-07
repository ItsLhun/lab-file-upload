const router = require('express').Router();
const User = require('../models/User.model');
const Post = require('../models/Post.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
