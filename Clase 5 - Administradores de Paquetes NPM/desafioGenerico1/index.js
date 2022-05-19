/* (() => {
	const MAX_NUMBER = 10000;
	const RANGO = 20;
	const json = {};

	for (let i = 0; i < MAX_NUMBER; i++) {
		const key = Math.floor(Math.random() * RANGO + 1);
		json[key] ? json[key]++ : (json[key] = 1);
	}

	console.log(json);
})();
 */

// Desafio dos

const productos = [
	{id: 1, nombre: "Escuadra", precio: 323.45},
	{id: 2, nombre: "Calculadora", precio: 234.56},
	{id: 3, nombre: "Globo Terráqueo", precio: 45.67},
	{id: 4, nombre: "Paleta Pintura", precio: 456.78},
	{id: 5, nombre: "Reloj", precio: 67.89},
	{id: 6, nombre: "Agenda", precio: 78.9},
];

(() => {
	const arrayNombres = productos.map((elem) => elem.nombre);
	console.log("Array de nombres", arrayNombres);

	const arrayDePrecios = productos.map((elem) => elem.precio);
	const precioTotal = arrayDePrecios
		.reduce((prev, curr) => prev + curr)
		.toFixed(2); // toFixed fixea las decimales 1207.254684665 => 1207.25

	const precioPromedio = (precioTotal / arrayDePrecios.length).toFixed(2);

	const precioMinimo = Math.min(...arrayDePrecios);
	const precioMaximo = Math.max(...arrayDePrecios);

	const data = {
		arrayNombres,
		precioTotal,
		precioPromedio,
		precioMinimo,
		precioMaximo,
	};

	console.log("precioTotal", precioTotal);
	console.log("precioPromedio", precioPromedio);
	console.log("precioMinimo", precioMinimo);
	console.log("precioMaximo", precioMaximo);

	console.log("Todos los resultados", data);
})();
