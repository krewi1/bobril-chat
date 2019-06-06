const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server);

app.use(cors());

server.listen(3000);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	socket.join("defRoom");
	socket.on('message', function (data) {
		socket.nsp.to("defRoom").emit("message", data);
	});
});