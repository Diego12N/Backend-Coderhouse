import {ApiClass} from "../contenedor/clase.js";
import {faker} from "@faker-js/faker/locale/es";
import {generarUsuario} from "../utils/mocks.js";
class usuariosApi extends ApiClass {
	constructor() {
		super();
	}

	ingresar(cant) {
		let usuarios = [];

		for (let i = 0; i < cant; i++) {
			const usuario = generarUsuario();
			const usuarioGuardado = this.guardar(usuario);
			usuarios.push(usuarioGuardado);
		}

		return usuarios;
	}
}

export default usuariosApi;
