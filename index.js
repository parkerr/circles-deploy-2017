var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


