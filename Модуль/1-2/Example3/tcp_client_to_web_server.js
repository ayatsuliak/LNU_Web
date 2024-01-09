
var net = require('net');

var client = new net.Socket({ allowHalfOpen: false
});
client.connect(80, '127.0.0.1', function() {
	console.log('Connected');
	client.write('GET / HTTP/1.1\r\n Host: localhost\r\n\r\n');
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