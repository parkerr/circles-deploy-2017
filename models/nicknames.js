var mongoose = require('mongoose');

var nicknameSchema = new mongoose.Schema({
  nickname: String,
  stones : Number,
  showHalves : Boolean,
  poundsLost : Number
});


mongoose.model('Nickname', nicknameSchema);
