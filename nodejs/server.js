var WebSocketServer = new require('ws');

var webSocketServer = new WebSocketServer.Server({
  port: 8081
});


webSocketServer.on('connection', function(ws) {

  console.log("новое соединение");

  ws.on('message', function(message) {
    console.log('получено сообщение');
  });

  ws.on('close', function() {
    console.log('соединение закрыто');
   });


});