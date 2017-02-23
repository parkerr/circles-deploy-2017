var express = require('express');
var router = express.Router();

var ctrlNicknames = require('../controllers/nicknames');

//Nicknames
router.get('/nicknames', ctrlSpaces.getAllNicknames);
router.get('/nicknames/:nickname', ctrlSpaces.getOneNickname);
router.put('/nicknames/:nickname', ctrlSpaces.updateOneNickname);

module.exports = router;
