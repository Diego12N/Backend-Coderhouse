const {options} = require("./options/mariaDB");
const knex = require("knex")(options);

const articulos = [
	{
		nombre: "Auricular",
		codigo: "12365",
		precio: "11290",
		stock: "25",
		id: "10a8baa8-0538-4934-98c1-c1f76c4b4d1d",
	},
	{
		nombre: "Celular",
		codigo: "3652",
		precio: "95000",
		stock: "10",
		id: "8e652e67-078b-40e8-b6ba-a1671af50b18",
	},
];

(async () => {
	const tableExists = await knex.schema.hasTable("ecommerce");
	console.log(tableExists);
})();
