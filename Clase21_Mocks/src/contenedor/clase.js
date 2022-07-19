export class ApiClass {
	constructor() {
		this.array = [];
	}

	guardar(obj) {
		let id =
			this.array.length === 0 ? 1 : this.array[this.array.length - 1].id + 1;
		const nuevoObjt = {
			...obj,
			id,
		};
		this.array.push(nuevoObjt);

		return nuevoObjt;
	}

	mostrarTodos() {
		return this.array;
	}
}
