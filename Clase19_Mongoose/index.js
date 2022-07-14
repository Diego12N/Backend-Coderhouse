import mongoose from "mongoose";
import {articulosModel} from "./models/articulos.js";

async function dbMongo() {
	try {
		mongoose.connect("mongodb://localhost:27017/empresaNode", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		mongoose.connection.on("open", () => {
			console.log("Base de datos conectada");
		});

		const primerArticulo = {
			nombre: "teclado",
			precio: 55.5,
		};

		/* CREATE */
		// Se guarda como documento dentro de la coleccion, y si utilizo la misma constante no remplaza el documento anterior.
		// const modelo = new articulosModel(primerArticulo);
		// modelo.save();

		/* READ */
		//Leer informacion de la DB
		let articulos = await articulosModel.find({});
		// console.log(articulos);

		/* UPDATE */
		let articuloActualizado = await articulosModel.updateOne(
			{nombre: "Computadora"},
			{$set: {stock: 50}}
		);
		console.log(articuloActualizado);

		/* DELETE */

		let articuloEliminado = await articulosModel.deleteOne({
			nombre: "Computadora",
		});

		console.log(articuloEliminado);
	} catch (error) {
		console.log(error);
	}
}

dbMongo();
