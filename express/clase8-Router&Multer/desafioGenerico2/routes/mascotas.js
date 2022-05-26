const router = require("express").Router();

let mascotas = [];

router.get("/", (req, res) => {
	res.json(mascotas);
});

router.post("/mascotas", (req, res) => {
	const {nombre, raza, edad} = req.body;
	mascotas.push({nombre, raza, edad});
	res.json(mascotas);
});

module.exports = router;
