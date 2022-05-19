let name = "pepe";

let edad = 35;

let precio = "$99.90";

const misSeries = ["Dark", "Mr Robot", "Castelvania"];

const misPeliculas = [
	{
		nombre: "Los Vengadores",
		año: 2012,
		protagonistas: ["Capitan America", "IronMan", "Thor"],
	},
	{
		nombre: "IronMan",
		año: 2012,
		protagonistas: ["Capitan America", "IronMan", "Thor"],
	},
];

/* const Json = JSON.stringify(misPeliculas);

console.log(misPeliculas[0].protagonistas[1]);
console.log(`Probando metodos JSON`, Json); */

let movieName = [];

for (const pelicula of misPeliculas) {
	movieName.push(pelicula);
}

console.log(`Mis peliculas son ${movieName}`);
