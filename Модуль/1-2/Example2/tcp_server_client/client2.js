
var net = require('net');

var client = new net.Socket({ allowHalfOpen: false
});
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server, it is client 2!\r\n');
	client.end();
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('error', function(error) {
	console.log('error:'+error.toString());
});

client.on('close', function() {
	console.log('Connection closed');
});