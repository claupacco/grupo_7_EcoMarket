var express = require('express');
var router = express.Router();
var controller = require("../controllers/userController")

/* GET users listing. */
router.get('/new', controller.create);
router.get('/login', controller.login);
router.post('/', controller.store);

module.exports = router;