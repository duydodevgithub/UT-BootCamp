var http = require('http');

function handleRequest1(req,res){
  res.end("Silver is a good girl"+ req.url);
}

function handleRequest2(req,res){
  res.end("Spider-man wasn't a great movie. It really, really was probbaly best described as mediocrity incarnate."+ req.url);
}
var server = http

  .createServer(function(req,res){
  res.end("Silver is a good girl"+ req.url);
  })

  .listen(7000,function(){
  console.log('server 1 ran');
  });

var server2= http.createServer(handleRequest2).listen(7500,function(){
  console.log('server 2 ran');

});
// server1.listen(7000)
// server2.listen(7500)
