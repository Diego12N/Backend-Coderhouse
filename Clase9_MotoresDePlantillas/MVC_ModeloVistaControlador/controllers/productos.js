const mostrarProductos = (req, res) => {
	const datos = {
		producto: "Teclado",
		descripcion: "Mecanico",
		precio: 14000,
	};

	res.render("datos", datos); //(vista, options)
};

module.exports = {
	mostrarProductos,
};
