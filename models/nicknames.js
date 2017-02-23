var mongoose = require('mongoose');

var spaceSchema = new mongoose.Schema({
  number: Number,
  owner : String,
  availableOn : [Date]
});


mongoose.model('Space', spaceSchema);
