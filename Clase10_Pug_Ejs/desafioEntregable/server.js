const express = require("express");
const app = express();
const PORT = 8080;
const moduleContenedor = require("./helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	res.render("pages/index.ejs");
});

app.get("/products", async (req, res) => {
	const data = await contenedor.getAll();
	res.render("pages/products.ejs", {data: data ?? []});
});

app.post("/", async (req, res) => {
	const newProduct = req.body;
	if (
		newProduct.title == "" ||
		newProduct.price == "" ||
		newProduct.thumbnail == ""
	) {
		//res.status(400).send("Existe al menos un campo vacio");
		res.redirect("/");
		return;
	}
	console.log(newProduct);
	await contenedor.save(newProduct);
	res.redirect("/products");
});

app.listen(PORT, () => {
	console.log("Servidor Funcionado");
});
