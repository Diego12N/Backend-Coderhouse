/* 

Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.
 */
/* 
const fin = () => console.log("termine");

function mostrarLetras(palabra, intervalo, cb) {
	let i = 0;
	const PID = setInterval(() => {
		console.log(palabra[i]);
		i++;
		if (i === palabra.length) {
			clearInterval(PID);
			cb();
		}
	}, intervalo);
}

mostrarLetras("Hola", 250, fin);
 */

/* 
"File system = fs"  Documentacion https://nodejs.org/api/fs.html

fs es la abreviatura en inglés para file system o sistema de archivos y es, además, uno de los módulos más básicos y útiles de Node.js.
En Node.js es posible manipular archivos a través de fs (crear, leer, modificar, etc.). 
La mayoría de las funciones que contiene este módulo pueden usarse tanto de manera sincrónica como asincrónica.


Las funciones sincrónicas terminan con “Sync”
Son operaciones bloqueantes que devuelven un resultado

Podemos listar algunas de ellas:
	-readFileSync: lectura de un archivo en forma sincrónica
	-writeFileSync: escritura de un archivo en forma sincrónica
	-appendFileSync: actualización de un archivo en forma sincrónica
	-unlinkSync: borrado de un archivo en forma sincrónica
	-mkdirSync: creación de una carpeta
*/
