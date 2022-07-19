import {ApiClass} from "../contenedor/clase";
import {faker} from "@faker-js/faker/locale/es";
import {generarUsuario} from "../utils/mocks";
class usuariosApi extends ApiClass {
	constructor() {
		super();
	}

	ingresar(cant) {
		let usuarios = [];

		for (let i = 0; i < cant; i++) {
			const usuario = generarUsuario();
			const usuarioGuardado = this.guardar(usuario);
			usuario.push(usuarioGuardado);
		}

		return usuarios;
	}
}

export default usuariosApi;
