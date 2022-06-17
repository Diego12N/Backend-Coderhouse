const socket = io();
const nameImput = document.getElementById("nombre");
const messageInput = document.getElementById("mensaje");
const chat = document.getElementById("messages");

const sendMessage = () => {
	if (!nameImput.value) {
		return alert("Debe ingresar un nombre");
	}

	nameImput.disabled = true;

	const message = {
		nombre: nameImput.value,
		text: messageInput.value,
	};

	socket.emit("incomingMessage", message);
	//Dejo el blanco los campos del input:
	messageInput.value = "";

	messageInput.focus();
};

socket.on("chat", (message) => {
	const texto = message
		.map((mensaje) => {
			return `
        <div> 
            <strong>${mensaje.nombre}</strong>
            <em>${mensaje.text}</em>
        </div>
        `;
		})
		.join(" ");

	chat.innerHTML = texto;
});

socket.on("usersList", (users) => {
	const liUses = Object.values(users)
		.map((user) => {
			return `
        <li class="m-1 border-botton">
            <strong>
            ${user}
            </strong>
        </li>
        `;
		})
		.join(" ");

	document.getElementById("users-list").innerHTML = liUses;
});

socket.on("changeName", () => {
	nameImput.disabled = false;
	return alert("Nombre en uso");
});

/* socket.on("chat", (message) => {
	const fragment = document.createDocumentFragment();
	const texto = message.map((mensaje) => {
		const div = document.createElement("div");
		const strong = document.createElement("strong");
		const em = document.createElement("em");

		strong.innerText = `${mensaje.nombre}`;
		em.innerText = `${mensaje.text}`;

		div.appendChild(strong);
		div.appendChild(em);

		return div;
	});
	const textoChat = JSON.stringify(texto);

	console.log(fragment);
	chat.innerHTML = textoChat;
});
 */
