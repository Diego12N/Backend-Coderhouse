//Libreria de Handlebars: npm install express-handlebars

const express = require("express");
const app = express();
const PORT = 8080;
const {engine} = require("express-handlebars");
const productos = require("./routes/productos.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/productos", productos);

app.listen(PORT, () => {
	console.log("Server MVC Funcionando");
});
