/* 
Fs con Promesas "File system = fs"

El módulo fs nos permite operar tanto de forma sincrónica como asincrónica.
fs inicialmente ofrecía funciones que reciben un callback para manejar el asincronismo. 
En una actualización de este módulo se agregaron versiones de funciones asincrónicas que en lugar de recibir callbacks, operan mediante promesas con then/catch. 
Posteriormente se incluyó una sintaxis simplificada utilizando las nuevas palabras reservadas “async” y “await”.

*/

const fs = require("fs");

(async () => {
	try {
		const info = JSON.parse(await fs.promises.readFile("info.txt")); // No necesita el encoder para interpretar el BUFER ya que JSON.parse lo interpreta.
		// console.log(info);

		info.contenidoObj.author = "Coderhouserse";
		await fs.promises.writeFile(
			"package.json.coder.txt",
			JSON.stringify(info, null, 2)
		);

		console.log("Done!");
	} catch (e) {
		console.log("Hubo problemas al grabar el archivo: ", e.message);
	}
})();
