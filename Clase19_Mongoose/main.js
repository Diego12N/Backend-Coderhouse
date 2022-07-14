// import mongoose from "mongoose";
// import {estudiantesModel} from "./models/estudiantes.js";
const mongoose = require("mongoose");
const estudiantesModel = require("./models/estudiantes.js");

const informacionEstudiantes = [
	{
		nombre: "Pedro",
		apellido: "Mei",
		edad: 21,
		dni: "31155898",
		curso: "1A",
		nota: 7,
	},
	{
		nombre: "Ana",
		apellido: "Gonzalez",
		edad: 32,
		dni: "27651878",
		curso: "1A",
		nota: 8,
	},
	{
		nombre: "José",
		apellido: "Picos",
		edad: 29,
		dni: "34554398",
		curso: "2A",
		nota: 6,
	},
	{
		nombre: "Lucas",
		apellido: "Blanco",
		edad: 22,
		dni: "30355874",
		curso: "3A",
		nota: 10,
	},
	{
		nombre: "María",
		apellido: "García",
		edad: 36,
		dni: "29575148",
		curso: "1A",
		nota: 9,
	},
	{
		nombre: "Federico",
		apellido: "Perez",
		edad: 41,
		dni: "320118321",
		curso: "2A",
		nota: 5,
	},
	{
		nombre: "Tomas",
		apellido: "Sierra",
		edad: 19,
		dni: "38654790",
		curso: "2B",
		nota: 4,
	},
	{
		nombre: "Carlos",
		apellido: "Fernández",
		edad: 33,
		dni: "26935670",
		curso: "3B",
		nota: 2,
	},
	{
		nombre: "Fabio",
		apellido: "Pieres",
		edad: 39,
		dni: "4315388",
		curso: "1B",
		nota: 9,
	},
	{
		nombre: "Daniel",
		apellido: "Gallo",
		edad: 25,
		dni: "37923460",
		curso: "3B",
		nota: 2,
	},
];

// async function dbMongo() {
// 	try {
// 		mongoose.connect("mongodb://localhost:27017/colegio", {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});

// 		mongoose.connection.on("open", () => {
// 			console.log("Base de datos conectada");
// 		});

// 		/* CREATE */

// 		/* informacionEstudiantes.forEach(async (estudiante) => {
// 			const modelo = new estudiantesModel(estudiante);
// 			modelo.save();
// 		});
//  */
// 		/* READ */
// 		let estudiantes = await estudiantesModel.find({});

// 		console.log(estudiantes);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

mongoose
	.connect("mongodb://localhost:27017/colegio", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Base de datos conectada");

		return estudiantesModel.find({}).sort({nombre: 1}); //Ordena alfabeticamente
	})
	.then((result) => {
		//  console.log(result);
		return estudiantesModel.find({}).sort({edad: 1}).limit(1);
	})
	.then((result) => {
		// console.log(result);
		return estudiantesModel.find({curso: "2A"});
	})
	.then(() => {
		//  console.log(result);
		return estudiantesModel.find({}).sort({edad: 1}).limit(1).skip(1); // Nos muestra el segundo estudiante mas joven.
	})
	.then(() => {
		return estudiantesModel
			.find({}, {nombre: 1, apellido: 1, curso: 1, _id: 0})
			.sort({apellido: -1});
	})
	.then(() => {
		return estudiantesModel.find({}, {nota: 1, _id: 0});
	})
	.then((result) => {
		let totalNotas = 0;

		result.forEach((estudiante) => {
			totalNotas = totalNotas + estudiante.nota;
		});

		console.log(totalNotas / result.length); // Obtener el promedio
	});
