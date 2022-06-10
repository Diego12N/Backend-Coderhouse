/* 

Crear un servidor que permita elegir y subir un archivo utilizando un formulario servido desde su espacio público.
Dicho archivo se almacenará en una carpeta propia del servidor llamada 'uploads'.
El nombre del archivo guardado se formará con el nombre original anteponiéndole un timestamp (Date.now()) seguido con un guión. Ej: 1610894554093-clase1.zip
Utilizar express y multer en un proyecto de servidor que escuche en el puerto 8080.


*/

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.listen(8080, (req, res) => {
	console.log("Server funcionando");
});