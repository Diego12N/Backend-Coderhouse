const fs = require("fs/promises");
const {v4: uuidv4} = require("uuid");

class Contenedor {
	constructor(file) {
		this.file = file;
	}

	readFile() {
		return fs
			.readFile(this.file, "utf-8")
			.then((res) => (res ? JSON.parse(res) : undefined))
			.catch((err) => {
				console.log("Catch", err);
				return undefined;
			});
	}

	async writeFile(product) {
		return await fs
			.writeFile(this.file, product)
			.catch(() => console.log("No se pudo agregar el producto"));
	}

	async save(productObj) {
		const productList = await this.readFile();
		if (!productList) {
			let newId = uuidv4();
			const productToAdd = Object.assign(productObj, {id: newId});
			const newProduct = JSON.stringify([productToAdd]);

			await this.writeFile(newProduct);
			return productToAdd;
		}

		const productExist = productList.some((prod) => prod.id === productObj.id);

		if (productExist) {
			let listUpdated = productList.map((product) => {
				if (product.id === productObj.id) {
					return {
						...product,
						...productObj,
					};
				}

				return product;
			});

			await this.writeFile(JSON.stringify(listUpdated));

			return productObj;
		}

		let newId = uuidv4();
		const productToAdd = Object.assign(productObj, {id: newId});

		productList.push(productToAdd);

		await this.writeFile(JSON.stringify(productList));

		return productToAdd;
	}

	getAll() {
		return this.readFile();
	}

	async getById(Number) {
		try {
			const productList = await this.readFile();

			const productSelected = productList.find((product) => {
				return product.id == Number;
			});

			if (productSelected) {
				return productSelected;
			} else {
				return {error: "producto no encontrado"};
			}
		} catch (error) {
			return "No se pudo acceder al archivo";
		}
	}

	// void - Elimina del archivo el objeto con el id buscado.
	async deleteById(Number) {
		try {
			const productList = await this.readFile();

			const newProductList = productList.filter((product) => {
				return product.id != Number;
			});

			await this.writeFile(JSON.stringify(newProductList));

			return newProductList;

			// await this.writeFile(newProductList);
		} catch (error) {
			return "No se pudo acceder al archivo";
		}
	}

	async deleteAll() {
		await this.writeFile(this.file);
	}
}

module.exports.contenedor = Contenedor;
