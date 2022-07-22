import {normalize, denormalize, schema} from "normalizr";

const empresa = {
	id: "1000",
	nombre: "Coderhouse",
	gerente: {
		id: "2",
		nombre: "Pedro",
		apellido: "Mei",
		DNI: "20442639",
		direccion: "CABA 457",
		telefono: "1567811544",
	},
	encargado: {
		id: "3",
		nombre: "Pablo",
		apellido: "Blanco",
		DNI: "20442640",
		direccion: "CABA 458",
		telefono: "1567811545",
	},
	empleados: [
		{
			id: "1",
			nombre: "Nicole",
			apellido: "Gonzalez",
			DNI: "20442638",
			direccion: "CABA 456",
			telefono: "1567811543",
		},
		{
			id: "2",
			nombre: "Pedro",
			apellido: "Mei",
			DNI: "20442639",
			direccion: "CABA 457",
			telefono: "1567811544",
		},
		{
			id: "3",
			nombre: "Pablo",
			apellido: "Blanco",
			DNI: "20442640",
			direccion: "CABA 458",
			telefono: "1567811545",
		},
		{
			id: "4",
			nombre: "Ana",
			apellido: "Rojo",
			DNI: "20442641",
			direccion: "CABA 459",
			telefono: "1567811546",
		},
		{
			id: "5",
			nombre: "Lucia",
			apellido: "Sorbo",
			DNI: "20442642",
			direccion: "CABA 460",
			telefono: "1567811547",
		},
		{
			id: "6",
			nombre: "Jose",
			apellido: "Pieres",
			DNI: "20442643",
			direccion: "CABA 461",
			telefono: "1567811548",
		},
		{
			id: "7",
			nombre: "Maria",
			apellido: "Lopez",
			DNI: "20442644",
			direccion: "CABA 462",
			telefono: "1567811549",
		},
	],
};

// Definir los esquemas

// Definir Esquema empleado

const empleadosSchema = new schema.Entity("empleados");
import {inspect} from "util"; // Util es el modulo nativo de node

//definir esquema empresa
//Siempre que necesito informacion de otro esquema, debo enviar como segundo parametro un objeto
const empresaSchema = new schema.Entity("empresa", {
	gerente: empleadosSchema,
	encargado: empleadosSchema,
	empleados: [empleadosSchema],
});

//Primer parametro indico donde esta la data que quiero normalizar, y el segundo parametro es el esquema principal.
const empresaNormalized = normalize(empresa, empresaSchema);

console.log("Data Inicial", JSON.stringify(empresa).length);
console.log("Data Normalized", JSON.stringify(empresaNormalized).length);

function print(obj) {
	console.log(inspect(obj, false, 12, true)); //El resto de parametros son por defecto.
}

// print(empresaNormalized);

//Desnormalizar data
//El metodo denormalize recibe dos parametros, el primero que hace referencia a la propiedad result proveniente del objeto normalizado, y el segundo es el esquema. Por ultimo
// envio las entidades generadas.

const empresaDenormalized = denormalize(
	empresaNormalized.result,
	empresaSchema,
	empresaNormalized.entities
);

console.log("Data Desnormalized", JSON.stringify(empresaDenormalized).length);

print(empresaDenormalized);
