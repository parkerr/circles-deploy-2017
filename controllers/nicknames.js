var mongoose = require('mongoose');
var nicknames = mongoose.model('Nickname');


module.exports.getAllNicknames = function(req, res){
  nicknames.find().exec(function(err, result){
    
    if(!result.length){
      
      sendJsonResponse(res, 404, {"message" : "ERROR: no nicknames found"});
      return
      
    } else if(err){
      
      sendJsonResponse(res, 404, err);
      return
    }
    sendJsonResponse(res, 200, result);
  });
  
};


// This will get the one nickname.
// If the nickname doesnt exist it will be created and returned
module.exports.getOneNickname = function(req, res) {
  if (req.params && req.params.nickname){
    nicknames.find({nickname : req.params.nickname}).exec(function(err, result){
    //As the search is not by id then an array is returned
    let nickname = result[0];
      if(!nickname.length){
          //This nickname does not exist so lets create a new one
          // Return in here so it doesnt send default response
          createNickname(res, req.params.nickname)
          return
	  } else if(err){
          sendJsonResponse(res, 404, err);
          return
      }
      sendJsonResponse(res, 200, nickname);
    });
  } else {
    sendJsonResponse(res, 404, {"message" : "ERROR: No nickname in request"});
  }    
};





module.exports.updateOneNickname = function(req, res) {
    if (req.params && req.params.nickname){
      nicknames.find({nickname : req.params.nickname}).exec(function(err, result){
      let nickname = result[0];
        if(!nickname.length){
            //This nickname does not exist so send an error
            sendJsonResponse(res, 404, {"message" : "ERROR: Nickname does not exist"});
            return
  	      } else if(err){
            sendJsonResponse(res, 404, err);
            return
          }
         //This is where we issue the update 
         updateNickname(res, req, nickname)
      });
    } else {
      sendJsonResponse(res, 404, {"message" : "ERROR: No nickname in request"});
    }        
};

// Helper function to create a new nickname
var updateNickname = function(res, req, nickname){
    nickname.stones = req.body.stones;
    nickname.showHalves = req.body.showHalves;
    nickname.poundsLost = req.body.poundsLost;
    nickname.save(function(err, nickname){
      if(err){
        console.log(err);
      }else{
        console.log("Nickname Updated")
        sendJsonResponse(res, 200, nickname);
      }
    });
};


// Helper function to create a new nickname
var createNickname = function(res, nickname){
  nicknames.create({nickname: nickname,stones: 1, showHalves:false, poundsLost:0 }, function(err, nickname){
    sendJsonResponse(res, 200, nickname);
  });
};

// Helper function to send response
var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};



