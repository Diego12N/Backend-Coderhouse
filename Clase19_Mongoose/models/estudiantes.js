/* import mongoose from "mongoose"; */
const mongoose = require("mongoose");

const estudiantesSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
		required: true,
	},
	edad: {
		type: Number,
		required: true,
	},
	dni: {
		type: String,
		required: true,
		unique: true,
	},
	curso: {
		type: String,
		required: true,
	},
	nota: {
		type: Number,
		required: true,
	},
});

/* export const estudiantesModel = mongoose.model(
	"estudiantes",
	estudiantesSchema
); */

const estudiantesModel = mongoose.model("estudiantes", estudiantesSchema);

module.exports = estudiantesModel;
