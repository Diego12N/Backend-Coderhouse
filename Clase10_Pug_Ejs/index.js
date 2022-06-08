const {application} = require("express");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/hello", (req, res) => {
	res.render("hello.pug", {mensaje: "Usando Pug JS en express"});
});

app.listen(PORT, () => {
	console.log("Server clase 10 funcionado");
});
