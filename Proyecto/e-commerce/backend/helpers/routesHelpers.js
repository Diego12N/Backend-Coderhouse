const moduleContenedor = require("../helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");
const {version: uuidVersion} = require("uuid");
const {validate: uuidValidate} = require("uuid");

function uuidValidateV4(uuid) {
	return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

async function getProducts(id) {
	if (!uuidValidateV4(id)) {
		const data = await contenedor.getAll();
		return data;
	} else {
		const data = await contenedor.getById(id);
		return data;
	}
}

async function getCartProducts(id) {
	if (!uuidValidateV4(id)) {
		return {};
	} else {
		const data = await contenedor.getById(id);
		return data;
	}
}

async function saveProducts(req) {
	const {nombre, descripcion, codigo, foto, precio, stock} = req;

	const date = new Date();
	const timestamp = date.toLocaleString();

	const newProduct = {
		nombre,
		descripcion,
		codigo,
		foto,
		precio,
		stock,
		timestamp,
	};

	const data = await contenedor.save(newProduct);

	return data;
}

async function modifyProduct(req, res, id) {
	const {nombre, descripcion, codigo, foto, precio, stock, timestamp} = req;

	const newProduct = {
		nombre,
		descripcion,
		codigo,
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
	getCartProducts,
	saveProducts,
	modifyProduct,
};
