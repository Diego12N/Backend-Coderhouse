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

router.get("/:id", (req, res) => {
	const {id} = req.params;
});

router.post("/", (req, res) => {
	const {id} = req.params;
});

router.post("/:id", (req, res) => {
	const {id} = req.params;
});

router.delete("/:id", (req, res) => {
	const {id} = req.params;
});

export default router;
