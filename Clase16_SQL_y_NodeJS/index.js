import {options} from "./configDB.js";
import knex from "knex";

const database = knex(options.MYSQL);

const productos = [
	{nombre: "TV", codigo: "135vcx", precio: 150, stock: 10},
	{nombre: "Celular", codigo: "ads512", precio: 100, stock: 20},
	{nombre: "Auricular", codigo: "5h512", precio: 10, stock: 15},
	{nombre: "Parlantes", codigo: "xxd12", precio: 28, stock: 15},
	{nombre: "Pantalla", codigo: "pc253", precio: 45, stock: 26},
];

(async () => {
	try {
		//Verifico si existe la tabla y la borra con el metodo dropTable
		await database.schema.dropTableIfExists("articulos");

		await database.schema.createTable("articulos", (table) => {
			table.increments("id").primary().unique();
			table.string("nombre", 15).notNullable(); // 15 es la cantidad de digitos
			table.string("codigo", 10).notNullable();
			table.float("precio").notNullable();
			table.integer("stock");
		});
		await database("articulos").insert(productos);

		// const adminiDB = await database.from("administradores").select("*");
		const productosDB = await database.from("articulos").select("*");

		/* productosDB.forEach((product) => {
			console.log(
				`El producto ${product.nombre} tiene un valor de USD $${product.lastname}. Hay ${product.stock} disponibles.`
			);
		}); */
		await database.from("articulos").where("id", "3").del(); //del() Borra un elemento. Utilizando el metodo where se ingresan 3 argumentos (clave, condicion, valor) si la condicion es = no en necesario colocarlo.
		await database.from("articulos").where("id", "2").update({stock: 0});
	} catch (error) {
		throw error;
	}
})();

/* const administradores = [
	{name: "Manuel", lastName: "Garcia", edad: 25},
	{name: "Santiago", lastName: "Garcia", edad: 28},
];

(async () => {
	try {
		//Verifico si existe la tabla y la borra con el metodo dropTable
		await database.schema.dropTable("administradores");

		await database.schema.createTable("administradores", (table) => {
			table.increments("id").primary().unique();
			table.string("name").notNullable();
			table.string("lastname").notNullable();
			table.integer("edad").notNullable();
		});
		await database("administradores").insert(administradores);

		// const adminiDB = await database.from("administradores").select("*");
		const adminiDB = await database
			.from("administradores")
			.select("*")
			.where("name", "Santiago");

		adminiDB.forEach((user) => {
			console.log(
				`El usuario ${user.name} ${user.lastname} tiene ${user.edad} años.`
			);
		});
	} catch (error) {
		throw error;
	}
})();
 */
/* database.schema
	.createTable("usuarios", (table) => {
		table.increments("id").primary().unique();
		table.string("name").notNullable();
		table.string("lastname").notNullable();
		table.integer("edad").notNullable();
	})
	.then(() => {
		console.log("Tabla creada");
	})
	.catch((err) => {
		throw err;
	}); */

/* database("usuarios")
	.insert(usuarios)
	.then(() => {
		console.log("Usuarios agregados");
	})
	.catch((err) => {
		throw err;
	}); */
