const express = require("express");
const app = express();
const PORT = 8080;
const mascotas = require("./routes/mascotas");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/mascotas", mascotas);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
	console.log("Servidor funcionando");
});
