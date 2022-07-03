const routes = require("express").Router();
const moduleContenedor = require("../helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");
const {
	getProducts,
	saveProducts,
	modifyProduct,
} = require("../helpers/routesHelpers");

const userAdmin = false;

function authorizedAdmin(req, res, next) {
	if (!userAdmin) {
		return res.json({
			error: -1,
			description: `route ${req.originalUrl} metodo ${req.method} no autorizado`,
		});
	}

	next();
}

routes.get("/:id?", async (req, res) => {
	// ? indica que el parametro es condicional, por lo que puede venir o no.
	const id = parseInt(req.params.id);
	const products = await getProducts(id);
	res.send(products);
});

routes.post("/", authorizedAdmin, (req, res) => {
	let newProduct = saveProducts(req);

	res.send(newProduct);
});

routes.put("/:id", authorizedAdmin, async (req, res) => {
	const id = parseInt(req.params.id);
	modifyProduct(req.body, res, id);
});

routes.delete("/:id", authorizedAdmin, async (req, res) => {
	const id = parseInt(req.params.id);

	const data = await contenedor.deleteById(id);

	res.send(data);
});

module.exports = routes;
