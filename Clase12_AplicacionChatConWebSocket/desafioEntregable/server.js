const {channel} = require("diagnostics_channel");
const express = require("express");
const app = express();
const PORT = 8080;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const moduleContenedor = require("./helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");

//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	const data = await contenedor.getAll();
	res.render("pages/index.ejs", {data: data ?? []});
});

app.post("/", async (req, res) => {
	const newProduct = req.body;
	await contenedor.save(newProduct);
	const data = await contenedor.getAll();
	res.render("pages/index.ejs", {data: data ?? []});
});

io.on("connection", (channel) => {});

server.listen(process.env.PORT || PORT, () => {
	console.log("Server IO Funcionado");
});
