const {channel} = require("diagnostics_channel");
const express = require("express");
const app = express();
const PORT = 8080;
const http = require("http");
const {config} = require("process");
const server = http.createServer(app);
const io = require("socket.io")(server);
const moduleContenedor = require("./helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(config.root + "/public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	const data = await contenedor.getAll();
	res.render("pages/index.ejs", {data: data ?? []});
});

/* app.post("/", async (req, res) => {
	const newProduct = req.body;
	console.log(newProduct);
	await contenedor.save(newProduct);
	const data = await contenedor.getAll();
	res.render("pages/index.ejs", {data: data ?? []});
}); */

let list = [];
let messages = [];

io.on("connection", (channel) => {
	io.sockets.emit("saveCommets", messages);

	channel.on("product", async (data) => {
		await contenedor.save(data);
		const productList = await contenedor.getAll();
		list.push(productList);

		io.sockets.emit("loadProduct", productList);
	});

	channel.on("comments", (commet) => {
		messages.push(commet);
		io.sockets.emit("saveCommets", messages);
	});
});

server.listen(process.env.PORT || PORT, () => {
	console.log("Server IO Funcionado");
});
