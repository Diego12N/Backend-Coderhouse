const routes = require("express").Router();
const moduleContenedor = require("../helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");
const {
	getProducts,
	saveProducts,
	modifyProduct,
} = require("../helpers/routesHelpers");

routes.get("/:id?", async (req, res) => {
	const id = parseInt(req.params.id);
	const products = await getProducts(id);
	res.send(products);
});

routes.post("/", (req, res) => {
	let newProduct = saveProducts(req);

	res.send(newProduct);
});

routes.put("/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	modifyProduct(req.body, res, id);
});

routes.delete("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	const data = await contenedor.deleteById(id);

	res.send(data);
});

module.exports = routes;
