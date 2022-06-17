const express = require("express");
const {Server: HttpServer} = require("http");
const {Server: IOServer} = require("socket.io");
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const PORT = 8080;

//Socket IO requiere que tambien sea inicializado en el cliente, es decir, el archivo estatico http debe incluir el script:
/* 
<script src="https://cdn.socket.io/4.5.0/socket.io.min.js" integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k" crossorigin="anonymous"></script>
 */

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

let mensajes = [];

//Socket inicializado:
io.on("connection", (channel) => {
	channel.on("caracter", (argumento) => {
		io.sockets.emit("respuestas", argumento);
	});

	channel.on("frases", (frase) => {
		mensajes.push({/* socketId: channel.id, */ mensaje: frase});
		io.sockets.emit("mensajeria", mensajes);
		console.log(mensajes);
	});

	io.sockets.emit("mensajeria", mensajes);
});

httpServer.listen(PORT, () => {
	console.log("Server Funcionando");
});
