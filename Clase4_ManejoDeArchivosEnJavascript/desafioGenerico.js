//busqueda en db

//Si falla una ejecucion frena las siguientes lineas y se envia al catch

/* function buscarEnBase(nombre) {
	const textoABuscar = "escribir nombre en la base de datos";
	try {
		//database.find("buscar nombre en la db")

		try {
			//database.write(textoABuscar);
		} catch (e) {
			//devolver una respuesta legible sobre el error
		}
	} catch (e) {
		//devolver una respuesta legible sobre el error
	}
}
 */
/* 

Realizar un programa que:
A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
B) Lea nuestro propio archivo de programa y lo muestre por consola.
C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).

Aclaración: utilizar las funciones sincrónicas de lectura y escritura de archivos del módulo fs de node.js 

*/

/* 
Sincronico

fs.readFileSync(path, encoding)
fs.writeFileSync(ruta, datos)  //sobreescribe archivo
fs.appendFileSync(ruta, datos)  //agregar contenido a archivo
fs.unlinkSync(ruta) // El único parámetro es un string con la ruta del archivo que queremos borrar.


*/

const fs = require("fs");
console.clear();

(() => {
	const fyh = Date().toLocaleString();
	const nombreDelArchivo = "fyh.txt";

	try {
		fs.writeFileSync(nombreDelArchivo, fyh);
		const response = fs.readFileSync(nombreDelArchivo, "utf-8");
		console.log(response);
	} catch (e) {
		console.log("No se encuentra el archivo");
	}
})();
