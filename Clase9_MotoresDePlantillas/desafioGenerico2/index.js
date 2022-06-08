const {assert} = require("console");
const express = require("express");
const app = express();
const PORT = 8080;
const fs = require("fs").promises;

app.use(express.static("public"));

// Crea nuestro motor propio de plantillas (extencion, logica)
app.engine("cte", async (filePath, options, callback) => {
	try {
		const file = await fs.readFile(filePath);
		const render = file
			.toString()
			.replace("^^titulo$$", options.titulo)
			.replace("^^mensaje$$", options.mensaje)
			.replace("^^autor$$", options.autor)
			.replace("^^version$$", options.version);

		return callback(null, render);
	} catch (err) {
		return callback(new Error(err));
	}
});
app.set("views", "./views"); // Especifica la carpeta de plantillas
app.set("view engine", "cte"); // Registra el motor de plantillas

app.get("/cte1", (req, res) => {
	const datos = {
		titulo: "Titulo nuevo",
		mensaje: "Mensaje nuevo",
		autor: "Autor nuevo",
		version: "1.2.1",
	};

	res.render("index", datos); //(vista, options)
});

app.listen(8080, (req, res) => {
	console.log("Server funcionando");
});
