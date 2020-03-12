var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/control', function (req, res) {
    res.sendFile(__dirname + '/control.html');
});
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('speed', function (msg) {
        console.log('speed: ' + msg);
        io.emit("speed", msg);
    });
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});