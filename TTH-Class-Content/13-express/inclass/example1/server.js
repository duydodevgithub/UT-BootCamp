var http = require('http');

function handleRequest(req,res){
  res.end("Yo this thing works!"+ req.url);
}
var server = http.createServer(handleRequest;

var PORT = 8080;
server.listen(PORT, function(){
  console.log('youre running the server');

})
