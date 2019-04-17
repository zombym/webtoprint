var WebSocketServer = new require('ws');
const { exec } = require('child_process');
const fs = require('fs');

var webSocketServer = new WebSocketServer.Server({
  port: 8081
});


webSocketServer.on('connection', function(ws) {

  console.log("новое соединение");

  ws.on('message', function(message) {
    
	
  console.log('получено сообщение');
  console.log(message);
  fs.writeFileSync(message, "files write!")
	//exec("lp /home/ubuntu/devjs/1/webtoprint/data/test.pdf", function (error, stdout, stderr) {
	});


  ws.on('close', function() {
    console.log('соединение закрыто');
    
   });


});
