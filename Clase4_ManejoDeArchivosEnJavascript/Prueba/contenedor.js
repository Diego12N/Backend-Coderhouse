const fs = require("fs");

class Contenedor {
	constructor(name) {
		this.file = name;
		this.countID = 0;
		this.contenido = [];
	}

	async read() {
		try {
			if (fs.existsSync(this.file)) {
				const data = await fs.promises.readFile(this.file);
				return JSON.parse(data);
			} else {
				return [];
			}
		} catch (error) {
			console.log("Error al leer el archivo", error);
		}
	}
	async write() {
		await fs.promises.writeFile(
			this.file,
			JSON.stringify(this.contenido, null, "")
		);
	}

	save(object) {
		this.countID++;
		object["id"] = this.countID;
		this.contenido.push(object);
		this.write();
		return `El id del objeto añadido es ${this.countID}`;
	}
}

module.exports = Contenedor;
