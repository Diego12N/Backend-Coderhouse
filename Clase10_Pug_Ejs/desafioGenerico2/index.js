const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/datos", (req, res) => {
	res.render("nivel", req.query);
});

app.listen(PORT, () => {
	console.log("Desafio Generico 2 server funcionando");
});
