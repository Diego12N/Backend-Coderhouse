const moduleContenedor = require("./contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");

async function getProducts(id, res) {
	if (isNaN(id)) {
		const data = await contenedor.getAll();
		return res.send(data);
	} else {
		const data = await contenedor.getById(id);
		return res.send(data);
	}
}

async function saveProducts(req, res) {
	const {nombre, descripcion, código, foto, precio, stock} = req.body;

	const date = new Date();
	const timestamp = date.toLocaleString();

	const newProduct = {
		nombre,
		descripcion,
		código,
		foto,
		precio,
		stock,
		timestamp,
	};

	const data = await contenedor.save(newProduct);

	return res.send(data);
}

async function modifyProduct(req, res, id) {
	const {nombre, descripcion, código, foto, precio, stock, timestamp} = req;

	const newProduct = {
		nombre,
		descripcion,
		código,
		foto,
		precio,
		stock,
		timestamp,
		id,
	};

	const data = await contenedor.save(newProduct);

	return res.send(data);
}

module.exports = {
	getProducts,
	saveProducts,
	modifyProduct,
};
