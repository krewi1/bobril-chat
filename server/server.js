const express = require("express");
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server);

app.use(cors());

server.listen(3000);

app.use(express.static("dist"));

io.on('connection', function (socket) {
	socket.join("defRoom");
	socket.on('message', function (data) {
		socket.nsp.to("defRoom").emit("message", data);
	});
});