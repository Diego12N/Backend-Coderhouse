const fs = require("fs/promises");
const ruta = "./products.txt";

class Contenedor {
	constructor(file) {
		this.file = file;
	}

	readFile() {
		return fs
			.readFile(this.file, "utf-8")
			.then((res) => (res ? JSON.parse(res) : undefined))
			.catch(() => undefined);
	}

	async writeFile(product) {
		return await fs
			.writeFile(this.file, product)
			.catch(() => console.log("No se pudo agregar el producto"));
	}

	async save(productObj) {
		const productList = await this.readFile();
		if (!productList) {
			let newId = 1;
			const productToAdd = Object.assign(productObj, {id: newId});
			const newProduct = JSON.stringify([productToAdd]);

			await this.writeFile(newProduct);
			return console.log(`Se asigno el id Nro ${newId}`);
		}

		const productExist = productList.some(
			(prod) => prod.title === productObj.title
		);

		if (productExist) {
			console.log("Ya existe un producto con el mismo nombre");
			return;
		}

		let newId = productList[productList.length - 1].id + 1;
		const productToAdd = Object.assign(productObj, {id: newId});

		productList.push(productToAdd);

		await this.writeFile(JSON.stringify(productList));

		return console.log(`Se asigno el id Nro ${newId}`);
	}

	getAll() {
		return this.readFile();
	}

	async getById(Number) {
		try {
			const productList = await this.readFile();

			const productSelected = productList.find(
				(product) => product.id === Number
			);

			if (productSelected) {
				return productSelected;
			} else {
				return `No existe un producto con el ID Nro. ${Number}.`;
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

const product1 = {
	title: "chocolate",
	price: "50.5",
	thumbnail: "./img/chocolate.jpg",
};

const product2 = {
	title: "tv",
	price: "100",
	thumbnail: "./img/tv.jpg",
};

const main = async () => {
	const productsFile = new Contenedor(ruta);

	/* 	await productsFile.save(product1);
	await productsFile.save(product2); */

	//productsFile.deleteAll();

	//let product = await productsFile.getById(2);
	let productDelete = await productsFile.deleteById(2);
	// console.log(product);
	//console.log("delete", productDelete);
};

main();
