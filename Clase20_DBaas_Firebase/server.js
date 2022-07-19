var admin = require("firebase-admin");

var serviceAccount = require("./prueba.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

console.log("Conectado a firebase");

CRUD();

async function CRUD() {
	const db = admin.firestore();
	const usuariosCol = db.collection("usuarios");

	try {
		await usuariosCol.doc().create({nombre: "Julian", apellido: "Gomez"}); // Genera un id automatico si el () esta vacio. Si ingreso un argumento, toma dicho argumento como ID
	} catch (error) {
		console.log(error);
	}
}
