var express = require('express');
var router = express.Router();

var ctrlSpaces = require('../controllers/spaces');

//spaces
router.get('/spaces', ctrlSpaces.getAllSpaces);
router.get('/spaces/:spacenumber', ctrlSpaces.getOneSpace);
router.put('/spaces/:spacenumber', ctrlSpaces.updateOneSpace);
router.put('/spaces/:spacenumber/makeAvailableOn/:date', ctrlSpaces.makeSpaceAvailable);

router.put('/spaces/:spacenumber/makeunAvailableOn/:date', ctrlSpaces.makeSpaceUnavailable);
//router.post('/spaces', ctrlSpaces.createNextSpace);

module.exports = router;
