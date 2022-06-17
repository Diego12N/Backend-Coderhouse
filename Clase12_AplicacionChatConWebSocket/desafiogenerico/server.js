const express = require("express");
const app = express();
const PORT = 8080;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

const chat = [];
const users = [];

//Chanel recibe la informacion del socket que se conecto.
io.on("connection", (channel) => {
	//Cada vez que un nuevo usario se conecta ve el historial del chat:
	emitir();
	sendUsers();

	channel.on("incomingMessage", (message) => {
		//enviar los datos a todos los clientes usando io y no channel que solo representa al cliente.
		users.indexOf(message.nombre) === -1 ? null : channel.emit("changeName");
		chat.push(message);
		users.push(message.nombre);
		emitir();
		sendUsers();
	});
});

const emitir = () => io.sockets.emit("chat", chat);
const sendUsers = () => io.sockets.emit("usersList", users);

server.listen(process.env.PORT || PORT, () => {
	console.log("Server Funcionado");
});
