const express = require("express");
const router = express.Router();
const app = express();
const PORT = 8080;

const mascotasRouter = require("./routes/mascotas");

app.use(express.json()); // Los datos recibidos por el body se reciben en formato json
app.use("/", mascotasRouter);

app.listen(PORT, () => {
	console.log("Servidor funcionado");
});
