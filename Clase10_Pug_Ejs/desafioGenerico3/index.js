const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "ejs");

let personas = [];

app.get("/personas", (req, res) => {
	res.render("pages/index.ejs", {personas});
});

app.post("/personas", (req, res) => {
	personas.push({...req.body});
	console.log(personas);
	res.render("pages/index.ejs", {personas});
});

app.listen(PORT, () => {
	console.log("Desafio Generico 3 server");
});
