const express = require("express");
const app = express();
const PORT = 8080;
const products = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", products);

app.get("/", (req, res) => {
	res.send("Prueba");
});

/* app.post("/", (req, res) => {
	const {title, price, thumbnail} = req.body;
	const object = {title, price, thumbnail};

	res.send(object);
}); */

app.listen(PORT, () => {
	console.log("Servidor Funcionado");
});
