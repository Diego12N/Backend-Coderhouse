import express from "express";

const app = express();
const PORT = 8080;
import {Persona} from "./lib/clase";
import {getTime} from "./lib/time";

app.get("/", (req, res) => {
	res.status(200).send("Prueba");
});

app.listen(PORT, () => {
	console.log("Server running");
});
