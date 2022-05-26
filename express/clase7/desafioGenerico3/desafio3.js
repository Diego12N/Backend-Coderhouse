/* 

Considere la siguiente frase: ‘Frase inicial’
Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).

Aclaraciones:
Utilizar Postman para probar la funcionalidad.
El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

*/

const express = require("express");
const app = express();
const PORT = 8080;
const frase = "Frase inicial";

// Obligatorio:
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//-------------

app.get("/api/frase", (req, res) => {
	res.status(200).send(frase);
});

app.get("/api/palabras/:pos", (req, res) => {
	const pos = parseInt(req.params.pos);
	const fraseArray = frase.split(" ");

	if (isNaN(pos)) {
		return res.status(400).json({error: "El parametro no es un numero"});
	}

	if (num < 0 || num > fraseArray.length) {
		return res.status(400).json({error: "El parametro esta fuera del rango"});
	}

	res.status(200).json({busqueda: fraseArray[pos]});
});

app.post("/api/palabras", (req, res) => {
	const {palabra} = req.body;
	frase = frase.concat(`${palabra.trim()}`);

	const data = {
		agregada: palabra.trim(),
		pos: frase.split(" ").length,
	};

	res.status(200).json(data);
});

app.put("/api/palabras/:pos", (req, res) => {
	const pos = parseInt(req.params.pos) - 1;
	const {palabra} = req.body;
	let fraseArray = frase.split(" ");

	if (isNaN(pos)) {
		return res.status(400).json({error: "El parametro no es un numero"});
	}

	if (num < 0 || num > fraseArray.length) {
		return res.status(400).json({error: "El parametro esta fuera del rango"});
	}

	const oldWord = fraseArray.splice(pos, 1, palabra.trim()).join(" ");
	frase = fraseArray.join(" ");

	const data = {
		actualizada: palabra,
		anterior: oldWord,
		frase,
	};

	res.status(200).json(data);
});

app.delete("/api/palabras/:pos", (req, res) => {});

app.listen(PORT, () => {
	console.log(` ${PORT}`);
});
