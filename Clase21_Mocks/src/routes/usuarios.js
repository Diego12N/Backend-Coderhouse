import {Router} from "express";
import usuariosApi from "../daos/usuariosApi.js";
const router = Router();
const api = new usuariosApi();

router.post("/popular", async (req, res) => {
	const {cant} = req.query;
	let max = cant || 50;
	let usuarios = await api.ingresar(max);

	res.json(usuarios);
});

router.get("/", (req, res) => {
	const todos = api.mostrarTodos();
	res.json(todos);
});

router.get("/:id", (req, res) => {
	const {id} = req.params;
});

router.post("/", async (req, res) => {
	let usuarios = await api.ingresar(1);
	res.json(usuarios);

	res.json(usuarios);
});

router.post("/:id", (req, res) => {
	const {id} = req.params;
});

router.delete("/:id", (req, res) => {
	const {id} = req.params;
});

export default router;
