import express from "express";
import {faker} from "@faker-js/faker/locale/es";
const app = express();
const PORT = 4030;

app.use(express.json());

const nombres = ["Luis", "Lucía", "Juan", "Augusto", "Ana"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colores = ["rojo", "verde", "azul", "amarillo", "magenta"];

app.get("/test", (req, res) => {
	let array = [];
	const {cant} = req.query; // Obtengo el query params de cant=
	let max = cant || 10; // Si existe la variable cant, le asigno su valor. Sino Max es = 10
	for (let i = 0; i < max; i++) {
		// const numNombre = Math.floor(Math.random() * 4);
		// const numApellido = Math.floor(Math.random() * 4);
		// const numColor = Math.floor(Math.random() * 4);

		array.push({
			nombre: faker.name.firstName(),
			apellido: faker.name.lastName(),
			color: faker.color.human(),
			id: i,
		});
	}

	res.json(array);
});

app.get("/", (req, res) => {
	const {cant} = req.query; // Obtengo el query params de cant=
	let array = [];
	let max = cant || 10;
	for (let i = 0; i < max; i++) {
		const obj = {
			city: faker.address.city(),
			country: faker.address.country(),
			latitud: faker.address.latitude(),
			company: faker.company.companyName(),
		};

		array.push(obj);
	}

	res.json(array);
});

app.listen(PORT, () => {
	console.log(`Escuchando el puerto ${PORT}`);
});
