var net = require('net');
var server = net.createServer(function (socket) {
    console.log('client connected');
    socket.on('data', function (data) {
        var textChunk = data.toString('utf8');
        console.log("receive from client: " + textChunk);
        socket.write("Hello client, I can hear You!");
    });
    socket.on('end', function () {
        console.log('client disconnected');
    });
});
server.listen(1337, '127.0.0.1');