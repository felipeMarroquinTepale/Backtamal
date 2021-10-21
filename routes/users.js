var express = require('express');
var router = express.Router();
const usersService = require('../controllers/usersService')



router.post('/userValidate/:User/:Password',usersService.userValidate);


module.exports = router;
