// Callbacks (Funciones como parametros)

/* const colorNaming = (color) => {
	console.log(`Tu color es ${color}`);
};

function showColor(color, callback) {
	if (color === "rojo") {
		callback(color);
	} else {
		console.log("Tu color es diferente a rojo");
	}
}

showColor("azul", colorNaming);
 */

//Promesas

/* 

Estados de una promesa: 
    -Pending
    -fulfilled(cumplida)
    -rejected(rechazada)
*/

function dividir(dividendo, divisor) {
	return new Promise((resolve, reject) => {
		if (divisor === 0) {
			reject("no se puede dividir");
		}

		resolve(dividendo / divisor);
	});
}

/* dividir(5, 0)
	.then((resp) => console.log(resp))
	.catch((err) => console.log(err)); */

(async () => {
	try {
		console.log(await dividir(4, 1));
	} catch (error) {
		console.log(error);
	}
})();

// SETTIMEOUT, SETINTERVAL, CLEARINTERVAL

// setInterval(funcion, int); // Espera una funcion y un entero(Representa el tiempo)

/* setTimeout(() => {
	console.log("setTimeout");
}, 1000);

const pid = setInterval(() => {
	console.log("setInterval");
}, 1000);

setTimeout(() => {
	clearInterval(pid);
}, 5000);

console.log(pid);
 */

const timer1 = () => {
	setTimeout(() => {
		console.log("timer1");
	}, 1000);
};

const timer2 = () => {
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(console.log("timer2 Promise"));
		}, 2000);
	});
};

async function muchosTimersAll() {
	try {
		console.log("Inicio All: ", new Date().getSeconds());
	} catch {}
}
