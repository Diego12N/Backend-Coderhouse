const socket = io();

const sendCharacter = (e) => {
	// emit(evento, argumentos) envio los valores del evento al backend
	console.log(e.value);
	socket.emit("caracter", e.value);
};
