const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server);

app.use(cors());

server.listen(3000);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	socket.on('message', function (data) {
		console.log(data);
	});
});