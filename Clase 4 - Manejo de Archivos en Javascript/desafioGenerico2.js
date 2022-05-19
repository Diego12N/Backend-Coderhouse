/* 

Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
A) Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
    Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
B) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
C) Muestre por consola el objeto info luego de leer el archivo
D) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
E) Incluir el manejo de errores (con throw new Error)

Aclaraciones:
- Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
- Consigna B): Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en object).
- Consigna C): Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.

Ayuda:
Para el Punto 3 considerar usar JSON.stringify(info, null, 2) para preservar el formato de representación del objeto en el archivo (2 representa en este caso la cantidad de espacios de indentación usadas al representar el objeto como string).



*/

// Para ejecutar el package.json el comando es " npm init --y"

/* 
"File system = fs"

fs.writeFile(ruta, datos, callback(error))  //sobreescribe archivo
fs.appendFile(ruta, datos, callback)  //agregar contenido a archivo
fs.unlink(ruta, callback)  // Borrar un archivo




Recibe los mismos parámetros que su versión sincrónica,
más el callback con un parámetro para manejar algún eventual error. 
La función se encarga internamente de abrir y cerrar 
el archivo una vez finalizado su uso.




*/

const fs = require("fs");
console.clear();

(() => {
	fs.readFile("package.json", (error, file) => {
		if (error) {
			throw new Error("Ha ocurrido un error");
		}

		let info = {
			contenidoStr: file.toString(),
			contenidoObj: JSON.parse(file),
			size: file.toString().length,
		};

		console.log(info);

		fs.writeFile("info.txt", JSON.stringify(info, null, 2), (err) => {
			if (err) {
				throw new Error("Ha fallado");
			}
		});
	});
})();
