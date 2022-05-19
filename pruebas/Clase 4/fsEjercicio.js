/* 
1- Crear un archivo con usuarios.
2- Solicitar un usario.
3- Modificar su contraseña

*/

const fs = require("fs");

const usuarios = [
	{
		userId: "Mirian12",
		mail: "mirian12@gmail.com",
		contraseña: "2525mirm",
	},
	{
		userId: "Salva01",
		mail: "salva01@gmail.com",
		contraseña: "sal191915",
	},
];
const filePath = "./userList.txt";

const doUserFile = (list) => {
	const JSONlist = JSON.stringify(list);
	const listComprobation = fs.existsSync(filePath);

	if (!listComprobation) {
		fs.writeFile("./userList.txt", JSONlist, (err) => {
			if (err) {
				console.log("Hubo un error");
			} else {
				console.log("Lista creada");
			}
		});
	} else {
		modifyPassword("Salva01", "dlasokdeg");
	}
};

const modifyPassword = (user, password) => {
	fs.readFile(filePath, "utf-8", (err, content) => {
		try {
			const fileContent = JSON.parse(content);

			let userIndex = fileContent.findIndex((elem) => elem.userId === user);
			let userPassword = fileContent[userIndex].contraseña;

			if (userIndex === -1) {
				console.log("usuario inexistente");
			} else if (userPassword != password) {
				fileContent[userIndex].contraseña = password;

				const JSONdata = JSON.stringify(fileContent);

				fs.writeFile("./userList.txt", JSONdata, (err) => {
					if (err) {
						console.log(err);
					} else {
						console.log("Contraseña actualizada");
					}
				});
			} else {
				console.log("Ingrese una clave diferente a la anterior");
			}
		} catch (err) {
			console.log("El archivo no existe");
		}
	});
};

doUserFile(usuarios);
