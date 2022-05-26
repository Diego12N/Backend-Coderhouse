//Express Avanzado

//npm init -y
//npm i express

//Codigos de respuesta http https://http.cat/

//Mas usados:

// 200 - 201 -203 -206
// 304
// 400 - 401 -403 - 404 hubo algun problema en la peticion
// 500 - 501 Errores internos del servidor
/* 
1xx (Informativo): La petición fue recibida, y continúa su procesamiento. 
2xx (Éxito): La petición fue recibida con éxito, comprendida y procesada. 
3xx (Redirección): Más acciones son requeridas para completar la petición. 
4xx (Error del cliente): La petición tiene algún error, y no puede ser procesada. 
5xx (Error del servidor): El servidor falló al intentar procesar una petición aparentemente válida.
 */

//ABM ALTA BAJA MODIFICACION
//CRUD -- CREATE READ UPDATE  DELETE

const express = require("express");
const app = express();
const PORT = 8080;
const frase = "Hola mundo";

app.get("/api/frase", (req, res) => {
	res.status(200).json({frase});
});

app.get("/api/frase/:num", (req, res) => {
	const num = parseInt(req.params.num) - 1;

	if (isNaN(num)) {
		return res.status(400).json({error: "El parametro no es un numero"});
	}

	if (num < 0 || num > frase.length) {
		return res.status(400).json({error: "El parametro esta fuera del rango"});
	}

	res.status(200).send(frase[num]);
});

app.get("/api/palabra/:num", (req, res) => {
	const fraseArray = frase.split(" ");
	const num = parseInt(req.params.num) - 1;

	if (isNaN(num)) {
		return res.status(400).json({error: "El parametro no es un numero"});
	}

	if (num < 0 || num > fraseArray.length) {
		return res.status(400).json({error: "El parametro esta fuera del rango"});
	}

	res.status(200).send(fraseArray[num]);
});

app.listen(PORT, () => {
	console.log(` ${PORT}`);
});
