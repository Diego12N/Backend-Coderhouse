const express = require("express");
const app = express();
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

routes.post("/products", async (req, res) => {
	const {title, price, thumbnail} = req.body;
	const objeto = {title, price, thumbnail};
	const data = await contenedor.save(objeto);
	res.send(data);
});

routes.put("/products/:id", async (req, res) => {
	const idParams = parseInt(req.params.id);
	const {title, price, thumbnail} = req.body;
	const obj = {title, price, thumbnail, id: idParams};

	let productUpdated = await contenedor.save(obj);

	res.send(productUpdated);
});

routes.delete("/products/:id", async (req, res) => {
	const idParams = parseInt(req.params.id);
	const deletedProduct = await contenedor.deleteById(idParams);
	const data = await contenedor.readFile();

	res.send(data);
});

module.exports = routes;
