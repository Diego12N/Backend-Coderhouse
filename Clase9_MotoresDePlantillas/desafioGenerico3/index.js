//Libreria de Handlebars: npm install express-handlebars

const express = require("express");
const app = express();
const PORT = 8080;
const {engine} = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
	const datos = {
		nombre: "Juan",
		apellido: "Garcia",
		edad: 35,
		email: "juan@gmail.com",
		telefono: "1315165416",
	};

	res.render("datos", datos); //(vista, options)
});

app.listen(PORT, () => {
	console.log("Server Hanblebars Funcionando");
});
