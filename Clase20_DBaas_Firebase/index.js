import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
	nombre: {type: String},
	apellido: {type: String},
	dni: {type: String},
});

const usuariosModel = mongoose.model("usuarios", usuariosSchema);

const nuevoUsuario = {
	nombre: "Federico",
	apellido: "Perez",
	dni: "6546546",
};

const URL =
	"mongodb+srv://diego12emma:4145dnna@cluster0.fhs8u.mongodb.net/ecommerce?retryWrites=true&w=majority";

// mongoose
// 	.connect(URL, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log("Conectando a Atlas");
// 		return usuariosModel.find({});
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

async function DBAtlas() {
	try {
		mongoose.connect(URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const nuevo = new usuariosModel(nuevoUsuario); // Guardo la informacion dentro de la coneccion
		await nuevo.save();

		const usuariosDB = await usuariosModel.find({});

		console.log(usuariosDB);
	} catch (error) {
		console.log(error);
	}
}

DBAtlas();
