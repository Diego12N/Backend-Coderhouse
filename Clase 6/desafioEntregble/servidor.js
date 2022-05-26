const express = require("express");
const moduleContenedor = require("./contenedor");
const ruta = "./products.txt";
const app = express();
const PORT = 8080;

const contenedor = new moduleContenedor.contenedor(ruta);

function randomn(number) {
	let numberR = Math.floor(Math.random() * number) + 1;

	return numberR;
}

app.get("/productos", async (req, res) => {
	const data = await contenedor.readFile();
	res.send(data);
});

app.get("/productos/productoRandom", async (req, res) => {
	const file = await contenedor.getAll();
	const randomId = randomn(file.length);
	const data = await contenedor.getById(randomId);

	res.send(data);
});

app.listen(PORT, () => {});
