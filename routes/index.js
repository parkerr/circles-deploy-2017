var express = require('express');
var router = express.Router();

var ctrlNicknames = require('../controllers/nicknames');

//Nicknames
router.get('/nicknames', ctrlNicknames.getAllNicknames);
router.get('/nicknames/:nickname', ctrlNicknames.getOneNickname);
router.put('/nicknames/:nickname', ctrlNicknames.updateOneNickname);

module.exports = router;
