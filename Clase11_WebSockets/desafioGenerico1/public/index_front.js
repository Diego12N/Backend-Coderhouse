const socket = io();

const sendCharacter = (e) => {
	// emit(evento, argumentos) envio los valores del evento al backend
	console.log(e.value);
	socket.emit("caracter", e.value);
};

document.getElementById("enviar").addEventListener("click", () => {
	const input = document.getElementById("mensajes");
	const frase = input.value;
	socket.emit("frases", frase);

	input.value = "";
});

socket.on("respuestas", (frase) => {
	document.getElementById("caracteres").innerText = frase;
});

socket.on("mensajeria", (mensajes) => {
	console.log(mensajes);

	let texto = "";
	mensajes.forEach((el) => {
		texto += /* `Socket ${el.socketId} Mensaje */ `<br> ${el.mensaje}`;
	});

	document.getElementById("mensajeria").innerHTML = texto;
});
