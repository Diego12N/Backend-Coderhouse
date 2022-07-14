import mongoose from "mongoose";

const articulosSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	precio: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
		default: 0, //No es requerido pero si esta informacion no llega lo define en 0
	},
});

export const articulosModel = mongoose.model("articulo", articulosSchema);
