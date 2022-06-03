const routes = require("express").Router();
const moduleContenedor = require("../helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");

routes.get("/", (req, res) => {
	res.send("Ruta api");
});

routes.get("/products", async (req, res) => {
	const data = await contenedor.getAll();
	if (!data) {
		return res.send("No existe ningun archivo en la ruta indicada");
	}
	res.send(data);
});

routes.get("/products/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	const data = await contenedor.getById(id);
	res.send(data);
});

module.exports = routes;
