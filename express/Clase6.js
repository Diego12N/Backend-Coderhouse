//npm init -y
//npm i express

// Endpoint son las rutas de la url /endpoint/endpoint

const express = require("express");
const moment = require("moment");
const app = express();
const PORT = 8080;

let visitas = 0;

app.get("/", (req, res) => {
	res.send("<h1>Pintando en el dom con express</h1>");
}); // Con el metodo get definimos la ruta que queremos escuchar.

app.get("/visitas", (req, res) => {
	visitas++;

	res.send(`Ha recibido un total de ${visitas} visitas.`);
});

app.get("/fyh", (req, res) => {
	res.json({fyh: moment().format("DD/MM/YYYY h:mm:s")});
});

app.listen(process.env.PORT || PORT, () => {
	console.log("Probando");
});
