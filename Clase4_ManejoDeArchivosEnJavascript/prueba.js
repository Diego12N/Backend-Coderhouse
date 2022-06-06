/* 

Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

 */

const fin = () => console.log("Termino");

const monstrarLetras = (str, interval, cb) => {
	let i = 0;

	const PID = setInterval(() => {
		console.log(str[i]);
		i++;
		if (i === str.length) {
			clearInterval(PID);
			cb();
		}
	}, interval);
};

monstrarLetras("Hola", 250, fin);
